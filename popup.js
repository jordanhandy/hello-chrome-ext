// This function targets the name id from the HTML file, and based on the user
// input, concatenates the user's name to "hello" to greet them
$(function(){
    $('#name').keyup(function(){
        $('#greeting').text('Hello' + $('#name').val());
    })

})