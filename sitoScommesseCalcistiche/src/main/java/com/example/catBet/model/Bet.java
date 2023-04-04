package com.example.catBet.model;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "bets")
public class Bet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    private Match match;

    private BigDecimal amount;

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public Object getMatch() {
		// TODO Auto-generated method stub
		return null;
	}

	public Object getBetAmount() {
		// TODO Auto-generated method stub
		return null;
	}

	public void setMatch(Object match2) {
		// TODO Auto-generated method stub
		
	}

	public void setBetAmount(Object betAmount) {
		// TODO Auto-generated method stub
		
	}

	public Object getBetType() {
		// TODO Auto-generated method stub
		return null;
	}

	public void setBetType(Object betType) {
		// TODO Auto-generated method stub
		
	}

	public Object getBetResult() {
		// TODO Auto-generated method stub
		return null;
	}

	public void setBetResult(Object betResult) {
		// TODO Auto-generated method stub
		
	}

	public Object getBetStatus() {
		// TODO Auto-generated method stub
		return null;
	}

	public void setBetStatus(Object betStatus) {
		// TODO Auto-generated method stub
		
	}

	public void setUser(Bet user2) {
		// TODO Auto-generated method stub
		
	}

    // getters e setters
}
