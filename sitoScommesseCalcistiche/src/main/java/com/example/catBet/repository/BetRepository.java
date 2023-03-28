package com.example.catBet.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.catBet.model.Bet;

public interface BetRepository extends JpaRepository<Bet, Long> {
    // Metodi personalizzati se necessario
}