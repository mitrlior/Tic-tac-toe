import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { GameService } from "../services/GameService";
import { Game } from "../entity/Game";

export class GameController {
  private gameRepository = AppDataSource.getRepository(Game);
  private gameService = GameService.getInstance();

  async new(): Promise<Object> {
    const newGame = Object.assign(new Game(), {});

    const { gameId } = await this.gameRepository.save(newGame);

    return { gameId: gameId };
  }

  async move(request: Request) {
    const gameId = parseInt(request.params.gameId);

    const { pos, player } = request.body;

    return await this.gameService.makeAmove(gameId, player, pos);
  }
}
