//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const indicator= document.querySelector('nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el){
  items.forEach(item =>{
    item.classList.remove('is-active');
    item.removeAttribute('style');
  })

  indicator.style.width = `${el.offseWidth}px`;
  indicator.style.left =  `${el.offseLeft}px`;
  indicator.style.backgroundColor= el.getAttribute ('active-color');

  el.classList.add ('is-active');
  el.style.color = el.getAttribute('active-color');
}

items.forEach((item,index)=>{
  item.addEventListener('click', (e)=> {handleIndicator(e.target)});
  item.classList.contains('is-active')&& handleIndicator(item);
})



function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);