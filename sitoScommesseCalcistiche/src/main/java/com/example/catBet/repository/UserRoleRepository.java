package com.example.catBet.repository;

import java.util.Optional;

import javax.management.relation.Role;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.catBet.model.UserERole;
import com.example.catBet.model.UserRole;

public interface UserRoleRepository extends JpaRepository<Role, Long> {
    
	Optional<Role> findByRoleName(Role roleName);

	void save(UserRole admin);

	Optional<Role> findByRoleName(UserERole role);

}