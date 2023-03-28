package com.example.catBet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.catBet.model.Match;
import com.example.catBet.repository.MatchRepository;

@RestController
@RequestMapping("/api/matches")
public class MatchController {
    
    @Autowired
    private MatchRepository matchRepository;
    
    @GetMapping("/{id}")
    public ResponseEntity<Match> getMatchById(@PathVariable("id") Long id) {
        Match match = matchRepository.findById(id).orElse(null);
        if (match == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(match, HttpStatus.OK);
    }
    
    // altri metodi del controller per le operazioni CRUD su Match
}