package com.Capstone_BET.SpringBoot_SpringSecurity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.Capstone_BET.SpringBoot_SpringSecurity.entity.Bet;
import com.Capstone_BET.SpringBoot_SpringSecurity.repository.BetRepository;



@Service
public class BetService {
    
    @Autowired
    private static BetRepository betRepository;
    
    public Bet getBetById(Long id) {
        return betRepository.findById(id).orElse(null);
    }
    
    // altri metodi del service per le operazioni CRUD su Bet
    public Bet createBet(Bet bet, Long userId) {
        /*CrudRepository<Bet, Long> userRepository = null;
		java.util.Optional<Bet> userOptional = userRepository.findById(userId);
        if (!userOptional.isPresent()) {
            throw new IllegalArgumentException("User not found");
        }
        Bet user = userOptional.get();
        bet.setUser(user);
        return betRepository.save(bet);
        */
    	// @TODO
    	return null;
    }

	public static Bet createBet(Bet bet) {
		// TODO Auto-generated method stub
		return null;
	}
	public List<Bet> getAllBets() {
	    return betRepository.findAll();
	}

	public List<Bet> getBetsByUserId(Long userId) {
		// TODO Auto-generated method stub
		return null;
	}

    }

