package fu.se.chapter13orchild.repositories;

import fu.se.chapter13orchild.entity.Orchid;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrchidRepository extends JpaRepository<Orchid, Integer> {
}
