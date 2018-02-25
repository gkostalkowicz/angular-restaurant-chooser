package com.gk.restaurants.votes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Vote {

    @Id
    private Long userId;

    private List<Long> chosenRestaurantIds;
}
