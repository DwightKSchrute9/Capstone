package com.example.catBet.model;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor

@Table(name = "roles")
@Access(value=AccessType.FIELD)

@Entity
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    
    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private ERole roleName;

    public Role() {

    }

    public Role(ERole roleName) {
      this.roleName = roleName;
    }

    public Long getId() {
      return id;
    }

    public void setId(Long id) {
      this.id = id;
    }

    public ERole getName() {
      return roleName;
    }

    public void setName(ERole roleName) {
      this.roleName = roleName;
    }

    public void setRoleName(ERole roleName) {
        this.roleName = roleName;
    }

	public ERole getRoleName() {
		return roleName;
	}
}
