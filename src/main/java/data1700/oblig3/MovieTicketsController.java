package data1700.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @DeleteMapping("/tickets/{id}")
    public ResponseEntity<MovieTickets> deleteTicket(@PathVariable Long id) {
        try {
            TicketsRepository.deleteById(id);
            return ResponseEntity.ok().build(); // Successfully deleted
        } catch (Exception e) {
            e.printStackTrace();  // Log the actual error for more insight
            return ResponseEntity.notFound().build(); // ID not found or error during deletion
        }
    }
}