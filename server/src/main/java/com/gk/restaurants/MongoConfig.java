package com.gk.restaurants;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;

@Configuration
public class MongoConfig extends AbstractMongoConfiguration {

    @Override
    protected String getDatabaseName() {
        return "restaurants";
    }

    @Override
    public Mongo mongo() {
        return new MongoClient("127.0.0.1", 27017);
    }
}