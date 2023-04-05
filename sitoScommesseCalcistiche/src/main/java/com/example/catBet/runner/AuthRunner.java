package com.example.catBet.runner;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.example.catBet.model.UserERole;
import com.example.catBet.model.UserRole;
import com.example.catBet.payload.RegisterDto;
import com.example.catBet.repository.UserRepository;
import com.example.catBet.repository.UserRoleRepository;
import com.example.catBet.service.AuthService;

@Component
public abstract class AuthRunner implements ApplicationRunner {
	
	@Autowired UserRoleRepository roleRepository;
	@Autowired UserRepository userRepository;
	@Autowired PasswordEncoder passwordEncoder;
	@Autowired AuthService authService;
	
	private Set<UserRole> adminRole;
	private Set<UserRole> moderatorRole;
	private Set<UserRole> userRole;
	
	@Override
	public void run(ApplicationArguments args) throws Exception {
		System.out.println("Run...");
		//setRoleDefault();
		//setUserDefault();
		
	}
	
	private void setRoleDefault() {
		UserRole admin = new UserRole();
		admin.setRoleName(UserERole.ADMIN);
		roleRepository.save(admin);
		
		UserRole user = new UserRole();
		user.setRoleName(UserERole.USER);
		roleRepository.save(user);
		
		UserRole moderator = new UserRole();
		moderator.setRoleName(UserERole.MODERATOR);
		roleRepository.save(moderator);
		
		adminRole = new HashSet<UserRole>();
		adminRole.add(admin);
		adminRole.add(moderator);
		adminRole.add(user);
		
		moderatorRole = new HashSet<UserRole>();
		moderatorRole.add(moderator);
		moderatorRole.add(user);
		
		userRole = new HashSet<UserRole>();
		userRole.add(user);
	}
	
	private void setUserDefault() {
		

		Set<String> roleAdmin = new HashSet<>(
				adminRole.stream()
						.map(r -> r.getRoleName().toString())
						.collect(Collectors.toList())
				);
		Set<String> roleModerator = new HashSet<>(
				moderatorRole.stream()
						.map(r -> r.getRoleName().toString())
						.collect(Collectors.toList())
				);
		Set<String> roleUser = new HashSet<>(
				userRole.stream()
						.map(r -> r.getRoleName().toString())
						.collect(Collectors.toList())
				);
		
		
		RegisterDto userAdmin = new RegisterDto();
		userAdmin.setName("Admino Stretor");
		userAdmin.setUsername("admin");
		userAdmin.setEmail("admin@example.com");
		userAdmin.setPassword(passwordEncoder.encode("admin"));
		userAdmin.setRoles(roleAdmin);
		System.out.println(authService.register(userAdmin));
		
		RegisterDto simpleUser = new RegisterDto();
		simpleUser.setName("Mario Rossi");
		simpleUser.setUsername("mariorossi");
		simpleUser.setEmail("m.rossi@example.com");
		simpleUser.setPassword(passwordEncoder.encode("12345"));
		simpleUser.setRoles(roleUser);
		System.out.println(authService.register(simpleUser));
		
		RegisterDto userModerator = new RegisterDto();
		userModerator.setName("Giuseppe Verdi");
		userModerator.setUsername("giuver");
		userModerator.setEmail("g.verdi@example.com");
		userModerator.setPassword(passwordEncoder.encode("qwerty"));
		userModerator.setRoles(roleModerator);
		System.out.println(authService.register(userModerator));
	}

}