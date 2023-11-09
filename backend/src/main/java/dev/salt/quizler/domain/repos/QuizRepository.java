package dev.salt.quizler.domain.repos;

import dev.salt.quizler.domain.models.Quiz;
import org.springframework.data.repository.ListCrudRepository;

public interface QuizRepository extends ListCrudRepository<Quiz, Long> {
}
