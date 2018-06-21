console.log("PAGINA LISTA");
var SERVICE_URL = "https://jsonplaceholder.typicode.com";
var API_KEY = "AIzaSyB45NWxEaUGKcaEo7uDK6ebtltITN8bg7Q";
var YOUTUBE_URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=" + API_KEY + "&q=";


jQuery(document).ready(function($) {
        //la pagina è completamente carica ejQuery è pronto!
        // Jquery == $
        console.log("READY")
            //console.log("arguments", arguments)
            //$("#loadingBar").hide(); //nascondo barra caricamento
            //$("#usersTable").hide(); 

        $("#searchBtn").click(function() {
            console.log("Click");
            //getUsers();
            var search = $("#searchInput").val();
            getVideos(search);
        })

        //.click() così clicca da solo 


        function getUsers() {
            $("#loadingBar").fadeIn();
            $("#emptyContent").fadeOut();
            console.log("chiamo get users");
            $.getJSON(SERVICE_URL + "/users", function(response) {
                var users = response;
                console.log("USERS", users);
                //fillTable();
            })
        }

        function getVideos(search) {
            $("#loadingBar").fadeIn();
            $("#emptyContent").fadeOut();

            console.log("chiamo get video");
            $.getJSON(YOUTUBE_URL + search, function(response) {
                var videos = response.items;
                console.log("VIDEOS", videos);
                fillTable(videos);
            })
        }

        function fillTable(arrayData) {
            var $tableBody = $("#usersTable tbody")
            $tableBody.html("");
            $.each(arrayData, function(index, video) {
                console.log(index, video)

                //creo una riga vuota
                var newRow = jQuery("<tr></tr>");
                //inserisco dentro la riga vuota un tag td con il valore che voglio <td>VALORE</>
                newRow.append("<td>" + video.id.videoId + "</td>") //id  
                newRow.append("<td><a href='https://www.youtube.com/watch?v=" + video.id.videoId + "'>vai</a>" + video.snippet.title + "</td>") //name
                newRow.append("<td><img src='" + video.snippet.thumbnails.default.url + "'/></td>") //email


                //append la riga alla tabella


                $tableBody.append(newRow)

            });
            setTimeout(function() {
                $("#loadingBar").fadeOut();
                $("#usersTable").fadeIn();
            }, 2 * 1000)

        }











    }) //fine ready