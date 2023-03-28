package com.example.catBet.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.catBet.model.Match;

public interface MatchRepository extends JpaRepository<Match, Long> {
    // Metodi personalizzati se necessario
}