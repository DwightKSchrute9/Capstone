package com.example.catBet.util;



import java.security.SecureRandom;

public class UserUtils {
  
  //Genera una password casuale e sicura
  public static String generateRandomPassword() {
    int length = 12;
    String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-{}[]\\|;:\'\",.<>?";
    SecureRandom random = new SecureRandom();
    StringBuilder sb = new StringBuilder();
    for (int i = 0; i < length; i++) {
      int index = random.nextInt(chars.length());
      sb.append(chars.charAt(index));
    }
    return sb.toString();
  }
  
  //Verifica se una stringa è un indirizzo email valido
  public static boolean isValidEmail(String email) {
    String regex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$";
    return email.matches(regex);
  }
}
