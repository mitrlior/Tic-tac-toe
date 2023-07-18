
# Tic-Tac-Toe

This repository contains a TypeScript project developed by Lior Mitrany. The project utilizes the following technologies: typeorm, express, postgress, and docker.

## Project Structure

The project consists of the following components:


## Game board

The player1 sign is 'X'
The player1 sign is 'O'

| Pos 1 |Pos 2 | | Pos 3 |
| Pos 4 |Pos 5 | | Pos 6 |
| Pos 7 |Pos 8 | | Pos 9 |

### Controller

There is a single controller in the project that handles the requests for the game

- **POST**    `http://localhost:3000/new` asks the server for a new game, the server returns  a game id. The gameId is needed to initiate a new game, after that player1 and player2 will need the game id to make a move in the game.
example for response: 

    {
        "gameId": 2
    }
    
- **POST**  `http://localhost:3000/game/{gameId}` make a move in the game
The Body of the request contains 2 parametes, the player number and the position number

    example for response: 

   **POST** http://localhost:3000/game/1
    {
    
    "pos"  :  "8",
    
    "player"  :  "player1"
    
    }

The game will return the board and the status of the game.
Example for response: 

{
    "game": {
        "gameId": 1,
        "NextTurn": "player2",
        "pos1": "X",
        "pos2": "O",
        "pos3": "",
        "pos4": "X",
        "pos5": "O",
        "pos6": "",
        "pos7": "",
        "pos8": "X",
        "pos9": "",
        "status": "in progress",
        "winner": ""
    }
}

The game also indicate who needs to make the next  move.
And if there is a winner it will update who the winner and the status will change to "Ended".


### Services
**GameService** - Handles all the game creation and movements in the game

### Tables

The project includes one database table for storing game data:

**Game Table**: Stores information about domains.

| Field        | Type   |
|--------------|--------|
| gameId       | Numeric|
| NextTurn     | String |
| pos1         | String |
| pos2         | String |
| pos3         | String |
| pos4         | String |
| pos5         | String |
| pos6         | String |
| pos7         | String |
| pos8         | String |
| pos9         | String |
| status       | String |
| winner       | String |

## Setup and Execution

To run the project, run the command
docker compose up