import { DoubleRange } from "../types";

export interface Match {
  id: number;
  date: Date;
  homeTeam: string;
  awayTeam: string;
  stadium: string;
  homeOdd: number;
  awayOdd: number;
  drawOdd: number;
}
