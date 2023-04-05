package com.example.catBet.service;

import java.util.Set;

import org.springframework.context.annotation.Role;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.catBet.exception.MyAPIException;
import com.example.catBet.model.UserERole;
import com.example.catBet.payload.LoginDto;
import com.example.catBet.payload.RegisterDto;
import com.example.catBet.repository.UserRepository;
import com.example.catBet.repository.UserRoleRepository;
import com.example.catBet.security.JwtTokenProvider;

@Service
public class AuthServiceImpl implements AuthService {

    private AuthenticationManager authenticationManager;
    private UserRepository userRepository;
    private UserRoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private JwtTokenProvider jwtTokenProvider;


    public AuthServiceImpl(AuthenticationManager authenticationManager,
                           UserRepository userRepository,
                           UserRoleRepository roleRepository,
                           PasswordEncoder passwordEncoder,
                           JwtTokenProvider jwtTokenProvider) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    public String login1(LoginDto loginDto) {
        
    	Authentication authentication = authenticationManager.authenticate(
        		new UsernamePasswordAuthenticationToken(
        				loginDto.getUsername(), loginDto.getPassword()
        		)
        ); 
    	
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtTokenProvider.generateToken(authentication);

        return token;
    }

    @Override
    public String register1(RegisterDto registerDto) {

        // add check for username exists in database
        if(userRepository.existsByUsername(registerDto.getUsername())){
            throw new MyAPIException(HttpStatus.BAD_REQUEST, "Username is already exists!.");
        }

        // add check for email exists in database
        if(userRepository.existsByEmail(registerDto.getEmail())){
            throw new MyAPIException(HttpStatus.BAD_REQUEST, "Email is already exists!.");
        }

        User user = new User(null, null, false, false, false, false, null);
        ((RegisterDto) user).setName(registerDto.getName());
        ((LoginDto) user).setUsername(registerDto.getUsername());
        ((RegisterDto) user).setEmail(registerDto.getEmail());
        ((LoginDto) user).setPassword(passwordEncoder.encode(registerDto.getPassword()));

        Set<Role> roles = new HashSet<>();
        
        if(registerDto.getRoles() != null) {
	        registerDto.getRoles().forEach(role -> {
	        	Role userRole = roleRepository.findByRoleName(getRole(role)).get();
	        	roles.add(userRole);
	        });
        } else {
        	javax.management.relation.Role userRole = roleRepository.findByRoleName(UserERole.USER).get();
        	roles.add(userRole);
        }
        
        user.setRoles(roles);
        System.out.println(user);
        userRepository.save(user);

        return "User registered successfully!.";
    }
    
    public UserERole getRole(String role) {
    	if(role.equals("ROLE_ADMIN")) return UserERole.ADMIN;
    	else if(role.equals("ROLE_MODERATOR")) return UserERole.MODERATOR;
    	else return UserERole.USER;
    }

	@Override
	public String login(LoginDto loginDto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String register(RegisterDto registerDto) {
		// TODO Auto-generated method stub
		return null;
	}
    
}