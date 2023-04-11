package com.SpringBoot_SpringSecurity.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SpringBoot_SpringSecurity.entity.Match;

public interface MatchRepository extends JpaRepository<Match, Long> {

	List<Match> findByDate(String date);
    // Metodi personalizzati se necessario

	List<Match> findByHomeTeamOrAwayTeam(String team, String team2);
}
