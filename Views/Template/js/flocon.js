function flocon() {
    var windowWidth = $(window).width();
  
    setInterval(function(){
      var randflocon = Math.ceil(Math.random() * 3);
      var rand = Math.floor(Math.random() * windowWidth);
      var flocon = '<div style="left: '+rand+'px" class="flocon anim'+randflocon+'"></div>';
  
      $('body').append(flocon);
      
      setTimeout(function(){
        $('.flocon:first').remove();
      }, 4900);
    }, 30);
  }
  
  // Appel de la fonction lorsque le DOM est prêt
  $(document).ready(function(){
    flocon();
  });
  