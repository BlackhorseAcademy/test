
let productbtn = document.querySelector ("#productbtn")
let product = document.querySelector ("#product")





productbtn.addEventListener ("click" , productscroll)


 function productscroll() {
  product.scrollIntoView({
    behavior: "smooth"
  })
    
}

window.addEventListener("DOMContentLoaded", function () {
  let sectionId = localStorage.getItem("scrollTo");
  if (sectionId) {
    let section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    localStorage.removeItem("scrollTo"); 
  }
});





window.addEventListener("load", function () {

let loaderShown = localStorage.getItem("loaderShown");

  if (!loaderShown) {

    setTimeout(function () {
      document.querySelector(".lod").classList.add("d-none");
      document.querySelector("body").classList.remove("loading");

      
      localStorage.setItem("loaderShown", "true");
    }, );
  } else {
  
    document.querySelector(".lod").classList.add("d-none");
    document.querySelector("body").classList.remove("loading");
  }
});
