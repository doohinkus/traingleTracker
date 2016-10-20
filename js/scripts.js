var triangleTracker = function (a, b, c) {

    if ((a + b <= c) || (a + c <= b) || (b + c <= a)){
      return "not a triangle";
    }else if(a != b && a != c && b != c){
      return "a Scalene Triangle";
    }else if((a === b && a != c) || (a === c && a != b) || (b === c && b != a)){
      return "an Isosceles Triangle";
    }
    else if(a === b && b === c){
      return "an Equalateral Triangle";
    }

}

var numValidation = function (a, b, c) {
    if ( a != a || b != b || c != c) {
    return false;
    } else {
    return true
    }
  }

$(document).ready(function(){
  // console.log(triangleTracker(3 , 4, 5));
   $("form#triInput").submit(function (event){
     event.preventDefault();
     var a = parseInt($("#side1").val());
     var b = parseInt($("#side2").val());
     var c = parseInt($("#side3").val());
     $("#output").show();
     if (numValidation(a, b, c) === true) {
       $("#output span").text(triangleTracker(a, b, c));
     } else {
       $("#output span").text("not a number");
     }
   });

});


// __NOT A TRIANGLE__
//  a + b <= c
//  a + c <= b
//  b + c <= a
//
// __SCALENE__
// a != b && a != c && b != c
//
// __ISOSCELES__
// a = b && a != c
// a = c && a != b
// b = c && b != a
//
// __EQUILATERAL__
// if a = b && b = c
