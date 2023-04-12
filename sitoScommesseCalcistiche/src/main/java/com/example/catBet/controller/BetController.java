package com.example.catBet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.catBet.model.Bet;
import com.example.catBet.repository.BetRepository;
import com.example.catBet.service.BetService;



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
    @GetMapping("/bets")
    public ResponseEntity<List<Bet>> getAllBets() {
        BetController betService = null;
		@SuppressWarnings("unchecked")
		List<Bet> bets = (List<Bet>) betService.getAllBets();
        return new ResponseEntity<>(bets, HttpStatus.OK);
    }
    @Autowired
    private BetService betService;

    @GetMapping("/bets/user/{userId}")
    public ResponseEntity<List<Bet>> getBetsByUserId(@PathVariable Long userId) {
        List<Bet> bets = betService.getBetsByUserId(userId);
        return new ResponseEntity<>(bets, HttpStatus.OK);
    }
    
    //per visualizzare i dettagli di una scommessa specifica, identificata dall'id.
    @GetMapping("/bets/{id}")
    public ResponseEntity<Bet> getBet(@PathVariable(value = "id") Long betId) {
        java.util.Optional<Bet> optionalBet = betRepository.findById(betId);
        if (optionalBet.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(optionalBet.get());
    }


    
    // altri metodi del controller per le operazioni CRUD su Bet
    @PostMapping("/bets")
    public ResponseEntity<Bet> createBet(@RequestBody Bet bet) {
        Bet createdBet = BetService.createBet(bet);
        return ResponseEntity.ok(createdBet);
    }
 // BetController.java

    @PutMapping("/bets/{betId}")
    public ResponseEntity<Bet> updateBet(@PathVariable Long betId, @RequestBody Bet updatedBet) {
        java.util.Optional<Bet> optionalBet = betRepository.findById(betId);
        if (optionalBet.isPresent()) {
            Bet bet = optionalBet.get();
            bet.setMatch(updatedBet.getMatch());
            bet.setBetAmount(updatedBet.getBetAmount());
            bet.setBetType(updatedBet.getBetType());
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