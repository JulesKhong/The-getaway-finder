$(document).ready(function() {

  $("#destination").submit(function(event) {
    event.preventDefault();

    var sum = function(qOne, qTwo, qThree, qFour, qFive){
      return qOne + qTwo + qThree + qFour + qFive;
    };

    var user = $("#questionZero").val();
    var qOne = parseInt($("#questionOne").val());
    var qTwo = parseInt($("#questionTwo").val());
    var qThree = parseInt($("#questionThree").val());
    var qFour = parseInt($("#questionFour").val());
    var qFive = parseInt($("#questionFive").val());

    $(".userName").append(user);
    if (user === null || user === "") {
      alert("Please enter your first name");
    } else {
      var result = sum(qOne, qTwo, qThree, qFour, qFive);
        if (result < 17){
          $("#snow").show();
          $("form").hide();
          $("body").removeClass();
          $("body").addClass("snowPhoto");
        } else if (result < 25) {
          $("#beach").show();
          $("form").hide();
          $("body").removeClass();
          $("body").addClass("beachPhoto");
        } else if (result < 33) {
          $("#creative").show();
          $("form").hide();
          $("body").removeClass();
          $("body").addClass("creativePhoto");
        } else  if (result >= 33) {
          $("#party").show();
          $("form").hide();
          $("body").removeClass();
          $("body").addClass("partyPhoto");
        } else {
          alert("uh-oh. something didn't work. Please try again");
        }
      }
  });
});
