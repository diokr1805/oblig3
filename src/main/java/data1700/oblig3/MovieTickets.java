package data1700.oblig3;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class MovieTickets {
    @Id
    @GeneratedValue
    private Long id;

    private String movie;
    private String number_of_tickets;
    private String first_name;
    private String last_name;
    private String phone_number;
    private String email;

    public MovieTickets(Long id, String movie, String number_of_tickets,
                        String first_name, String last_name, String phone_number,
                        String email) {
        this.id = id;
        this.movie = movie;
        this.number_of_tickets = number_of_tickets;
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone_number = phone_number;
        this.email = email;
    }

    public MovieTickets(){
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMovie() {
        return movie;
    }

    public void setMovie(String movie) {
        this.movie = movie;
    }

    public String getNumber_of_tickets() {
        return number_of_tickets;
    }

    public void setNumber_of_tickets(String number_of_tickets) {
        this.number_of_tickets = number_of_tickets;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
