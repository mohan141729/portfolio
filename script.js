/*let homeIdEl = document.getElementById('homeId');
let aboutIdEl = document.getElementById('aboutId');
let servicesIdEl = document.getElementById('servicesId');
let skillsIdEl = document.getElementById('skillsId');
let projectsIdEl = document.getElementById('projectsId');
let contactIdEl = document.getElementById('contactId');
homeIdEl.onclick = function() {
    homeIdEl.classList.add('active');
    aboutIdEl.classList.remove('active');
    servicesIdEl.classList.remove('active');
    skillsIdEl.classList.remove('active');
    projectsIdEl.classList.remove('active');
    contactIdEl.classList.remove('active');
};
aboutIdEl.onclick = function() {
    homeIdEl.classList.remove('active');
    aboutIdEl.classList.add('active');
    servicesIdEl.classList.remove('active');
    skillsIdEl.classList.remove('active');
    projectsIdEl.classList.remove('active');
    contactIdEl.classList.remove('active');
};
servicesIdEl.onclick = function() {
    homeIdEl.classList.remove('active');
    aboutIdEl.classList.remove('active');
    servicesIdEl.classList.add('active');
    skillsIdEl.classList.remove('active');
    projectsIdEl.classList.remove('active');
    contactIdEl.classList.remove('active');
};
skillsIdEl.onclick = function() {
    homeIdEl.classList.remove('active');
    aboutIdEl.classList.remove('active');
    servicesIdEl.classList.remove('active');
    skillsIdEl.classList.add('active');
    projectsIdEl.classList.remove('active');
    contactIdEl.classList.remove('active');
};
projectsIdEl.onclick = function() {
    homeIdEl.classList.remove('active');
    aboutIdEl.classList.remove('active');
    servicesIdEl.classList.remove('active');
    skillsIdEl.classList.remove('active');
    projectsIdEl.classList.add('active');
    contactIdEl.classList.remove('active');
};
contactIdEl.onclick = function() {
    homeIdEl.classList.remove('active');
    aboutIdEl.classList.remove('active');
    servicesIdEl.classList.remove('active');
    skillsIdEl.classList.remove('active');
    projectsIdEl.classList.remove('active');
    contactIdEl.classList.add('active');
};  */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar_items a');

window.onscoll =  () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAnimations('id');

        if ( top > offset && top < offset+height){
            navLinks.forEach(links => {
                  links.classList.remove('active');
                  document.querySelector('header nav a[href*='+id+']').classList.add('active');
            }) ;
        };

    });
}
/*let homeIdEl = document.getElementById('homeId');
let aboutIdEl = document.getElementById('aboutId');
let servicesIdEl = document.getElementById('servicesId');
let skillsIdEl = document.getElementById('skillsId');
let projectsIdEl = document.getElementById('projectsId');
let contactIdEl = document.getElementById('contactId');
homeIdEl.onclick = function() {
    homeIdEl.classList.add('active');
    aboutIdEl.classList.remove('active');
    servicesIdEl.classList.remove('active');
    skillsIdEl.classList.remove('active');
    projectsIdEl.classList.remove('active');
    contactIdEl.classList.remove('active');
};
aboutIdEl.onclick = function() {
    homeIdEl.classList.remove('active');
    aboutIdEl.classList.add('active');
    servicesIdEl.classList.remove('active');
    skillsIdEl.classList.remove('active');
    projectsIdEl.classList.remove('active');
    contactIdEl.classList.remove('active');
};
servicesIdEl.onclick = function() {
    homeIdEl.classList.remove('active');
    aboutIdEl.classList.remove('active');
    servicesIdEl.classList.add('active');
    skillsIdEl.classList.remove('active');
    projectsIdEl.classList.remove('active');
    contactIdEl.classList.remove('active');
};
skillsIdEl.onclick = function() {
    homeIdEl.classList.remove('active');
    aboutIdEl.classList.remove('active');
    servicesIdEl.classList.remove('active');
    skillsIdEl.classList.add('active');
    projectsIdEl.classList.remove('active');
    contactIdEl.classList.remove('active');
};
projectsIdEl.onclick = function() {
    homeIdEl.classList.remove('active');
    aboutIdEl.classList.remove('active');
    servicesIdEl.classList.remove('active');
    skillsIdEl.classList.remove('active');
    projectsIdEl.classList.add('active');
    contactIdEl.classList.remove('active');
};
contactIdEl.onclick = function() {
    homeIdEl.classList.remove('active');
    aboutIdEl.classList.remove('active');
    servicesIdEl.classList.remove('active');
    skillsIdEl.classList.remove('active');
    projectsIdEl.classList.remove('active');
    contactIdEl.classList.add('active');
};  */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar_items a');

window.onscoll =  () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAnimations('id');

        if ( top > offset && top < offset+height){
            navLinks.forEach(links => {
                  links.classList.remove('active');
                  document.querySelector('header nav a[href*='+id+']').classList.add('active');
            }) ;
        };

    });
}
