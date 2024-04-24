let ticketDetails = null;

function ticketValidation(){
    let movie = $("#selectMovie").val();
    let number_of_tickets =  $("#ticketAmount").val()
    let first_name = $("#firstName").val()
    let last_name = $("#lastName").val()
    let phone_number = $("#phone").val()
    let email = $("#email").val()

    const validateTicketAmount = /^\b([0-9]|[1-9][0-9])\b/
    const validateName = /^[a-zA-Z]/;
    const validatePhone = /^[0-9]/
    const validateEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

    if (movie === "") {
        alert("Please select a movie!")
    } else if (!validateTicketAmount.test(number_of_tickets) || number_of_tickets === "") {
        alert("Please select a valid ticket amount!")
    } else if (!validateName.test(first_name) || first_name === "") {
        alert("Please enter your first name!")
    } else if (!validateName.test(last_name) || last_name === "") {
        alert("Please enter your last name!")
    } else if (!validatePhone.test(phone_number) || phone_number === "") {
        alert("Please enter a valid phone number!")
    } else if (!validateEmail.test(email) || email === "") {
        alert("Please enter a valid email address!")
    } else {
        ticketDetails = {
            movie : movie,
            number_of_tickets : number_of_tickets,
            first_name : first_name,
            last_name : last_name,
            phone_number : phone_number,
            email : email
        }
        ticketOrder()
    }
}

function ticketOrder(){
    $.ajax({
        url : "/orderTickets",
        type : "POST",
        contentType : "application/json",
        data : JSON.stringify(ticketDetails),
        success : function(response){
            $("#selectMovie").val("");
            $("#ticketAmount").val("");
            $("#firstName").val("");
            $("#lastName").val("");
            $("#phone").val("");
            $("#email").val("");
            console.log("Success", response);
            $("#container").text("Success! See your ticket confirmation below");
            $("#confirmationAlert").fadeIn();
        },
        error: function(xhr, status, error) {
            console.log("Error:", xhr.responseText);
            $("#confirmationAlert").text("Failed to order ticket(s)!");
            $("#confirmationAlert").fadeIn();
        }
    });

    $("#closeAlert").click(function() {
        $("#confirmationAlert").fadeOut();
    });
}

function ticketConfirmation(){
    $.ajax({
        url : "/confirmTickets",
        type : "GET",
        success : function(ticketConfirmation){
            const list = $("#ticketConfirmation");
            list.empty();
            ticketConfirmation.forEach(function(ticketDetails){
                list.append(`<li>Movie : ${ticketDetails.movie}</li>
                             <li>Tickets : ${ticketDetails.number_of_tickets}</li>
                             <li>First name : ${ticketDetails.first_name}</li>
                             <li>Last name : ${ticketDetails.last_name}</li>
                             <li>Phone : ${ticketDetails.phone_number}</li>
                             <li>Email : ${ticketDetails.email}</li>
                             <li>Id : ${ticketDetails.id}</li>
                             <br><br>`
                );
            });
        },
        error : function(error) {
            console.log("Error fetching tickets", error);
        }
    });
}

function deleteTicket() {
    let ticketID = $("#ticketID").val();
    if (ticketID) {
        $.ajax({
            url: "/tickets/" + ticketID,
            type: "DELETE",
            success: function (result) {
                alert("Ticket successfully deleted.");
            },
            error: function (xhr, status, error) {
                alert("Failed to delete ticket : " + xhr.responseText);
            }
        });
    } else {
        alert("Please enter a valid ticket ID!");
    }
}