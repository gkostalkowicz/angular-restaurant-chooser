package com.gk.restaurants.votes;

import com.gk.restaurants.restaurants.Restaurant;
import com.gk.restaurants.restaurants.RestaurantRepository;
import com.gk.restaurants.users.User;
import com.gk.restaurants.users.UserRepository;
import com.gk.restaurants.votes.VoteController.RestaurantWithVotes;
import org.junit.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class VoteControllerTest {

    @Test
    public void whenGetRestaurantsWithVotes_thenCorrectRestaurantsWithVotesAreReturned() {

        RestaurantRepository restaurantRepositoryStub = mock(RestaurantRepository.class);
        when(restaurantRepositoryStub.findAll()).thenReturn(Arrays.asList(
                        new Restaurant(1L, "Chinese"),
                        new Restaurant(2L, "Italian")));

        UserRepository userRepositoryStub = mock(UserRepository.class);
        when(userRepositoryStub.findAll()).thenReturn(Arrays.asList(
                new User(11L, "Peter"),
                new User(12L, "Tom")
        ));

        VoteRepository voteRepositoryStub = mock(VoteRepository.class);
        when(voteRepositoryStub.findAll()).thenReturn(Arrays.asList(
                new Vote(11L, Arrays.asList(2L)),
                new Vote(12L, Arrays.asList(1L, 2L)
        )));

        VoteController voteController = new VoteController(voteRepositoryStub, restaurantRepositoryStub,
                userRepositoryStub);
        List<RestaurantWithVotes> restaurantsWithVotes = voteController.getRestaurantsWithVotes();

        assertEquals(2, restaurantsWithVotes.size());
        RestaurantWithVotes restaurant;

        restaurant = restaurantsWithVotes.get(0);
        assertEquals(1L, restaurant.getRestaurant().getId().longValue());
        assertEquals(1, restaurant.getChosenBy().size());
        assertTrue(restaurant.getChosenBy().contains("Tom"));

        restaurant = restaurantsWithVotes.get(1);
        assertEquals(2L, restaurant.getRestaurant().getId().longValue());
        assertEquals(2, restaurant.getChosenBy().size());
        assertTrue(restaurant.getChosenBy().contains("Tom"));
        assertTrue(restaurant.getChosenBy().contains("Peter"));
    }
}