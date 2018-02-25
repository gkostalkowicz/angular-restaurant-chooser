//package com.gk.restaurants;
//
//import java.io.IOException;
//
//import cz.jirutka.spring.embedmongo.EmbeddedMongoFactoryBean;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.mongodb.core.*;
//import com.mongodb.MongoClient;
//
//@Configuration
//public class EmbeddedMongoConfig {
//
//    private static final String MONGO_DB_URL = "localhost";
//    private static final String MONGO_DB_NAME = "embedded_db";
//
//    @Bean
//    public MongoTemplate mongoTemplate() throws IOException {
//        EmbeddedMongoFactoryBean mongo = new EmbeddedMongoFactoryBean();
//        mongo.setBindIp(MONGO_DB_URL);
//        MongoClient mongoClient = mongo.getObject();
//        MongoTemplate mongoTemplate = new MongoTemplate(mongoClient, MONGO_DB_NAME);
//        return mongoTemplate;
//    }
//}