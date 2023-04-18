package com.Capstone_BET.SpringBoot_SpringSecurity.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
	String name;
	String lastName;
	String email;
	String creditCard;
	String username;
}
