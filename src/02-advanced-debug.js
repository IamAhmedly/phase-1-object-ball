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

function bigShoeRebounds() {
  const gameData = gameObject();
  let largestShoeSize = 0;
  let playerWithLargestShoe;

  for (const team in gameData) {
    const players = gameData[team].players;
    for (const playerName in players) {
      if (players.hasOwnProperty(playerName)) {
        const player = playerStats(playerName);
        if (player.shoe > largestShoeSize) {
          largestShoeSize = player.shoe;
          playerWithLargestShoe = player;
        }
      }
    }
  }

  return playerWithLargestShoe.rebounds;
}

function mostPointsScored() {
  const gameData = gameObject();
  let mostPoints = 0;
  let playerWithMostPoints;

  for (const team in gameData) {
    const players = gameData[team].players;
    for (const playerName in players) {
      if (players.hasOwnProperty(playerName)) {
        const player = playerStats(playerName);
        if (player.points > mostPoints) {
          mostPoints = player.points;
          playerWithMostPoints = playerName;
        }
      }
    }
  }

  return playerWithMostPoints;
}

function winningTeam() {
  const gameData = gameObject();
  let maxPoints = 0;
  let winningTeamName;

  for (const team in gameData) {
    let totalPoints = 0;
    const players = gameData[team].players;
    for (const playerName in players) {
      if (players.hasOwnProperty(playerName)) {
        totalPoints += playerStats(playerName).points;
      }
    }
    if (totalPoints > maxPoints) {
      maxPoints = totalPoints;
      winningTeamName = gameData[team].teamName;
    }
  }

  return winningTeamName;
}

function playerWithLongestName() {
  const gameData = gameObject();
  let longestName = '';
  let playerWithLongestName;

  for (const team in gameData) {
    const players = gameData[team].players;
    for (const playerName in players) {
      if (playerName.length > longestName.length) {
        longestName = playerName;
        playerWithLongestName = playerName;
      }
    }
  }

  return playerWithLongestName;
}

function doesLongNameStealATon() {
  const gameData = gameObject();
  const longestNamePlayer = playerWithLongestName();
  let mostStealsPlayer;
  let mostSteals = 0;

  for (const team in gameData) {
    const players = gameData[team].players;
    for (const playerName in players) {
      if (players[playerName].steals > mostSteals) {
        mostSteals = players[playerName].steals;
        mostStealsPlayer = playerName;
      }
    }
  }

  return longestNamePlayer === mostStealsPlayer;
}