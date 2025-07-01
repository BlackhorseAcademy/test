window.addEventListener("load", function () {

  let loaderShown = localStorage.getItem("loaderShown");
  
    if (!loaderShown) {
  
      setTimeout(function () {
        document.querySelector(".lod").classList.add("d-none");
        document.querySelector("body").classList.remove("loading");
  
        
        localStorage.setItem("loaderShown", "true");
      }, 2500);
    } else {
    
      document.querySelector(".lod").classList.add("d-none");
      document.querySelector("body").classList.remove("loading");
    }
  });
  


document.getElementById("backbtnfru").addEventListener("click", function () {
    
    localStorage.setItem("scrollTo", "fruits");
    
    window.location.href = "index.html";
  });
