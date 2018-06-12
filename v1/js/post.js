// post message
function nutella_resizeIframe() {
  if (parent.postMessage) {
      var body = $("body,html");
      body.height('auto');
      var height = $("body").outerHeight();
      parent.postMessage({
          css:{
              height: height
          }
      }, '*');
  }
}
function nutella_scrollTop(scrolltop){
  if (parent.postMessage) {
      parent.postMessage({
          scrolltop:scrolltop
      }, '*');
  }
}


$(document).ready(function () {
  // nutella_resizeIframe();
});
// $(window).on('load', nutella_resizeIframe);

var nutellaTO;
// $(window).on('resize', function () {
//   clearTimeout(nutellaTO);
//   nutellaTO = setTimeout(nutella_resizeIframe, 500);
// });

//back to top
$(".backto_top").on('click',function(){
  console.log( 'click scrollTop> 0');
nutella_scrollTop(0)
});