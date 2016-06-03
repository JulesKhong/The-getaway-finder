$(document).ready(function(){
// debugger;
  $("#destination").submit(function(event) {
    event.preventDefault();

    var sum = function(qOne, qTwo, qThree, qFour, qFive){
      return qOne + qTwo + qThree + qFour + qFive;
    };

    var qOne = parseInt($("#questionOne").val());
    var qTwo = parseInt($("#questionTwo").val());
    var qThree = parseInt($("#questionThree").val());
    var qFour = parseInt($("#questionFour").val());
    var qFive = parseInt($("#questionFive").val());
    var result = sum(qOne, qTwo, qThree, qFour, qFive);
    // alert(result);
      if (result < 17){
        alert("you are a snowbird");
      } else if (result < 25) {
        alert("you are a beach bum")
      } else if (result < 33) {
        alert("you are a creative retreat")
      } else  {
        alert("you are a party animal!")
      }
  // }
  });
});
