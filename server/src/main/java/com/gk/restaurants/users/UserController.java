package com.gk.restaurants.users;

import com.gk.restaurants.restaurants.Restaurant;
import com.gk.restaurants.restaurants.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor(onConstructor=@__(@Autowired))
public class UserController {

    private final UserRepository userRepository;

    @RequestMapping(method = RequestMethod.GET)
    private List<User> getAll() {
        return userRepository.findAll();
    }
}
