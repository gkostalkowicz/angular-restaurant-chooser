package com.gk.restaurants.votes;

import com.gk.restaurants.restaurants.Restaurant;
import com.gk.restaurants.restaurants.RestaurantRepository;
import com.gk.restaurants.users.User;
import com.gk.restaurants.users.UserRepository;
import com.google.common.collect.HashMultimap;
import com.google.common.collect.SetMultimap;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor(onConstructor=@__(@Autowired))
public class VoteController {

    private final VoteRepository voteRepository;

    private final RestaurantRepository restaurantRepository;

    private final UserRepository userRepository;

    @RequestMapping(value = "/vote", method = RequestMethod.POST)
    public void vote(@RequestBody List<Long> chosenRestaurants) {
        Vote vote = new Vote();
        vote.setUserId(1L); // TODO hardcoded
        vote.setChosenRestaurantIds(chosenRestaurants);
        voteRepository.save(vote);
    }

    @RequestMapping(value = "/votes", method = RequestMethod.GET)
    public List<RestaurantWithVotes> getRestaurantsWithVotes() {

        Map<Long, String> userIdToName = userRepository.findAll()
                .stream()
                .collect(Collectors.toMap(User::getId, User::getName));

        SetMultimap<Long, String> restaurantIdToVotingUserNames = HashMultimap.create();
        for (Vote vote : voteRepository.findAll()) {
            for (Long chosenRestaurantId : vote.getChosenRestaurantIds()) {
                restaurantIdToVotingUserNames.put(chosenRestaurantId, userIdToName.get(vote.getUserId()));
            }
        }

        return restaurantRepository.findAll()
                .stream()
                .map(restaurant -> new RestaurantWithVotes(restaurant,
                        restaurantIdToVotingUserNames.get(restaurant.getId())))
                .collect(Collectors.toList());
    }

    @Data
    @RequiredArgsConstructor
    protected static class RestaurantWithVotes {
        private final Restaurant restaurant;
        private final Set<String> chosenBy;
    }
}
