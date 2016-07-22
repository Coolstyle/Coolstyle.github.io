$(document).ready(function(){
  var score = 0;
  
  $('#Ultron1').hide();
  $('#Ultron2').hide();
  $('#Ultron3').hide();
  $('#Ultron4').hide();
  $('#Ultron5').hide();
  $('#Ultron6').hide();
  $('#Loki1').hide();
  $('#Loki2').hide();
  $('#Loki3').hide();
  $('#Loki4').hide();
  $('#Loki5').hide();
  $('#Loki6').hide();
  $('#RedSkull1').hide();
  $('#RedSkull2').hide();
  $('#RedSkull3').hide();
  $('#RedSkull4').hide();
  $('#RedSkull5').hide();
  $('#RedSkull6').hide();
  $('#Thanos1').hide();
  $('#Thanos2').hide();
  $('#Thanos3').hide();
  $('#Thanos4').hide();
  $('#Thanos5').hide();
  $('#Thanos6').hide();
  $('#scoreboard').hide();
  $('#Ironman').hide();
  $('#Hulk').hide();
  $('#Thor').hide();
  $('#BlackWidow').hide();

  $('button').click(function(){
    $('h1').hide();
    $('h2').hide();
    $('h3').hide();
    $('button').hide();
    $('#scoretext').show();
    $('#scoreboard').show();
    $('.Ultron').show();
    $('#Loki1').show();
    $('#Loki2').show();
    $('#Loki3').show();
    $('#Loki4').show();
    $('#Loki5').show();
    $('#Loki6').show();
    $('#RedSkull1').show();
    $('#RedSkull2').show();
    $('#RedSkull3').show();
    $('#RedSkull4').show();
    $('#RedSkull5').show();
    $('#RedSkull6').show();
    $('#Thanos1').show();
    $('#Thanos2').show();
    $('#Thanos3').show();
    $('#Thanos4').show();
    $('#Thanos5').show();
    $('#Thanos6').show();
    $('#Ironman').show();
    $('#Hulk').show();
    $('#Thor').show();
    $('#BlackWidow').show();
 });
   
    function check() { 
    if (score === 20) {
      alert("You reached 20 points. You won!");
    }
  }
  

  
 $('#RedSkull1').click(function(){
   $('#RedSkull1').toggle("explode");
   score = score + 1;
   document.getElementById("points").innerHTML = score;
   check();
   });  
  
 $('#RedSkull2').click(function(){
   $('#RedSkull2').toggle("explode");
   score = score + 1;
   document.getElementById("points").innerHTML = score;
    check();
 });
  
  
 $('#RedSkull3').click(function(){
   $('#RedSkull3').toggle("explode");
   score = score + 1;
   document.getElementById("points").innerHTML = score;
   check();
 });
  
 $('#RedSkull4').click(function(){
   $('#RedSkull4').toggle("explode");
   score = score + 1;
   document.getElementById("points").innerHTML = score;
    check();
 });
  
 $('#RedSkull5').click(function(){
   $('#RedSkull5').toggle("explode");
   score = score + 1;
   document.getElementById("points").innerHTML = score;
    check();
 });

 $('#RedSkull6').click(function(){
   $('#RedSkull6').toggle("explode");
   score = score + 1;
   document.getElementById("points").innerHTML = score;
    check();
 });
  
 //Ultron Explode 
 $('#Ultron1').click(function(){
   $('#Ultron1').toggle("explode");
   score = score + 1;
   document.getElementById("points").innerHTML = score;
    check();
 });
  
 $('#Ultron2').click(function(){
   $('#Ultron2').toggle("explode");
   score = score + 1;
   document.getElementById("points").innerHTML = score;
    check();
 });
  
 $('#Ultron3').click(function(){
   $('#Ultron3').toggle("explode");
   score = score + 1;
   document.getElementById("points").innerHTML = score;
    check();
 }); 
  
 $('#Ultron4').click(function(){
   $('#Ultron4').toggle("explode");
   score = score + 1;
   document.getElementById("points").innerHTML = score;
    check();
 });
  
 $('#Ultron5').click(function(){
   $('#Ultron5').toggle("explode");
   score = score + 1;
   document.getElementById("points").innerHTML = score;
    check();
 });
  
 $('#Ultron6').click(function(){
   $('#Ultron6').toggle("explode");
   score = score + 1;
   document.getElementById("points").innerHTML = score;
    check();
 });
  
 //Loki Explode  
 $('#Loki1').click(function(){
   $('#Loki1').toggle("explode");
   score = score + 1;
   document.getElementById("points").innerHTML = score;
    check();
 }); 
  
 $('#Loki2').click(function(){
   $('#Loki2').toggle("explode");
   score = score + 1;
   document.getElementById("points").innerHTML = score;
    check();
  }); 
  
 $('#Loki3').click(function(){
   $('#Loki3').toggle("explode");
   score = score + 1;
   document.getElementById("points").innerHTML = score;
    check();
 });
  
 $('#Loki4').click(function(){
   $('#Loki4').toggle("explode");
   score = score + 1;
   document.getElementById("points").innerHTML = score;
    check();
  });
  
 $('#Loki5').click(function(){
   $('#Loki5').toggle("explode");
   score = score + 1;
   document.getElementById("points").innerHTML = score;
    check();
  });
  
 $('#Loki6').click(function(){
   $('#Loki6').toggle("explode");
   score = score + 1;
   document.getElementById("points").innerHTML = score;
    check();
  });
 
 //Thanos Explode
 $('#Thanos1').click(function(){
   $('#Thanos1').toggle("explode");
   score = score + 1;
   document.getElementById("points").innerHTML = score;
    check();
    });
  
  $('#Thanos2').click(function(){
   $('#Thanos2').toggle("explode");
    score = score + 1;
   document.getElementById("points").innerHTML = score;
     check();
    });
  
  $('#Thanos3').click(function(){
   $('#Thanos3').toggle("explode");
    score = score + 1;
   document.getElementById("points").innerHTML = score;
     check();
    });
  
  $('#Thanos4').click(function(){
   $('#Thanos4').toggle("explode");
    score = score + 1;
   document.getElementById("points").innerHTML = score;
     check();
    });
  
  $('#Thanos5').click(function(){
   $('#Thanos5').toggle("explode");
    score = score + 1;
   document.getElementById("points").innerHTML = score;
     check();
    });
  
  $('#Thanos6').click(function(){
   $('#Thanos6').toggle("explode");
    score = score + 1;
   document.getElementById("points").innerHTML = score;
     check();
    });
  
   $('#Ironman').click(function(){
  $('#Ironman').toggle("explode");
   score = score - 1;
  document.getElementById("points").innerHTML = score;
      check();
   });
  
   $('#BlackWidow').click(function(){
  $('#BlackWidow').toggle("explode");
   score = score - 1;
  document.getElementById("points").innerHTML = score;
      check();
   });
  
   $('#Thor').click(function(){
  $('#Thor').toggle("explode");
   score = score - 1;
  document.getElementById("points").innerHTML = score;
      check();
   });
  
   $('#Hulk').click(function(){
  $('#Hulk').toggle("explode");
   score = score - 1;
  document.getElementById("points").innerHTML = score;
      check();
   });
  

//Move RedSkull1
   function moveRedSkull1Right() {
    $("#RedSkull1").animate({left: "+=300"}, 2000, moveRedSkull1Left);
  }
  
   function moveRedSkull1Left() { 
    $("#RedSkull1").animate({left: "-=300"}, 2000, moveRedSkull1Right);  
  }
  
  moveRedSkull1Right();

  
  
  //Move RedSkull2
   function moveRedSkull2Right() {
    $("#RedSkull2").animate({left: "+=200"}, 2000, moveRedSkull2Left);
  }
  
   function moveRedSkull2Left() { 
    $("#RedSkull2").animate({left: "-=200"}, 2000, moveRedSkull2Right);  
  }
  
  moveRedSkull2Right();
  
  
  
  //Move RedSkull3
   function moveRedSkull3Right() {
    $("#RedSkull3").animate({left: "+=400"}, 2000, moveRedSkull3Left);
  }
  
   function moveRedSkull3Left() { 
    $("#RedSkull3").animate({left: "-=400"}, 2000, moveRedSkull3Right);  
  }
  
  moveRedSkull3Right();
  
 //Move RedSkull4
   function moveRedSkull4Right() {
    $("#RedSkull4").animate({left: "+=400"}, 2000, moveRedSkull4Left);
  }
  
   function moveRedSkull4Left() { 
    $("#RedSkull4").animate({left: "-=400"}, 2000, moveRedSkull4Right);  
  }
  
  moveRedSkull4Right();
  
      //Move RedSkull5
   function moveRedSkull5Right() {
    $("#RedSkull5").animate({left: "+=400"}, 2000, moveRedSkull5Left);
  }
  
   function moveRedSkull5Left() { 
    $("#RedSkull5").animate({left: "-=400"}, 2000, moveRedSkull5Right);  
  }
  
  moveRedSkull5Right();
  
  
//Move RedSkull6
   function moveRedSkull6Right() {
    $("#RedSkull6").animate({left: "+=400"}, 2000, moveRedSkull6Left);
  }
  
   function moveRedSkull6Left() { 
    $("#RedSkull6").animate({left: "-=400"}, 2000, moveRedSkull6Right);  
  }
  
  moveRedSkull6Right();
  
  
 //Move Ultron1
   function moveUltron1Right() {
    $("#Ultron1").animate({left: "+=400"}, 2000, moveUltron1Left);
  }
  
   function moveUltron1Left() { 
    $("#Ultron1").animate({left: "-=400"}, 2000, moveUltron1Right);  
  }
  
  moveUltron1Right(); 
  
  //Move Ultron2 
function moveUltron2Right() {
    $("#Ultron2").animate({left: "+=400"}, 2000, moveUltron2Left);
  }
  
   function moveUltron2Left() { 
    $("#Ultron2").animate({left: "-=400"}, 2000, moveUltron2Right);  
  }
  
  moveUltron2Right(); 
  
 //Move Ultron3
  function moveUltron3Right() {
    $("#Ultron3").animate({left: "+=300"}, 2000, moveUltron3Left);
  }
  
   function moveUltron3Left() { 
    $("#Ultron3").animate({left: "-=300"}, 2000, moveUltron3Right);  
  }
  
  moveUltron3Right();


//Move Ultron4
  function moveUltron4Right() {
    $("#Ultron4").animate({left: "+=300"}, 2000, moveUltron4Left);
  }
  
   function moveUltron4Left() { 
    $("#Ultron4").animate({left: "-=300"}, 2000, moveUltron4Right);  
  }
  
  moveUltron4Right();
  
  //Move Ultron5
  function moveUltron5Right() {
    $("#Ultron5").animate({left: "+=300"}, 2000, moveUltron5Left);
  }
  
   function moveUltron5Left() { 
    $("#Ultron5").animate({left: "-=300"}, 2000, moveUltron5Right);  
  }
  
  moveUltron5Right();
  
//Move Ultron6
  function moveUltron6Right() {
    $("#Ultron6").animate({left: "+=300"}, 2000, moveUltron6Left);
  }
  
   function moveUltron6Left() { 
    $("#Ultron6").animate({left: "-=300"}, 2000, moveUltron6Right);  
  }
  
  moveUltron6Right();
  
  //Move Loki1
      function moveLoki1Right() {
    $("#Loki1").animate({left: "+=300"}, 2000, moveLoki1Left);
  }
  
   function moveLoki1Left() { 
    $("#Loki1").animate({left: "-=300"}, 2000, moveLoki1Right);  
  }
  
  moveLoki1Right();
  
  //Move Loki2
      function moveLoki2Right() {
    $("#Loki2").animate({left: "+=300"}, 2000, moveLoki2Left);
  }
  
   function moveLoki2Left() { 
    $("#Loki2").animate({left: "-=300"}, 2000, moveLoki2Right);  
  }
  
  moveLoki2Right();
  
  //Move Loki3
      function moveLoki3Right() {
    $("#Loki3").animate({left: "+=300"}, 2000, moveLoki3Left);
  }
  
   function moveLoki3Left() { 
    $("#Loki3").animate({left: "-=300"}, 2000, moveLoki3Right);  
  }
  
  moveLoki3Right();
  
  //Move Loki4
      function moveLoki4Right() {
    $("#Loki4").animate({left: "+=300"}, 2000, moveLoki4Left);
  }
  
   function moveLoki4Left() { 
    $("#Loki4").animate({left: "-=300"}, 2000, moveLoki4Right);  
  }
  
  moveLoki4Right();
  
  //Move Loki5
      function moveLoki5Right() {
    $("#Loki5").animate({left: "+=300"}, 2000, moveLoki5Left);
  }
  
   function moveLoki5Left() { 
    $("#Loki5").animate({left: "-=300"}, 2000, moveLoki5Right);  
  }
  
  moveLoki5Right();
  
  //Move Loki6
      function moveLoki6Right() {
    $("#Loki6").animate({left: "+=300"}, 2000, moveLoki6Left);
  }
  
   function moveLoki6Left() { 
    $("#Loki6").animate({left: "-=300"}, 2000, moveLoki6Right);  
  }
  
  moveLoki6Right();
  
   //Move Thanos1
 function moveThanos1Right() {
    $("#Thanos1").animate({left: "+=400"}, 2000, moveThanos1Left);
  }
  
   function moveThanos1Left() { 
    $("#Thanos1").animate({left: "-=400"}, 2000, moveThanos1Right);  
  }
  
  moveThanos1Right(); 
  
  
//Move Thanos2
 function moveThanos2Right() {
    $("#Thanos2").animate({left: "+=400"}, 2000, moveThanos2Left);
  }
  
   function moveThanos2Left() { 
    $("#Thanos2").animate({left: "-=400"}, 2000, moveThanos2Right);  
  }
  
  moveThanos2Right(); 
  
  
  //Move Thanos3
 function moveThanos3Right() {
    $("#Thanos3").animate({left: "+=400"}, 2000, moveThanos3Left);
  }
  
   function moveThanos3Left() { 
    $("#Thanos3").animate({left: "-=400"}, 2000, moveThanos3Right);  
  }
  
  moveThanos3Right(); 
  
    //Move Thanos4
 function moveThanos4Right() {
    $("#Thanos4").animate({left: "+=400"}, 2000, moveThanos4Left);
  }
  
   function moveThanos4Left() { 
    $("#Thanos4").animate({left: "-=400"}, 2000, moveThanos4Right);  
  }
  
  moveThanos4Right(); 
  
  
//Move Thanos5
 function moveThanos5Right() {
    $("#Thanos5").animate({left: "+=400"}, 2000, moveThanos5Left);
  }
  
   function moveThanos5Left() { 
    $("#Thanos5").animate({left: "-=400"}, 2000, moveThanos5Right);  
  }
  
  moveThanos5Right(); 
  
  //Move Thanos6
 function moveThanos6Right() {
    $("#Thanos6").animate({left: "+=400"}, 2000, moveThanos6Left);
  }
  
   function moveThanos6Left() { 
    $("#Thanos6").animate({left: "-=400"}, 2000, moveThanos6Right);  
  }
  
  moveThanos6Right(); 
  
   //Move Ironman
 function moveIronmanRight() {
    $("#Ironman").animate({left: "+=400"}, 2000, moveIronmanLeft);
  }
  
   function moveIronmanLeft() { 
    $("#Ironman").animate({left: "-=400"}, 2000, moveIronmanRight);  
  }
  
  moveIronmanRight(); 
  
     //Move Black Widow
 function moveBlackWidowRight() {
    $("#BlackWidow").animate({left: "+=400"}, 2000, moveBlackWidowLeft);
  }
  
   function moveBlackWidowLeft() { 
    $("#BlackWidow").animate({left: "-=400"}, 2000, moveBlackWidowRight);  
  }
  
  moveBlackWidowRight(); 
  
     //Move Hulk
 function moveHulkRight() {
    $("#Hulk").animate({left: "+=400"}, 2000, moveHulkLeft);
  }
  
   function moveHulkLeft() { 
    $("#Hulk").animate({left: "-=400"}, 2000, moveHulkRight);  
  }
  
  moveHulkRight(); 
  
     //Move Thor
 function moveThorRight() {
    $("#Thor").animate({left: "+=400"}, 2000, moveThirLeft);
  }
  
   function moveThorLeft() { 
    $("#Thor").animate({left: "-=400"}, 2000, moveThorRight);  
  }
  
  moveThorRight(); 
  

  
  });