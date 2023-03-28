package com.example.catBet.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.catBet.model.Bet;
import com.example.catBet.repository.BetRepository;

@Service
public class BetService {
    
    @Autowired
    private BetRepository betRepository;
    
    public Bet getBetById(Long id) {
        return betRepository.findById(id).orElse(null);
    }
    
    // altri metodi del service per le operazioni CRUD su Bet
}