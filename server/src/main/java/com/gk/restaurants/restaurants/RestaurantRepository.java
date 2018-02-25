package com.gk.restaurants.restaurants;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantRepository extends MongoRepository<Restaurant, Long> {

    Restaurant findTopByOrderByIdDesc();
}
