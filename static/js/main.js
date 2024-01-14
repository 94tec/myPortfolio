const route = (event) =>{
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
}

const routes = {
    404: "/templates/404.html",
    "/": "/templates/index.html",
    "/services": "/templates/services.html",
    "/portfolio": "/templates/portfolio.html",
    "/projects": "/templates/projects.html",
    "/contact": "/templates/contact.html"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) =>data.text());
    document.getElementById('content-page').innerHTML = html;
};
window.onpopstate = handleLocation;
window.route = route;
handleLocation();



function loadContactForm() {
    const contactButton = document.getElementById('message-btn');
    const contactForm = document.getElementById('service-area');
    contactForm.style.visibility = "visible";   
};
function closeContactForm() {
    const contactButton = document.getElementById('hide');
    const contactForm = document.getElementById('service-area');
    contactForm.style.visibility = "hidden";   
};
 // Add active class to the current button (highlight it)
 var header = document.getElementById("nav-links");
 var btns = header.getElementsByClassName("btnLink");
 for (var i = 0; i < btns.length; i++) {
       btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
   if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
   }
   this.className += " active";
   });
 }
