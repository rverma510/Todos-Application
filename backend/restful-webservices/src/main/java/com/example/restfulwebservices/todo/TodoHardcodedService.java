package com.example.restfulwebservices.todo;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList<>();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "rverma510", "Learn to Dance", new Date(), false));
        todos.add(new Todo(++idCounter, "rverma510", "Learn about Microservices", new Date(), false));
        todos.add(new Todo(++idCounter, "rverma510", "Learn about Angular", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }

}