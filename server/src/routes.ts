import { GameController } from "./controller/GameController"

export const Routes = [
  {
    method: "post",
    route: "/new",
    controller: GameController,
    action: "new",
  },
  {
    method: "post",
    route: "/game/:gameId",
    controller: GameController,
    action: "move",
  },
];