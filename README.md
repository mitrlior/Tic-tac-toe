
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

- **POST**    `http://localhost:3000/new` asks the server for a new game, the server returns  a game id
- **POST**  `http://localhost:3000/game/{gameId}` make a move in the game
The Body of the request contains 2 parametes, the player number and the position number
example for request : 

    http://localhost:3000/game/1
    {
    
    "pos"  :  "8",
    
    "player"  :  "player1"
    
    }

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