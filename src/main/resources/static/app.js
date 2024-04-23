function ticketOrder(){
    const ticketDetails = {
        movie : $("#selectMovie").val(),
        number_of_tickets : $("#ticketAmount").val(),
        first_name : $("#firstName").val(),
        last_name : $("#lastName").val(),
        phone_number : $("#phone").val(),
        email : $("#email").val()
    }

    $.ajax({
        url : "/orderTickets",
        type : "POST",
        contentType : "application/json",
        data : JSON.stringify(ticketDetails),
        success : function(response){
            console.log("Success", response);
        },
        error: function(xhr, status, error) {
            console.log("Error:", xhr.responseText);
        }
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