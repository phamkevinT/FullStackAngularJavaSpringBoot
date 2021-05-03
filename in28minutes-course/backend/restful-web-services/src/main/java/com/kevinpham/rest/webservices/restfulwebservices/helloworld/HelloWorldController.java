package com.kevinpham.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200") // Allow request from other domain servers
@RestController // A controller handles HTTP requests
public class HelloWorldController {

    // GET Request
    // URI - /hello-world
    // method to print "Hello World"
    @GetMapping(path = "/hello-world")
    public String helloWorld() {
        return "Hello World";
    }


    // Return a bean
    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean helloWorldBean() {
//        throw new RuntimeException("Some error has occurred...");
        return new HelloWorldBean("Hello World - Changed");
    }


    // Path Variable
    @GetMapping(path = "/hello-world-path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }
}
