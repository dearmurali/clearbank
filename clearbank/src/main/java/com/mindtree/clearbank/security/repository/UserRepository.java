package com.mindtree.clearbank.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mindtree.clearbank.security.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByCustomerid(String customerid);
    User findByCustomermobile(Long customermobile);
}
