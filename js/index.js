// opening dashboard
var bars= document.getElementById("bar");
bars.addEventListener("click",function(){
  document.getElementById("links").classList.add("on");
})
//  closing dashboard
  var close= document.getElementById("close");
  close.addEventListener("click",function(){
    document.getElementById("links").classList.remove("on");
  })
  // dark mode
  var dark = document.getElementById("dark");
  dark.addEventListener("click", function() {
    var sections = document.querySelectorAll("section");
    sections.forEach(function(section) {
      section.classList.toggle("dark");
      section.style.color = "white!important";
    });
  });
  document.querySelectorAll('nav .links li a').forEach(link => {
    link.addEventListener("click",function(){
      document.getElementById("links").classList.remove("on");
    })
  })