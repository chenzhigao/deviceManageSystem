package com.shebiejiance.repository;

import com.shebiejiance.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserRepository extends PagingAndSortingRepository<User,Long> {
    User findByUsername(String username);
}
