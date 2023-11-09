package dev.salt.quizler.domain.dtos;

import dev.salt.quizler.domain.models.Question;

import java.util.List;

public record QuizDto(String name, List<Question> questions) {
}
