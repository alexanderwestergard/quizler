package dev.salt.quizler.domain.controllers;

import dev.salt.quizler.domain.dtos.ScoreDto;
import dev.salt.quizler.domain.models.Quiz;
import dev.salt.quizler.domain.models.Score;
import dev.salt.quizler.domain.repos.QuizRepository;
import dev.salt.quizler.domain.repos.ScoreRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping
public class Controller {
    private final QuizRepository repo;
    private final ScoreRepository scoreRepo;

    public Controller(QuizRepository repo, ScoreRepository scoreRepo) {
        this.repo = repo;
        this.scoreRepo = scoreRepo;
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

    @PostMapping("{id}")
    public ResponseEntity addUserScore(@PathVariable Long id, @RequestBody ScoreDto body) {
        Quiz quiz = repo.findById(body.quizId()).orElse(null);

        if (quiz == null){
            return ResponseEntity.notFound().build();
        }

        Score score = new Score(quiz, body.name(), body.score());

        scoreRepo.save(score);

        return ResponseEntity.ok().build();

    }

}
