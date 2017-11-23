// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//= require jquery3
//= require jquery_ujs
//= require rails-ujs
//= require turbolinks
//= require_tree .

// A $( document ).ready() block.
$( document ).ready(function() {

//////////////////////////////
///// CAROUSEL
/////////////////////////////
  $("#carousel").animate({width:'toggle'},1500);



//////////////////////////////
///// NAVBAR
/////////////////////////////

$("#presentation").hide();
$("#menu").hide();
$("#quisommesnous").hide();

  $( "#tabs1" ).click(function( event ) {
    event.preventDefault();
    $("#presentation").show("slow");
    $("#menu").hide();
    $("#quisommesnous").hide();

    // console.log("prez");
  });
  $( "#tabs2" ).click(function( event ) {
    event.preventDefault();
    $("#menu").show("slow");
    $("#presentation").hide();
    $("#quisommesnous").hide();
    // console.log( "menu" );
  });
  $( "#tabs3" ).click(function( event ) {
    event.preventDefault();
    $("#quisommesnous").show("slow");
    $("#menu").hide();
    $("#presentation").hide();
    // console.log( "quisommesnous" );

  });
});
