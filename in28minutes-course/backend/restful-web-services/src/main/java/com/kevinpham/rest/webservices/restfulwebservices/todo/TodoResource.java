package com.kevinpham.rest.webservices.restfulwebservices.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200") // Allow request from other domain servers
@RestController
public class TodoResource {

    @Autowired
    private TodoHardcodedService todoService;

    // GET Request
    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return todoService.findAll();
    }


    // GET Request for a specific todo
    // Used to populate update form
    @GetMapping("/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id) {
        return todoService.findById(id);
    }


    // DELETE Request - Delete a Todo
    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
        Todo todo = todoService.deleteById(id); // Attempt to delete the todo item
        if (todo != null) {
            return ResponseEntity.noContent().build(); // Todo-item deleted, return noContent status
        }
        return ResponseEntity.notFound().build(); // Todo-item not deleted/not found, return notFound status
    }


    // PUT Request - Update a Todo
    @PutMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo) {
        Todo todoUpdated = todoService.save(todo);
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }


    // POST Request - Create a new Todo
    @PostMapping("/users/{username}/todos")
    public ResponseEntity<Void> updateTodo(@PathVariable String username, @RequestBody Todo todo) {

        Todo createdTodo = todoService.save(todo);

        // Get current resource location url by appending the new todo ID to end of path
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

}
