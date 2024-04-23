package data1700.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MovieTicketsController {

    @Autowired
    private MovieTicketsRepository TicketsRepository;

    @PostMapping("/orderTickets")
    public ResponseEntity<MovieTickets> saveTickets(@RequestBody MovieTickets movieTickets) {
        MovieTickets tickets = TicketsRepository.save(movieTickets);
        return ResponseEntity.ok(tickets);
    }

    @GetMapping("/confirmTickets")
    public List<MovieTickets> ticketConfirmation() {
        return TicketsRepository.findAll();
    }

}
