import { Match } from "../matches/matches.model";
import { BetType } from "./betType.enum";

export interface Bet {
  match: Match,
  betType: BetType,
  odd: DoubleRange
}
