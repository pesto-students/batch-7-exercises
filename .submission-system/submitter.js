#!/usr/bin/env node

const { GraphQLClient } = require('graphql-request');
const {
  BATCH_ID,
  PESTO_API_TOKEN,
  PESTO_GRAPHQL_ENDPOINT,
  EXERCISE_SUBMISSION_FILE,
  TRAVIS_PULL_REQUEST_SLUG,
  TRAVIS_PULL_REQUEST, // PR Number
} = require('./config');
const { getCommitterUsernameByPR, readFileSyncOrThrow } = require('./utils');


const graphQLQuery = `
  mutation saveExerciseSubmission($exerciseSubmissionInput: ExerciseSubmissionInput!) {
    saveExerciseSubmission(exerciseSubmissionInput: $exerciseSubmissionInput)
  }
`;

const getTransformedExerciseSubmission = (exerciseSubmissionData) => {
  const { exercises } = exerciseSubmissionData;
  return Object.entries(exercises).map(([key, valObj]) => ({
    exerciseSlug: key,
    didPass: valObj['completed'],
  }));
};

const main = async () => {
  const committerGithubUsername = await getCommitterUsernameByPR(
    TRAVIS_PULL_REQUEST_SLUG,
    TRAVIS_PULL_REQUEST,
  );

  const exerciseSubmissionData = JSON.parse(readFileSyncOrThrow(EXERCISE_SUBMISSION_FILE, 'utf-8'));

  const { day: dayName, segmentName } = exerciseSubmissionData;
  const [, dayNumber] = dayName.split('-');
  const [, segmentNumber] = segmentName.split('-');

  const graphqlEndPoint = new GraphQLClient(PESTO_GRAPHQL_ENDPOINT, {
    headers: {
      authorization: `Bearer ${PESTO_API_TOKEN}`,
    },
  });

  return graphqlEndPoint.request(graphQLQuery, {
    exerciseSubmissionInput: {
      githubUsername: committerGithubUsername,
      batchId: BATCH_ID,
      day: parseInt(dayNumber, 10),
      segment: parseInt(segmentNumber, 10),
      exerciseResults: getTransformedExerciseSubmission(exerciseSubmissionData),
    },
  });
};

main().then(console.log).catch(console.error);
