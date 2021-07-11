
/////// Navbar Shrink ///////
window.onscroll= function(){
    if(this.scrollY > 90){
        document.querySelector('.navbar').classList.add('navbar-shrink')
    }else{
        document.querySelector('.navbar').classList.remove('navbar-shrink')
    }
}
////// Navbar Collapse //////

$('.nav-link').on("click" , function(e){
    $('.navbar-collapse').collapse("hide");
    $('.nav-link').removeClass("active");
    $(e.target).addClass('active');
    
   
})

//////////////// Dshboard NavBar ///////////////////

$('#bar').on('click',function(){
  $(this).toggleClass('open');
  $('#page-content-wrapper, #sidebar-wrapper').toggleClass('toggled')
})
/////////////////////////////
/*
var myBtnScroll = document.querySelector('.topBtn');

window.onscroll = function(){
  if(window.pageYOffset > 60){
    myBtnScroll.style.display = "block";
  }else{
    myBtnScroll.style.display = "none";
  }
  
}

myBtnScroll.onclick = function(){
  window.scrollTo(0,0)
}
*/