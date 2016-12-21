package com.mindtree.clearbank.security.jwt;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class JwtUser implements UserDetails {

	private static final long serialVersionUID = 1L;
	
	private final Long id;
    private final String customername;
    private final String password;
    private final String customeremail;
    private final Long customermobile;
    private final boolean enabled;
    private final Collection<? extends GrantedAuthority> authorities;

    public JwtUser(
          Long id,
          String customername,
          String customeremail,
          Long customermobile,
          String password,
          boolean enabled,
          Collection<? extends GrantedAuthority> authorities
    ) {
        this.id = id;
        this.customername = customername;
        this.customeremail = customeremail;
        this.customermobile = customermobile;
        this.password = password;
        this.enabled = enabled;
        this.authorities = authorities;
    }

    @JsonIgnore
    public Long getId() {
        return id;
    }

    @Override
    public String getUsername() {
        return String.valueOf(id);
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

	public String getCustomername() {
		return customername;
	}

	public String getCustomeremail() {
		return customeremail;
	}

	public Long getCustomermobile() {
		return customermobile;
	}

	@JsonIgnore
    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }
}
