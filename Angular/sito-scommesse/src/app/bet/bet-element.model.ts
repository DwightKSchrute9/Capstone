
import { Match } from "../matches/matches.model";
import { BetType } from "./betType.enum";
import { DoubleRange } from "../types";

export interface BetElement {
  match: Match;
  betType: string;
  odd: number;
}
