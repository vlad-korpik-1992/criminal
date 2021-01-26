document.addEventListener("DOMContentLoaded", function(){
  $('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
});
$(document).ready(function() {
  let a = 0;
  let b = 0;
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".number-bullets"); 
                                    
    if(windowWidth < 767){
    	if (a==0) {
      		let h = '<div class="row bg-name-user" id="blog-del"><img class="romb-uroven" src="img/romb-uroven.svg" alt=""><div class="col-sm-12 col-uroven"><div class="row"><div class="col-6 col-sm-6 col-md-6 col-lg-3"><input type="radio" id="offlain" name="offlain" value="offlain"><label class="offlain" for="offlain">оффлайн</label></div><div class="col-6 col-sm-6 col-md-6 col-lg-3"><p class="data">был 10.10.2020</p></div><div class="col-12 col-sm-12 col-md-12 col-lg-3"></div></div><div class="row"><div class="col-md-12"><p class="warning">Предупреждения: 0</p><p class="uroven">5 уровень</p><p class="next-uroven">6 уровень</p><img class="uroven-5" src="img/5-uroven.svg" alt=""></div></div></div></div>';
			document.getElementById('inner-block-mobile').insertAdjacentHTML('beforeend', h);
			a = 1;
			b = 1;
		}
    }
    	else{
    		if (b==1) {
      			document.getElementById('blog-del').remove();
      			a = 0;
      			b = 0;
      		}
    	}
  }

  checkWidth(); 

  $(window).resize(function(){
    checkWidth();
  });
});
});