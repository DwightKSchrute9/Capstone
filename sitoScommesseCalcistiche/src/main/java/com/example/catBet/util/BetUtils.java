package com.example.catBet.util;



public class BetUtils {
	  
	  //Calcola il potenziale guadagno per una scommessa vincente
	  public static double calculatePotentialWinning(double stake, double odds) {
	    return stake * odds;
	  }
	  
	  //Verifica se la scommessa inserita dall'utente è valida
	  public static boolean isValidBet(double stake, double odds) {
	    return stake > 0 && odds > 1;
	  }
	}
