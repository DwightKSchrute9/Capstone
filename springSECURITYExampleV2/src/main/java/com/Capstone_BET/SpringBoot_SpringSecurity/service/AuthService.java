package com.Capstone_BET.SpringBoot_SpringSecurity.service;

import com.Capstone_BET.SpringBoot_SpringSecurity.payload.LoginDto;
import com.Capstone_BET.SpringBoot_SpringSecurity.payload.RegisterDto;

public interface AuthService {
    
	String login(LoginDto loginDto);
    String register(RegisterDto registerDto);
    
}
