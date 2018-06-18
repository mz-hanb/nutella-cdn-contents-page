// post message
function nutella_resizeIframe() {
  if (parent.postMessage) {
      var body = $("body,html");
      body.height('auto');
      var height = $("body").outerHeight();

      console.log( 'fn:nutella_resizeIframe> '+ height);

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


// $(document).ready(function () {
//   nutella_resizeIframe();
// });

$(window).on('load', nutella_resizeIframe);

var nutellaTO;
$(window).on('resize', function () {
  clearTimeout(nutellaTO);
  nutellaTO = setTimeout(nutella_resizeIframe, 500);
});

