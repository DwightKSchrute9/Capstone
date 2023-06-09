package com.Capstone_BET.SpringBoot_SpringSecurity.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Capstone_BET.SpringBoot_SpringSecurity.entity.User;
import com.Capstone_BET.SpringBoot_SpringSecurity.payload.JWTAuthResponse;
import com.Capstone_BET.SpringBoot_SpringSecurity.payload.LoginDto;
import com.Capstone_BET.SpringBoot_SpringSecurity.payload.RegisterDto;
import com.Capstone_BET.SpringBoot_SpringSecurity.payload.UserDto;
import com.Capstone_BET.SpringBoot_SpringSecurity.repository.UserRepository;
import com.Capstone_BET.SpringBoot_SpringSecurity.security.CustomUserDetailsService;
import com.Capstone_BET.SpringBoot_SpringSecurity.service.AuthService;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController()
@RequestMapping("/api/auth")
public class AuthController {

    private AuthService authService;
    private CustomUserDetailsService customUserDetailsService;
	private UserRepository userRepository;

    public AuthController(
    		AuthService authService,
    		CustomUserDetailsService customUserDetailsService,
    		UserRepository userRepository
	) {
        this.authService = authService;
        this.customUserDetailsService = customUserDetailsService;
        this.userRepository = userRepository;
    }

    // Build Login REST API
    @PostMapping(value = {"/login", "/signin"})
    public ResponseEntity<JWTAuthResponse> login(@RequestBody LoginDto loginDto){
           	
    	String token = authService.login(loginDto);

        JWTAuthResponse jwtAuthResponse = new JWTAuthResponse();
        jwtAuthResponse.setUsername(loginDto.getUsername());
        jwtAuthResponse.setAccessToken(token);

        return ResponseEntity.ok(jwtAuthResponse);
    }

    // Build Register REST API
    @PostMapping(value = {"/register", "/signup"})
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto){
        System.out.println("siamo qui");
    	String response = authService.register(registerDto);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
    
    @GetMapping(value = "/user")
    public ResponseEntity<UserDto> getUserDetails() {
    	String name = SecurityContextHolder.getContext().getAuthentication().getName();
		User user = userRepository.findByUsernameOrEmail(name, name)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found with username or email: "+ name));

    	
    	return new ResponseEntity<>(new UserDto(user.getName(), user.getLastName(), user.getEmail(), user.getCreditCard(), user.getUsername()), HttpStatus.OK);
    }
}