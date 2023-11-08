package dev.salt.quizler.domain.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Quiz quiz;

    @OneToMany(mappedBy = "question")
    private List<Answer> answers;
}
