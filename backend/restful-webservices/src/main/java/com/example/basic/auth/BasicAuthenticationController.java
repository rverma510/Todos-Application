package com.example.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthenticationController {

    @RequestMapping(value = "/basicauth")
    public AuthenticationBean helloWorldBean(){
        return new AuthenticationBean("You are authenticated!");
    }

}
