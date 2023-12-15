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

const contactButton = document.getElementById('contact-btn');

const loadContactForm =  () => {
    console.log("clicked");
    const contactForm = document.querySelector('.contact-form');
    const content = document.getElementById('content');
    const card = document.getElementById('card');

    content.style.display = "none";
    card.style.display = "none"
    contactForm.classList.add("open-form");


    
};