package com.Capstone_BET.SpringBoot_SpringSecurity.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Capstone_BET.SpringBoot_SpringSecurity.entity.Bet;
import com.Capstone_BET.SpringBoot_SpringSecurity.entity.User;

public interface BetRepository extends JpaRepository<Bet, Long> {

	List<Bet> findByUser(User user);
}
