package dev.salt.quizler.domain.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;

    @ManyToOne
    @JsonIgnore
    private Quiz quiz;

    @OneToMany(mappedBy = "question")
    private List<Answer> answers;


    private String question;

    public List<Answer> getAnswers() {
        return answers;
    }

    public String getQuestion() {
        return question;
    }
}
