package com.gk.restaurants.votes;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VoteRepository extends MongoRepository<Vote, Long> {
}
