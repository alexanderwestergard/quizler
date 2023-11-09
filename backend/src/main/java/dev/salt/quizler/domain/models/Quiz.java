package dev.salt.quizler.domain.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "quiz")
    private List<Question> questions;

    @OneToMany
    private List<Score> leaderboard;


    public Long getId() {
        return id;
    }

    public List<Question> getQuestions() {
        return questions;
    }
}
