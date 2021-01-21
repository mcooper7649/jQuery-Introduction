// $("h1").css("color", "blue")    //this is jQuery to change our h1 to red


$("h1").addClass("big-title margin-50");
// $("h1").text("Bye");
// $("button").text("Don't Click Me");
// $("button").html("<em>Hey</em>");
// $("a").attr("href", "https://www.yahoo.com");

// $("h1").click(function(){
//     $("h1").css("color", "purple")  
// })

// $("button").click(function(){
//     $("h1").css("color", "purple")  
// })


// $("input").keypress(function(event){
//     console.log(event.key)  // This is how †o console log a keypress when entered into the input field.
// })

$("body").keypress(function(event){
    $("h1").text(event.key);
});