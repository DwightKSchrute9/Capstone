package com.Capstone_BET.SpringBoot_SpringSecurity.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Capstone_BET.SpringBoot_SpringSecurity.entity.Match;
import com.Capstone_BET.SpringBoot_SpringSecurity.exception.ResourceNotFoundException;
import com.Capstone_BET.SpringBoot_SpringSecurity.repository.MatchRepository;



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
    //Metodo per recuperare tutte le partite disponibili nell'applicazione e le restituisce come lista.
    @GetMapping("/")
    public List<Match> getAllMatches() {
        return matchRepository.findAll();
    }
    //Metodo di visualizzazione dei dettagli di una partita
    
    @GetMapping("/matches/{id}")
    public ResponseEntity<Match> getMatchById1(@PathVariable(value = "id") Long matchId) {
        java.util.Optional<Match> match = matchRepository.findById(matchId);
        if (!match.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(match.get());
    }
    
   //Metodo di modifica di una partita
    @PutMapping("/matches/{id}")
    public ResponseEntity<Match> updateMatch(@PathVariable(value = "id") Long matchId, 
    		@RequestBody Match matchDetails) throws ResourceNotFoundException {
        Match match = matchRepository.findById(matchId).orElseThrow(() -> new ResourceNotFoundException("Match not found for this id :: " + matchId, null, matchId));

        match.setHomeTeam(matchDetails.getHomeTeam());
        match.setAwayTeam(matchDetails.getAwayTeam());
        match.setDate(matchDetails.getDate());
        match.setStadium(matchDetails.getStadium());

        final Match updatedMatch = matchRepository.save(match);
        return ResponseEntity.ok(updatedMatch);
    }

   //Metodo di cancellazione di una partita
    @DeleteMapping("/matches/{id}")
    public Map<String, Boolean> deleteMatch(@PathVariable(value = "id") Long matchId) throws ResourceNotFoundException {
        Match match = matchRepository.findById(matchId).orElseThrow(() -> new ResourceNotFoundException("Match not found for this id :: " + matchId, null, matchId));

        matchRepository.delete(match);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
   
     //Metodo di ricerca delle partite per data
    @GetMapping("/matches/date/{date}")
    public List<Match> getMatchesByDate(@PathVariable(value = "date") String date) {
        return matchRepository.findByDate(date);
    }
    
    //Metodo di ricerca delle partite per squadra
    
    @GetMapping("/matches/team/{team}")
    public List<Match> getMatchesByTeam(@PathVariable(value = "team") String team) {
        return matchRepository.findByHomeTeamOrAwayTeam(team, team);
    }


    // altri metodi del controller per le operazioni CRUD su Match
}