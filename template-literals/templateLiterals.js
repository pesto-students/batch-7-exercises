const footballTeam = [
  'Rooney',
  'Ronaldo',
  'Messi',
  'Pogba',
];

const getNamesOfFootballTeam = () => footballTeam.join(', ');

function templateLiterals() {
  const message = `There are ${footballTeam.length} people on the football team.`
    + ` Their names are ${getNamesOfFootballTeam()}.`;

  return message;
}

export {
  templateLiterals,
};
