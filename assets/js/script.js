    $(document).ready(function () {
        var myVar = setInterval(function () {
            myTimer()
        }, 1000);
    })

    function myTimer() {
        var d = new Date();
        $("#hourneedle").css("transform", "rotate(" + 30 * d.getHours() + "deg)");
        $("#minuteneedle").css("transform", "rotate(" + 6 * d.getMinutes() + "deg)");
        $("#secondneedle").css("transform", "rotate(" + 6 * d.getSeconds() + "deg)");
    }
    myTimer(),

        $("#needle_control").on("click", function () {

            if ($("#secondneedle").css("display") == "none") {
                $("#secondneedle").show();
                $("#needle_control").html("Cacher les secondes");
            } else {

                $("#needle_control").html("Montrer les secondes");
                $("#secondneedle").hide();
            }
        });