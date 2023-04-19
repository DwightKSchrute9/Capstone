package com.Capstone_BET.SpringBoot_SpringSecurity.entity;

import java.math.BigDecimal;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "bets")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Bet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    private double odd;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    private Match match;

    private BigDecimal betAmount;
    
    private BigDecimal winAmount = new BigDecimal(0);

    @Enumerated(EnumType.STRING)
    private BetType betType;
    
    @Enumerated(EnumType.STRING)
    private BetStatus betStatus;
    
    @Enumerated(EnumType.STRING)
    private BetResult betResult;
}
