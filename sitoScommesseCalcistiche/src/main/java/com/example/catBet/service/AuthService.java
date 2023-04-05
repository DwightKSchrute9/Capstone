package com.example.catBet.service;

import com.example.catBet.payload.LoginDto;
import com.example.catBet.payload.RegisterDto;

public interface AuthService {
    
	String login(LoginDto loginDto);
    String register(RegisterDto registerDto);
	String login1(LoginDto loginDto);
	String register1(RegisterDto registerDto);
    
}