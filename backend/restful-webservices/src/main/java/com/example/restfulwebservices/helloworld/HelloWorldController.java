package com.example.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

    @RequestMapping(value = "/hello-world")
    public String helloWorld(){
        return "Hello World!";
    }

    @RequestMapping(value = "/hello-world-bean")
    public HelloWorldBean helloWorldBean(){
//        throw new RuntimeException("Something Went Wrong");
        return new HelloWorldBean("Hello World Bean");
    }

    @RequestMapping(value = "/hello-world-bean/{name}")
    public HelloWorldBean helloWorldBeanWithName(@PathVariable String name){
        return new HelloWorldBean("Hello World Bean - " + name);
    }

}
