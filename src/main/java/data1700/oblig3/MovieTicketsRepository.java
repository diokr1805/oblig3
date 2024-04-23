package data1700.oblig3;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieTicketsRepository extends JpaRepository<MovieTickets, Long> {

}
