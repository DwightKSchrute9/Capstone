package com.example.catBet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.catBet.model.Bet;
import com.example.catBet.repository.BetRepository;

@RestController
@RequestMapping("/api/bets")
public class BetController {
    
    @Autowired
    private BetRepository betRepository;
    
    @GetMapping("/{id}")
    public ResponseEntity<Bet> getBetById(@PathVariable("id") Long id) {
        Bet bet = betRepository.findById(id).orElse(null);
        if (bet == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(bet, HttpStatus.OK);
    }
    
    // altri metodi del controller per le operazioni CRUD su Bet
}