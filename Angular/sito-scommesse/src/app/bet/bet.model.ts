
import { Match } from "../matches/matches.model";
import { BetType } from "./betType.enum";
import { DoubleRange } from "../types";

export interface Bet {
  match: Match;
  betType: String;
  odd: DoubleRange;
}
