package com.example.catBet.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.catBet.model.User;
import com.example.catBet.repository.UserRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    Optional<User> findByUsernameOrEmail(String username, String email);

    org.springframework.security.core.userdetails.User findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

	org.springframework.security.core.userdetails.User save(org.springframework.security.core.userdetails.User user);
}
