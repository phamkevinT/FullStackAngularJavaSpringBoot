package com.kevinpham.rest.webservices.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Mock Database
 */
@Service
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList<>();

    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "in28minutes", "Learn to Dance", new Date(), false));
        todos.add(new Todo(++idCounter, "in28minutes", "Learn about Microservices", new Date(), false));
        todos.add(new Todo(++idCounter, "in28minutes", "Learn about Angular", new Date(), false));
        todos.add(new Todo(++idCounter, "in28minutes", "Learn about Spring", new Date(), false));
    }

    // Return the list of todo items
    public List<Todo> findAll() {
        return todos;
    }

    // Save or Update a Todo
    public Todo save(Todo todo) {
        if (todo.getId() == 0 || todo.getId() == -1) {
            // Adding a brand new todo
            todo.setId(++idCounter);
            todos.add(todo);
        } else {
            // Update a todo shortcut
            deleteById(todo.getId()); // Delete the old todo
            todos.add(todo); // Insert the new todo
        }
        return todo;
    }

    // Return the deleted todo item
    public Todo deleteById(long id) {
        Todo todo = findById(id);
        if (todo == null) {
            return null;
        }
        if (todos.remove(todo)) {
            return todo;
        }
        return null;
    }

    // Find a todo item by its id
    public Todo findById(long id) {
        for (Todo todo : todos) {
            if (todo.getId() == id) {
                return todo;
            }
        }
        return null;
    }

}
