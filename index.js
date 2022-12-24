$(".rating-btn").click(function (evt) {
    var rating = this.innerHTML;
    updateRating(rating);
});

$(".submit-btn").click(function () {
    var submitAudio = new Audio("sounds/submit.mp3");
    submitAudio.play();
    $("#ty-container").css("z-index", "1");
});

function updateRating(rating) {
    $(".submitted-rating").text("You selected " + rating + " out of 5");
}