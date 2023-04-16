package com.Capstone_BET.SpringBoot_SpringSecurity.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "matches")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Match {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime date;

    private String homeTeam;

    private String awayTeam;

    private Double homeOdd;

    private Double awayOdd;
    
    private Double drawOdd;
    
    private String stadium;
}
