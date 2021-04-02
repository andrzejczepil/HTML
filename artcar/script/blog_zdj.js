var slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  var i1;
  var slides1 = document.getElementsByClassName("mySlides1");
  var dotes1 = document.getElementsByClassName("dot1");
  if (n > slides1.length) {slideIndex1 = 1} 
  if (n < 1) {slideIndex1 = slides1.length}
  for (i1 = 0; i1 < slides1.length; i1++) {
      slides1[i1].style.display = "none"; 
  }
  for (i1 = 0; i1 < dotes1.length; i1++) {
      dotes1[i1].className = dotes1[i1].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block"; 
  dotes1[slideIndex1-1].className += " active";
}

var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(m) {
  showSlides2(slideIndex2 += m);
}

function currentSlide2(m) {
  showSlides2(slideIndex2 = m);
}

function showSlides2(m) {
  var i2;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dotes2 = document.getElementsByClassName("dot2");
  if (m > slides2.length) {slideIndex2 = 1} 
  if (m < 1) {slideIndex2 = slides2.length}
  for (i2 = 0; i2 < slides2.length; i2++) {
      slides2[i2].style.display = "none"; 
  }
  for (i2 = 0; i2 < dotes2.length; i2++) {
      dotes2[i2].className = dotes2[i2].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block"; 
  dotes2[slideIndex2-1].className += " active";
}
var slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(p) {
  showSlides4(slideIndex4 += p);
}

function currentSlide4(p) {
  showSlides4(slideIndex4 = p);
}

function showSlides4(p) {
  var i4;
  var slides4 = document.getElementsByClassName("mySlides4");
  var dotes4 = document.getElementsByClassName("dot4");
  if (p > slides4.length) {slideIndex4 = 1} 
  if (p < 1) {slideIndex4 = slides4.length}
  for (i4 = 0; i4 < slides4.length; i4++) {
      slides4[i4].style.display = "none"; 
  }
  for (i4 = 0; i4 < dotes4.length; i4++) {
      dotes4[i4].className = dotes4[i4].className.replace(" active", "");
  }
  slides4[slideIndex4-1].style.display = "block"; 
  dotes4[slideIndex4-1].className += " active";
}
var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(o) {
  showSlides3(slideIndex3 += o);
}

function currentSlide3(o) {
  showSlides3(slideIndex3 = o);
}

function showSlides3(o) {
  var i3;
  var slides3 = document.getElementsByClassName("mySlides3");
  var dotes3 = document.getElementsByClassName("dot3");
  if (o > slides3.length) {slideIndex3 = 1} 
  if (o < 1) {slideIndex3 = slides3.length}
  for (i3 = 0; i3 < slides3.length; i3++) {
      slides3[i3].style.display = "none"; 
  }
  for (i3 = 0; i3 < dotes3.length; i3++) {
      dotes3[i3].className = dotes3[i3].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block"; 
  dotes3[slideIndex3-1].className += " active";
}
var slideIndex5 = 1;
showSlides5(slideIndex5);

function plusSlides5(q) {
  showSlides5(slideIndex5 += q);
}

function currentSlide5(q) {
  showSlides5(slideIndex5 = q);
}

function showSlides5(q) {
  var i5;
  var slides5 = document.getElementsByClassName("mySlides5");
  var dotes5 = document.getElementsByClassName("dot5");
  if (q > slides5.length) {slideIndex5 = 1} 
  if (q < 1) {slideIndex5 = slides5.length}
  for (i5 = 0; i5 < slides5.length; i5++) {
      slides5[i5].style.display = "none"; 
  }
  for (i5 = 0; i5 < dotes5.length; i5++) {
      dotes5[i5].className = dotes5[i5].className.replace(" active", "");
  }
  slides5[slideIndex5-1].style.display = "block"; 
  dotes5[slideIndex5-1].className += " active";
}