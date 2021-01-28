//run only if the page is a social story

var slideIndex = 1;
showDivs(slideIndex);

function restart() {
    window.location.href=window.location;
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {redir('https://bmcautismfriendly.github.io/socialstories/')}
  if (n < 1) {redir('https://bmcautismfriendly.github.io/socialstories/')}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function showPDF(name) {
    var x=language?language:"english"
    window.open("../pdfs/"+x+"/"+name+".pdf","_blank");
}
