//console.log("start");
jQuery(document).ready(function() {
    //  console.log("ready");
    var lista = jQuery("#list");
    console.log(lista);
    var homeMenu = jQuery("#mainMenu .active a").text()
    console.log(homeMenu)
    jQuery("#btnCreateBox").on("click", createBox)

    function createBox() {
        var $newBox = jQuery("<div class='box'> Ciao Sono 1BOX</div>")
        var theClass = getColor();
        //    console.log("Il nuovo colore è" + theClass);
        $newBox.addClass(theClass).text("CIAOOOO").appendTo(".titolo");
    }
    createBox();

    function getColor() {
        var num = Math.round(Math.random());
        if (num === 0) {
            return "blue";
        } else {
            return "orange";
        }
    }

})