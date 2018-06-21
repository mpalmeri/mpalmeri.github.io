console.log("PAGINA LISTA");
var SERVICE_URL = "https://jsonplaceholder.typicode.com";
var API_KEY = "AIzaSyB45NWxEaUGKcaEo7uDK6ebtltITN8bg7Q";
var YOUTUBE_URL = "https://www.googleapis.com/youtube/v3/search"


jQuery(document).ready(function($) {
        //la pagina è completamente carica ejQuery è pronto!
        // Jquery == $
        console.log("READY")
            //console.log("arguments", arguments)
        ç //$("#loadingBar").hide(); //nascondo barra caricamento
        //$("#usersTable").hide(); 

        $("#searchBtn").click(function() {
            console.log("Click");
            getUsers();
        })

        //.click() così clicca da solo 


        function getUsers() {
            $("#loadingBar").fadeIn();
            $("#emptyContent").fadeOut();
            console.log("chiamo get users");
            $.getJSON(SERVICE_URL + "/users", function(response) {
                var users = response;
                console.log("USERS", users);
                fillTable(users);
            })
        }

        function fillTable(arrayData) {
            var $tableBody = $("#usersTable tbody")
            $tableBody.html("");
            $.each(arrayData, function(index, user) {
                console.log(index, user)

                //creo una riga vuota
                var newRow = jQuery("<tr></tr>");
                //inserisco dentro la riga vuota un tag td con il valore che voglio <td>VALORE</>
                newRow.append("<td>" + user.id + "</td>") //id  
                newRow.append("<td>" + user.name + "</td>") //name
                newRow.append("<td>" + user.email + "</td>") //email
                newRow.append("<td>" + user.username + "</td>") //username

                //append la riga alla tabella


                $tableBody.append(newRow)

            });
            setTimeout(function() {
                $("#loadingBar").fadeOut();
                $("#usersTable").fadeIn();
            }, 2 * 1000)

        }











    }) //fine ready