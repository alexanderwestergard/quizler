package dev.salt.quizler.domain.repos;

import dev.salt.quizler.domain.models.Question;
import org.springframework.data.repository.ListCrudRepository;

public interface QuestionRepository extends ListCrudRepository<Question, Long> {
}
