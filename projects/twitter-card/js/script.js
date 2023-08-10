//Latest Update: 10.11.2017
$(document).ready(function() {
  $('#following').hide();
})

$("#follow-button").click(function() {
  $(this).toggleClass('click');
  $('#follow').toggle();
  $('#following').toggle();
});

