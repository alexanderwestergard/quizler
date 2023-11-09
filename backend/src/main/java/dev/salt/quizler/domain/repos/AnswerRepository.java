package dev.salt.quizler.domain.repos;

import dev.salt.quizler.domain.models.Answer;
import org.springframework.data.repository.ListCrudRepository;


public interface AnswerRepository extends ListCrudRepository<Answer, Long> {
}
