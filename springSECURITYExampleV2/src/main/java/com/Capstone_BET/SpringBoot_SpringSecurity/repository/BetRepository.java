package com.Capstone_BET.SpringBoot_SpringSecurity.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Capstone_BET.SpringBoot_SpringSecurity.entity.Bet;

public interface BetRepository extends JpaRepository<Bet, Long> {

}
