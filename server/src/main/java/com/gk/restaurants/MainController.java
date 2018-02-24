package com.gk.restaurants;

import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
public class MainController {

    @RequestMapping("/restaurants")
    private List<Restaurant> restaurants() {

        return Arrays.asList(
                new Restaurant("Capuchino", Arrays.asList("Greg", "Oli", "Janosch")),
                new Restaurant("Korean", Arrays.asList()),
                new Restaurant("Market", Arrays.asList("Judith")));
    }
}
