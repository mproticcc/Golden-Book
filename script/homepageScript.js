    const y = document.getElementById("line");
    const z = document.getElementById("order"); 
    const x = document.getElementById("navigationId");
    const m = document.getElementById("categoriesID");
    const k = document.getElementById("adminId");
    y.style.width = "100%";
    z.style.width= "100%";
    y.style.border = "none";
    
function hideShow() {
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.border = "none";
      
    } else {
      x.style.display = "block";
      z.style.width= "100%";
      y.style.width = "100%";
      y.style.borderLeft = "1px solid #f4e5d9";
    }
  }
  function hideShow1() {
    if (m.style.display === "block") {
      m.style.display = "none";
    } else {
      m.style.display = "block";
    }
  }
  function hideShow2() {
    if (k.style.display === "block") {
      k.style.display = "none";
    } else {
      k.style.display = "block";
    }
  }
  