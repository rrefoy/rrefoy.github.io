console.log('HELLO WORLD');
// Define a showParagraph() fucntion that will show the paragraph
function setUp() {
  $('#prod-mgmt').click(toggleParagraph);

  console.log('this is working');
  // $('#readmore2').click(toggleParagraph);
  // $('#readless2').click(toggleParagraph);
  // $('.learnmore').click(toggleParagraph);
}
function toggleParagraph() {
  $('#prod-mgmt').slideToggle();
  // $('.subtitle2').slideToggle();
  // $('#learnmoretext').slideToggle();
  // .css('visibility','visible').is(':shown')
}

$(document).ready(setUp)
