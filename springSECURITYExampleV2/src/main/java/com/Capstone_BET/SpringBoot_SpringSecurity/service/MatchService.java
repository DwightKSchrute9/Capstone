package com.Capstone_BET.SpringBoot_SpringSecurity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Capstone_BET.SpringBoot_SpringSecurity.entity.Match;
import com.Capstone_BET.SpringBoot_SpringSecurity.repository.MatchRepository;

@Service
public class MatchService {
    
    @Autowired
    private MatchRepository matchRepository;
    
    public Match getMatchById(Long id) {
        return matchRepository.findById(id).orElse(null);
    }
    
    // altri metodi del service per le operazioni CRUD su Match
}
