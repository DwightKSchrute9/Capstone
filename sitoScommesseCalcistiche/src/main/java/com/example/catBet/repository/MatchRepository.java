package com.example.catBet.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.catBet.model.Match;

public interface MatchRepository extends JpaRepository<Match, Long> {

	List<Match> findByDate(String date);
    // Metodi personalizzati se necessario

	List<Match> findByHomeTeamOrAwayTeam(String team, String team2);
}