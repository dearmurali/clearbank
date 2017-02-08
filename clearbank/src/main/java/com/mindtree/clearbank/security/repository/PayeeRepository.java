package com.mindtree.clearbank.security.repository;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.mindtree.clearbank.account.entity.Payee;


@Repository


public interface PayeeRepository extends JpaRepository<Payee, Long> {
	
	@Modifying
	@Transactional
	@Query("delete FROM Payee p WHERE p.payeeAccountNumber =:accountNumber and p.payeeIFSC = :IFSCCode and p.customerid = :customerid")
	void deletePayee(@Param("accountNumber") int accountNumber, @Param("IFSCCode") String IFSCCode, @Param("customerid") int customerid);
	
	@Modifying
	@Transactional
	@Query("delete FROM Payee p WHERE p.payeeAccountNumber =:accountNumber and p.customerid = :customerid")
	void deletePayee1(@Param("accountNumber") int accountNumber, @Param("customerid") int customerid);
	
	@Modifying
	@Transactional
	@Query("update Payee p set p.payeeNickName =:nickName , p.payeeLimit = :transferLimit WHERE p.payeeAccountNumber =:accountNumber and p.payeeIFSC = :IFSCCode and p.customerid = :customerid")
	void updatePayee(@Param("accountNumber") int accountNumber, @Param("IFSCCode") String IFSCCode, @Param("customerid") int customerid, @Param("nickName") String nickName, @Param("transferLimit") double transferLimit);
	
	@Modifying
	@Transactional
	@Query("update Payee p set p.payeeNickName =:nickName , p.payeeLimit = :transferLimit WHERE p.payeeAccountNumber =:accountNumber and p.customerid = :customerid")
	void updatePayee1(@Param("accountNumber") int accountNumber, @Param("customerid") int customerid, @Param("nickName") String nickName, @Param("transferLimit") double transferLimit);
	
	ArrayList <Payee> findByCustomerid(Integer customerid);
   
    
     
}
