import { Utente } from "../utente/utente.model";
import { BetElement } from "./bet-element.model";

export interface Bet {
  id: number;
  odd: number;
  user: Utente;
  betElements: BetElement[];
  betAmount: number;
  winAmount: number;
  betStatus: string;
  betResult: string;
}
