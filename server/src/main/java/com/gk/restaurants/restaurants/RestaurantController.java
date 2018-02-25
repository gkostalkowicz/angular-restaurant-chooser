package com.gk.restaurants.restaurants;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/restaurants")
public class RestaurantController {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @RequestMapping(method = RequestMethod.GET)
    private List<Restaurant> getAll() {
        return restaurantRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    private void create(@RequestBody Restaurant restaurant) {
        // generate next ID - not a perfect solution
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
