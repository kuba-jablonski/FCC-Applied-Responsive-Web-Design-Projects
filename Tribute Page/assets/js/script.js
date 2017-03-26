$(document).ready(function () {
    $('#quote').html('"' + quotes[randomize()] + '"');

    window.setInterval(changeQuote, 5000);
});

function changeQuote() {
    $('#quote').fadeOut(function() {
        $(this).html('"' + quotes[randomize()] + '"')
    });
    $('#quote').fadeIn();
}

function randomize() {
    return Math.floor(Math.random() * quotes.length);
}