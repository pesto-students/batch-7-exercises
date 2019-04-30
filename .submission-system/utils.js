const fs = require('fs');
const { red } = require('chalk');
const { URL } = require('url');
const fetch = require('node-fetch');

const { GITHUB_TOKEN } = require('./config');


const fetchWithAuth = (url, config = {}) => fetch(url,
  { headers: { Authorization: `token ${GITHUB_TOKEN}` }, ...config });

const getPullRequestAPIURL = repoSlug => (prNumber = 0) => {
  const prWithStartingSlash = `/${prNumber}`;
  const url = new URL(
    `https://api.github.com/repos/${repoSlug}/pulls${prNumber > 0 ? prWithStartingSlash : ''}`,
  );
  if (prNumber <= 0) {
    url.searchParams.set('state', 'all');
  }
  return url.toJSON();
};

const getCommitterUsernameByPR = async (repoSlug, prNumber) => {
  const prResponse = await fetchWithAuth(getPullRequestAPIURL(repoSlug)(prNumber));
  const prData = await prResponse.json();

  if (!prData) {
    throw new Error(`In ${repoSlug}, PR ${prNumber} does not exist`);
  }

  const { user: { login: committerGithubUsername } } = prData;
  return committerGithubUsername;
};

const readFileSyncOrThrow = (filepath, ...rest) => {
  try {
    return fs.readFileSync(filepath, ...rest);
  } catch (err) {
    throw new Error(red(`Cannot read file ${filepath}`));
  }
};

module.exports = {
  getPullRequestAPIURL,
  getCommitterUsernameByPR,
  readFileSyncOrThrow,
};
