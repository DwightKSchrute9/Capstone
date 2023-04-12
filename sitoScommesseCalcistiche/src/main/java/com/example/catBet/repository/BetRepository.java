package com.example.catBet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.catBet.model.Bet;
@Repository
public interface BetRepository extends JpaRepository<Bet, Long> {
    // Metodo vuoto
}
