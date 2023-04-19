import { DoubleRange } from "../types";

export interface Match {
  id: number;
  date: Date;
  homeTeam: string;
  awayTeam: string;
  stadium: string;
  homeOdd: DoubleRange;
  awayOdd: DoubleRange;
  drawOdd: DoubleRange;
}
