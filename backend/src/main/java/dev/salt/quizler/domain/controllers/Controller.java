package dev.salt.quizler.domain.controllers;

import dev.salt.quizler.domain.dtos.QuizDto;
import dev.salt.quizler.domain.dtos.ScoreDto;
import dev.salt.quizler.domain.models.Answer;
import dev.salt.quizler.domain.models.Question;
import dev.salt.quizler.domain.models.Quiz;
import dev.salt.quizler.domain.models.Score;
import dev.salt.quizler.domain.repos.AnswerRepository;
import dev.salt.quizler.domain.repos.QuestionRepository;
import dev.salt.quizler.domain.repos.QuizRepository;
import dev.salt.quizler.domain.repos.ScoreRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping
public class Controller {
    private final QuizRepository repo;
    private final ScoreRepository scoreRepo;
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;

    public Controller(QuizRepository repo, ScoreRepository scoreRepo,
                      QuestionRepository questionRepository, AnswerRepository answerRepository) {
        this.repo = repo;
        this.scoreRepo = scoreRepo;
        this.questionRepository = questionRepository;
        this.answerRepository = answerRepository;
    }


    @GetMapping
    public ResponseEntity<List<Quiz>> getAllQuiz() {
        return ResponseEntity.ok(repo.findAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<Quiz> getSpecificQuiz(@PathVariable Long id) {

        var quiz = repo.findById(id).orElse(null);
        if (quiz == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(quiz);
    }

    @PostMapping("{id}")
    public ResponseEntity addUserScore(@PathVariable Long id, @RequestBody ScoreDto body) {
        Quiz quiz = repo.findById(body.quizId()).orElse(null);

        if (quiz == null) {
            return ResponseEntity.notFound().build();
        }

        Score score = new Score(quiz, body.name(), body.score());

        scoreRepo.save(score);

        return ResponseEntity.ok().build();

    }

    @PostMapping
    public ResponseEntity addNewQuiz(@RequestBody QuizDto body, HttpServletRequest req) {


        Quiz quiz = new Quiz();
        quiz.setName(body.name());

        repo.save(quiz);

        body.questions().stream().forEach(question -> {
            Question newQuestion = new Question();
            newQuestion.setQuestion(question.getQuestion());
            System.out.println(question.getQuestion());
            newQuestion.setQuiz(quiz);
            questionRepository.save(newQuestion);
            question.getAnswers().stream().forEach(answer -> {
                Answer newAnswer = new Answer();
                newAnswer.setAnswer(answer.getAnswer());
                newAnswer.setCorrect(answer.getCorrect());
                newAnswer.setQuestion(newQuestion);
                answerRepository.save(newAnswer);
            });
        });


        URI location = URI.create(req.getRequestURI() + "/" + quiz.getId());
        return ResponseEntity.created(location).build();

    }


}
