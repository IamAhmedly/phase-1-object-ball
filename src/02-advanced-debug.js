console.log("Advanced debugging example running.");
debugger;
// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger;
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger;

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player;
      for (let key in data) {
        debugger;
      }
    }
  }
}

// then, call the function so it runs!
goodPractices();


function numPointsScored(playerName) {
  const gameData = gameObject();
  for (const team in gameData) {
    const players = gameData[team].players;
    if (players.hasOwnProperty(playerName)) {
      return players[playerName].points;
    }
  }
  return null; // Return null if player not found
}
function shoeSize(playerName) {
  const gameData = gameObject();
  for (const team in gameData) {
    const players = gameData[team].players;
    if (players.hasOwnProperty(playerName)) {
      return players[playerName].shoe;
    }
  }
  return null; // Return null if player not found
}

function teamColors(teamName) {
  const gameData = gameObject();
  for (const team in gameData) {
    if (gameData.hasOwnProperty(team)) {
      if (gameData[team].teamName === teamName) {
        return gameData[team].colors;
      }
    }
  }
  return null; // Return null if team not found
}

function teamNames() {
  const gameData = gameObject();
  return [gameData.home.teamName, gameData.away.teamName];
}

function playerNumbers(teamName) {
  const gameData = gameObject();
  const players =
    teamName === gameData.home.teamName
      ? gameData.home.players
      : gameData.away.players;
  return Object.values(players).map((player) => player.number);
}

function playerStats(playerName) {
  const gameData = gameObject();
  for (const team in gameData) {
    const players = gameData[team].players;
    if (players.hasOwnProperty(playerName)) {
      return players[playerName];
    }
  }
  return null; // Return null if player not found
}

function bigShoeRebounds() {
  const gameData = gameObject();
  let largestShoeSize = 0;
  let playerWithLargestShoe;
  for (const team in gameData) {
    const players = gameData[team].players;
    for (const playerName in players) {
      if (players.hasOwnProperty(playerName)) {
        const shoeSize = players[playerName].shoe;
        if (shoeSize > largestShoeSize) {
          largestShoeSize = shoeSize;
          playerWithLargestShoe = playerName;
        }
      }
    }
  }
  return playerStats(playerWithLargestShoe).rebounds;
}
