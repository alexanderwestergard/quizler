package dev.salt.quizler.domain.repos;

import dev.salt.quizler.domain.models.Score;
import org.springframework.data.repository.ListCrudRepository;

public interface ScoreRepository extends ListCrudRepository<Score, Long> {
}
