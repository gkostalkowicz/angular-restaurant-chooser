package com.gk.restaurants.restaurants;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/restaurants")
@RequiredArgsConstructor(onConstructor=@__(@Autowired))
public class RestaurantController {

    private final RestaurantRepository restaurantRepository;

    @RequestMapping(method = RequestMethod.GET)
    private List<Restaurant> getAll() {
        return restaurantRepository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    private ResponseEntity<Restaurant> get(@PathVariable("id") Long id) {
        Restaurant restaurant = restaurantRepository.findOne(id);
        return restaurant == null ? ResponseEntity.notFound().build() : ResponseEntity.ok(restaurant);
    }

    @RequestMapping(method = RequestMethod.POST)
    private void create(@RequestBody Restaurant restaurant) {
        Restaurant newestRestaurant = restaurantRepository.findTopByOrderByIdDesc();
        restaurant.setId(newestRestaurant == null ? 0 : newestRestaurant.getId() + 1);

        restaurantRepository.save(restaurant);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.POST)
    private HttpStatus update(@PathVariable("id") Long id, @RequestBody Restaurant restaurant) {
        if (!restaurantRepository.exists(id)) {
            return HttpStatus.BAD_REQUEST;
        }
        restaurant.setId(id);
        restaurantRepository.save(restaurant);
        return HttpStatus.OK;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    private HttpStatus delete(@PathVariable("id") Long id) {
        if (!restaurantRepository.exists(id)) {
            return HttpStatus.BAD_REQUEST;
        }
        restaurantRepository.delete(id);
        return HttpStatus.OK;
    }
}
