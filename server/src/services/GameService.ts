import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";
import { Game } from "../entity/Game";

export class GameService {
  // Singleton
  private static instance: GameService;

  // DB entity
  private GameRepository: Repository<Game>;

  private constructor() {
    this.GameRepository = AppDataSource.getRepository(Game);
  }

  public static getInstance(): GameService {
    if (!GameService.instance) {
      GameService.instance = new GameService();
    }
    return GameService.instance;
  }

  public newGame() {}

  public async findGameById(gameId: number): Promise<Game> {
    const gameEntity = await this.GameRepository.findOne({
      where: { gameId },
    });
    if (!gameEntity) {
      return null;
    }
    return gameEntity;
  }

  public async makeAmove(
    gameId: number,
    player: string,
    pos: number
  ): Promise<Object> {
    // Check if game exists
    const game = await this.findGameById(gameId);
    if (!game) {
      return { problem: "Game does not exits" };
    }

    // Check if game already done
    console.log("Check if game ended");
    console.log(game.status);
    if (game["status"] === "Ended") {
      console.log("hey");
      return { problem: `Game already ended, the winner is ${game.winner}` , game };
    }
    console.log("Game didn't ended");
    const sign: string = player === "player1" ? "X" : "O";

    // Make a move
    if (game[`pos${pos}`] === "") {
      game[`pos${pos}`] = sign;
      game["NextTurn"] = player === "player1" ? "player2" : "player1";
      // Check if winner
      if (this.checkWin(game, sign)) {
        game.winner = player;
        game.status = "Ended";
        this.GameRepository.save(game);
        return { winner: player, game: game };
      }
      // Check if tie
      if (this.checkTie(game)) {
        game.winner = "Tie";
        game.status = "Ended";
        this.GameRepository.save(game);
        return { winner: "Tie", game: game };
      }
      this.GameRepository.save(game);
      return game;
    }
    return { problem: "Illegal move", game: game };
  }

  private checkTie(game: Game): Boolean {
    const isTie = (arr) => arr.every((item) => item === "X" || item === "O");
    return isTie([
      game["pos1"],
      game["pos2"],
      game["pos3"],
      game["pos4"],
      game["pos5"],
      game["pos6"],
      game["pos7"],
      game["pos8"],
      game["pos9"],
    ]);
  }

  private checkWin(game: Game, sign: string): Boolean {
    const isWinner = (arr) => arr.every((item) => item === sign);

    let winner: Boolean = false;
    //top row
    if (isWinner([game["pos1"], game["pos2"], game["pos3"]])) {
      winner = true;
    }
    // middle row
    if (isWinner([game["pos4"], game["pos5"], game["pos6"]])) {
      winner = true;
    }
    // bottom row
    if (isWinner([game["pos7"], game["pos8"], game["pos9"]])) {
      winner = true;
    }
    // left colum
    if (isWinner([game["pos1"], game["pos4"], game["pos7"]])) {
      winner = true;
    }

    // middle colum
    if (isWinner([game["pos2"], game["pos5"], game["pos8"]])) {
      winner = true;
    }

    // right colum
    if (isWinner([game["pos3"], game["pos6"], game["pos9"]])) {
      winner = true;
    }

    // left diagonal
    if (isWinner([game["pos1"], game["pos5"], game["pos9"]])) {
      winner = true;
    }
    // right diagonal
    if (isWinner([game["pos3"], game["pos5"], game["pos7"]])) {
      winner = true;
    }
    return winner;
  }
}
