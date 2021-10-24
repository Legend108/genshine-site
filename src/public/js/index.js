
$(document).ready(function() {
  $('.settings').hide()
  $('#gif').hide()

  $(document.getElementById("btn-open")).on("click", (event) => {
    $('.container').hide();
    $('#gif').show();
    const video = document.getElementById("gif");
    video.autoplay = true;
    video.load();
    video.addEventListener('ended', (event) => {
      $('#gif').hide();
      $('.container').show();
    })
  })
  $(document.getElementById("settings")).on('click', () => {
    $('.settings').show();
    $('.container').hide();
  })

  $(document.getElementById("closeSettings")).on('click', () => {
    $('.container').show();
    $('.settings').hide();
  })
})
