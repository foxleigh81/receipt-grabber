$(document).ready(function(){

  // Hide all cards but the first one
  $('.card:not(:first-of-type)').hide()

  // Add a hover effect to the list group items
  $('.list-group-item').hover(
    function() {
      $(this)
        .addClass('active')
        .css('cursor', 'pointer')
    },
    function() {
      $(this)
        .removeClass('active')
    }
  )

  // Hide cards that are not active
  $('.list-group-item').click(
    function() {
      let itemText = $(this).text()
      $('.card')
        .hide()
        .find(`h4:contains('${itemText} details')`)
        .parent()
        .parent()
        .show()
      
    }
  )
})