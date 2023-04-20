package com.Capstone_BET.SpringBoot_SpringSecurity.service;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.Capstone_BET.SpringBoot_SpringSecurity.entity.Bet;
import com.Capstone_BET.SpringBoot_SpringSecurity.entity.BetElement;
import com.Capstone_BET.SpringBoot_SpringSecurity.entity.BetResult;
import com.Capstone_BET.SpringBoot_SpringSecurity.entity.BetStatus;
import com.Capstone_BET.SpringBoot_SpringSecurity.entity.BetType;
import com.Capstone_BET.SpringBoot_SpringSecurity.entity.Match;
import com.Capstone_BET.SpringBoot_SpringSecurity.entity.User;
import com.Capstone_BET.SpringBoot_SpringSecurity.repository.BetRepository;
import com.Capstone_BET.SpringBoot_SpringSecurity.repository.MatchRepository;
import com.Capstone_BET.SpringBoot_SpringSecurity.repository.UserRepository;

import lombok.RequiredArgsConstructor;



@Service
@RequiredArgsConstructor
public class BetService {
    
    @Autowired
    private BetRepository betRepository;
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private MatchRepository matchRepository;
    
    public Bet getBetById(Long id) {
        return betRepository.findById(id).orElse(null);
    }

	public Bet createBet(Bet bet) {
		Bet newBet = new Bet();
		
		String name = SecurityContextHolder.getContext().getAuthentication().getName();
		User user = userRepository.findByUsernameOrEmail(name, name)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found with username or email: "+ name));

		newBet.setUser(user);
		newBet.setBetAmount(bet.getBetAmount());
		newBet.setWinAmount(new BigDecimal(0));
		newBet.setBetStatus(BetStatus.PENDING);
		newBet.setBetResult(BetResult.PENDING);
		
		double odd = 1;
		
		for (BetElement el : bet.getBetElements()) {
			BetElement newElement = new BetElement();
			newElement.setBet(newBet);
			newElement.setBetType(el.getBetType());
			newElement.setMatch(matchRepository.findById(el.getMatch().getId()).orElseThrow());
			
			odd *= getOdd(el.getMatch(), el.getBetType());
			
			newBet.getBetElements().add(newElement);
		}
		
		newBet.setOdd(odd);
		
		return betRepository.save(newBet);
	}
	
	public List<Bet> getCurrentUserBets() {
		String name = SecurityContextHolder.getContext().getAuthentication().getName();
		User user = userRepository.findByUsernameOrEmail(name, name)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found with username or email: "+ name));

		
		return betRepository.findByUser(user);
	}
	
	private double getOdd(Match match, BetType betType) {
		switch(betType) {
		case AWAY:
			return match.getAwayOdd();
		case DRAW:
			return match.getDrawOdd();
		case HOME:
			return match.getHomeOdd();
		default:
			return 1;
		}
	}
	
	
	public List<Bet> getAllBets() {
	    return betRepository.findAll();
	}

}

    

