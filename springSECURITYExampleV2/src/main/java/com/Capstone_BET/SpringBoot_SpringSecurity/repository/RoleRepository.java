package com.Capstone_BET.SpringBoot_SpringSecurity.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Capstone_BET.SpringBoot_SpringSecurity.entity.ERole;
import com.Capstone_BET.SpringBoot_SpringSecurity.entity.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    
	Optional<Role> findByRoleName(ERole roleName);

}
