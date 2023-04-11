package com.SpringBoot_SpringSecurity.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SpringBoot_SpringSecurity.entity.Bet;

public interface BetRepository extends JpaRepository<Bet, Long> {

}
