package com.example.catBet.util;



import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.catBet.model.Match;

@Component
public class MatchMapper {
    
    @Autowired
    private ModelMapper modelMapper;
    
    public MatchDTO convertToDto(Match match) {
        return modelMapper.map(match, MatchDTO.class);
    }
    
    public Match convertToEntity(MatchDTO matchDto) {
        return modelMapper.map(matchDto, Match.class);
    }
}
