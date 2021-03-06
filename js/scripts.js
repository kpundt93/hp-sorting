$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const color = $("input:radio[name=color]:checked").val();
    const animal = $("input:radio[name=animal]:checked").val();
    const quality = $("input:radio[name=quality]:checked").val();

    if (name === "") {
      $('#error').show();
      $('#gryffindor').hide();
      $('#slytherin').hide();
      $('#ravenclaw').hide();
      $('#hufflepuff').hide();
      $('#anyHouse').hide();
    }
      else if (color === "red" && animal === "owl" && quality === "loyal") {
      $('#gryffindor').show();
      $('#slytherin').hide();
      $('#ravenclaw').hide();
      $('#hufflepuff').hide();
      $('#anyHouse').hide();
      $('#error').hide();
    } else if (color === "green" && animal === "cat" &&  quality === "cunning") {
      $('#slytherin').show();
      $('#gryffindor').hide();
      $('#ravenclaw').hide();
      $('#hufflepuff').hide();
      $('#anyHouse').hide();
      $('#error').hide();
    } else if (color === "blue" && animal === "mouse" && quality === "intelligent") {
      $('#ravenclaw').show();
      $('#gryffindor').hide();
      $('#slytherin').hide();
      $('#hufflepuff').hide();
      $('#anyHouse').hide();
      $('#error').hide();
    } else if (color === "yellow" && animal === "toad" && quality === "loyal") {
      $('#hufflepuff').show();
      $('#gryffindor').hide();
      $('#slytherin').hide();
      $('#ravenclaw').hide();
      $('#anyHouse').hide();
      $('#error').hide();
    } else {
      $('#gryffindor').hide();
      $('#slytherin').hide();
      $('#ravenclaw').hide();
      $('#hufflepuff').hide();
      $('#anyHouse').show();
      $('#error').hide();
    }

    $(".name").text(name);
  });
});