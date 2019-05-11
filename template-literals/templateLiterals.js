function templateLiterals() {
  const footballPlayers = ['Rooney', 'Ronaldo', 'Messi', 'Pogba'];
  return `There are ${footballPlayers.length} people on the football team. Their names are ${
    footballPlayers[0]
  }, ${footballPlayers[1]}, ${footballPlayers[2]}, ${footballPlayers[3]}.`;
}

export { templateLiterals };
