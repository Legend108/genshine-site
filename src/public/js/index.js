
$(document).ready(function() {
  $('.gif').hide()
  const element1 = document.getElementById("btn-open")

  $(element1).on("click", (event) => {
    $('.container').hide();
    $('.gif').show();
  })
})
