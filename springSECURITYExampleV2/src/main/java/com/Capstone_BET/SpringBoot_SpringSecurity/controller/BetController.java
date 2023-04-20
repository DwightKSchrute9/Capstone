package com.Capstone_BET.SpringBoot_SpringSecurity.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Capstone_BET.SpringBoot_SpringSecurity.entity.Bet;
import com.Capstone_BET.SpringBoot_SpringSecurity.repository.BetRepository;
import com.Capstone_BET.SpringBoot_SpringSecurity.service.BetService;

@RestController
@RequestMapping("/api/bets")
public class BetController {

    @Autowired
    private BetRepository betRepository;

    @Autowired
    private BetService betService;

    @GetMapping("/{id}")
    public ResponseEntity<Bet> getBetById(@PathVariable("id") Long id) {
        Bet bet = betRepository.findById(id).orElse(null);
        if (bet == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(bet, HttpStatus.OK);
    }

    @GetMapping("/")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<List<Bet>> getAllBets() {
        List<Bet> bets = betService.getAllBets();
        return new ResponseEntity<>(bets, HttpStatus.OK);
    }
    
    @GetMapping("/my")
    public ResponseEntity<List<Bet>> getMyBets() {
    	List<Bet> bets = betService.getCurrentUserBets();
        return new ResponseEntity<>(bets, HttpStatus.OK);
    }

    // altri metodi del controller per le operazioni CRUD su Bet
    @PostMapping("/")
    public ResponseEntity<Bet> createBet(@RequestBody Bet bet) {
        Bet createdBet = betService.createBet(bet);
        return ResponseEntity.ok(createdBet);
    }

    @PutMapping("/{betId}")
    public ResponseEntity<Bet> updateBet(@PathVariable Long betId, @RequestBody Bet updatedBet) {
        java.util.Optional<Bet> optionalBet = betRepository.findById(betId);
        if (optionalBet.isPresent()) {
            Bet bet = optionalBet.get();
            bet.setBetResult(updatedBet.getBetResult());
            bet.setBetStatus(updatedBet.getBetStatus());
            betRepository.save(bet);
            return ResponseEntity.ok(bet);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBet(@PathVariable Long id) {
        java.util.Optional<Bet> betOptional = betRepository.findById(id);
        if (!betOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        betRepository.delete(betOptional.get());
        return ResponseEntity.ok().build();
    }
}
