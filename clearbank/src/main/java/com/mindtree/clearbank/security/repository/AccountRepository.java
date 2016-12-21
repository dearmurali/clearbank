/**
 * 
 */
package com.mindtree.clearbank.security.repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mindtree.clearbank.account.entity.Account;

/**
 * @author M1037185
 *
 */
public interface AccountRepository extends JpaRepository<Account, Long> {

	List<Account> findByCustomerid(String customerid);
	
    
}
