CREATE TABLE IF NOT EXISTS movie_tickets(
    id INTEGER PRIMARY KEY,
    movie VARCHAR(255) NOT NULL,
    number_of_tickets VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);
