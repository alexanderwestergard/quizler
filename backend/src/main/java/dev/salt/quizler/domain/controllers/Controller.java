package dev.salt.quizler.domain.controllers;

import dev.salt.quizler.domain.models.Quiz;
import dev.salt.quizler.domain.repos.QuizRepository;
import org.hibernate.dialect.unique.CreateTableUniqueDelegate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping
public class Controller {
    private final QuizRepository repo;

    public Controller(QuizRepository repo) {
        this.repo = repo;
    }


    @GetMapping
    public ResponseEntity<List<Quiz>> getAllQuiz() {
        return ResponseEntity.ok(repo.findAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<Quiz> getSpecificQuiz(@PathVariable Long id) {

        var quiz = repo.findById(id).orElse(null);
        if (quiz == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(quiz);
    }

}
