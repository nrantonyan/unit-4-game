$(document).ready(function () {
    //randomizers
    var total = Math.floor((Math.random() * 101) + 19);
    var one = Math.floor(Math.random() * 11 + 1)
    var two = Math.floor(Math.random() * 11 + 1)
    var three = Math.floor(Math.random() * 11 + 1)
    var four = Math.floor(Math.random() * 11 + 1)
    //counters
    var score = 0;
    var wins = 1;
    var losses = 1;



    function reset() {
        total = Math.floor((Math.random() * 120) + 19);
        console.log("Chosen Number: " + total);
        $("#display").text(total);
        one = Math.floor(Math.random() * 11 + 1)
        two = Math.floor(Math.random() * 11 + 1)
        three = Math.floor(Math.random() * 11 + 1)
        four = Math.floor(Math.random() * 11 + 1)
        score = 0;

    }
    reset();



    $(".One").on("click", function () {
        console.log(one);
        score = score + one;
        $("#match").text(score);
        if (score > total) {
            alert("Darn, you went " + (score - total) + " points over. Try again.");
            $("#losses").text(losses++);
            reset();
        }
        if (score === total) {
            alert("Wait, you actually won? Good job!")
            $("#wins").text(wins++);
            reset();
        }

    })

    $(".Two").on("click", function () {
        console.log(two);
        score = score + two;
        $("#match").text(score);
        if (score > total) {
            alert("Darn, you went " + (score - total) + " points over. Try again.");
            $("#losses").text(losses++);
            reset();
        }
        if (score === total) {
            alert("Wait, you actually won? Good job!")
            $("#wins").text(wins++);
            reset();
        }

    })

    $(".Three").on("click", function () {
        console.log(three);
        score = score + three;
        $("#match").text(score);
        if (score > total) {
            alert("Darn, you went " + (score - total) + " points over. Try again.");
            $("#losses").text(losses++);
            reset();
        }
        if (score === total) {
            alert("Wait, you actually won? Good job!")
            $("#wins").text(wins++);
            reset();
        }


    })

    $(".Four").on("click", function () {
        console.log(four);
        score = score + four;
        $("#match").text(score);
        if (score > total) {
            alert("Darn, you went " + (score - total) + " points over. Try again.");
            $("#losses").text(losses++);
            reset();
        }
        if (score === total) {
            alert("Wait, you actually won? Good job!")
            $("#wins").text(wins++);
            reset();
        }


    })


});

