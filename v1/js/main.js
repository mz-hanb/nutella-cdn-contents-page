
var app = new Vue({
  el: '#pentacle-app', 
  data: {
    greeting: 'Welcome! nutella & pentacle', 
    feeling: 'smile', 
  },
  created: function(){
    setTimeout(() => {
      nutella_resizeIframe();
    }, 1000); 
    
  },
  computed: {
    feelingImg: function(){
      return this.feeling === 'smile' ? 'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' : 'https://images.pexels.com/photos/568027/pexels-photo-568027.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }
  },  
  watch: {
    

  },  
  create: {

  },
  methods: {

  }
});


//back to top
// $(".backto_top").on('click',function(){
//   alert('');
//   nutella_scrollTop(0);
// });
