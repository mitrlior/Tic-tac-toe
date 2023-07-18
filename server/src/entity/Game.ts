import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  gameId: number;

  @Column({
    type: "varchar",
    default: "player1",
    length: 7,
  })
  NextTurn: string;

  @Column({
    type: "varchar",
    length: 1,
    default: "",
  })
  pos1: number;

  @Column({
    type: "varchar",
    length: 1,
    default: "",
  })
  pos2: number;

  @Column({
    type: "varchar",
    length: 1,
    default: "",
  })
  pos3: number;

  @Column({
    type: "varchar",
    length: 1,
    default: "",
  })
  pos4: number;

  @Column({
    type: "varchar",
    length: 1,
    default: "",
  })
  pos5: number;

  @Column({
    type: "varchar",
    length: 1,
    default: "",
  })
  pos6: number;

  @Column({
    type: "varchar",
    length: 1,
    default: "",
  })
  pos7: number;

  @Column({
    type: "varchar",
    length: 1,
    default: "",
  })
  pos8: number;

  @Column({
    type: "varchar",
    length: 1,
    default: "",
  })
  pos9: number;

  // progress, ended
  @Column({
    type: "varchar",
    length: 12,
    default: "in progress",
  })
  status: string;

  @Column({
    type: "varchar",
    length: 7,
    default: "",
  })
  winner: string;
}
