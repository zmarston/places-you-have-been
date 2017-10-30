//business logic
function Location(place, when, who, info) {
  this.place = place;
  this.when = when;
  this.who = who;
  this.info = info;
}

//user-interface-logic
$(function(){
  $("form#new-place").submit(function(event){
    event.preventDefault();

    var inputtedPlace = $("input#place-input").val();
    var inputtedWhen = $("input#when-input").val();
    var inputtedWho = $("input#who-input").val();
    var inputtedInfo = $("input#info-input").val();

    var newDestination = new Location(inputtedPlace, inputtedWhen, inputtedWho, inputtedInfo);

    $("ul#destination").append("<li><span class='place-added'>" + newDestination.place + "</span></li>");

    $("input#place-input").val("");
    $("input#when-input").val("");
    $("input#who-input").val("");
    $("input#info-input").val("");

  });
});
