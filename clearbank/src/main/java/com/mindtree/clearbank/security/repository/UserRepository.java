package com.mindtree.clearbank.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mindtree.clearbank.security.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findById(long id);
   User findByCustomermobile(Long customermobile);
 
     
}
