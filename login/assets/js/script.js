let currentScrollY = 0;
let showScrollButton = false;

function onScroll() {
    currentScrollY = window.pageYOffset;
    showScrollButton = Boolean(currentScrollY > 1);

    showScrollButton ? scrollButton.classList.remove('scroll-to-top-wrapper--hide'): 
    scrollButton.classList.add('scroll-to-top-wrapper--hide');
}

window.onload = function() {
    main = document.getElementById('main');
    scrollButton = document.getElementById('scroll-to-top-wrapper');
    document.addEventListener('scroll', onScroll, false)
}

// modals

let modal = document.getElementById("loginModal1");
let btn = document.getElementById("loginModal1");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}