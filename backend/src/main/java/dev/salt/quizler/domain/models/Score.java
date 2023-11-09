package dev.salt.quizler.domain.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;


@Entity
public class Score {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;


    private String name;

    private int score;

    @ManyToOne
    @JsonIgnore
    private Quiz quiz;

    public Score() {
    }

    public Score(Quiz quiz, String name, int score) {
        this.quiz = quiz;
        this.name = name;
        this.score = score;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getScore() {
        return score;
    }

    public Quiz getQuiz() {
        return quiz;
    }
}
