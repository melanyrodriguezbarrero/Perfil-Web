const ES = {

    "nav.home": "INICIO",
    "nav.about": "SOBRE MÍ",
    "nav.skills": "HABILIDADES",
    "nav.resume": "FORMACIÓN",
    "nav.portfolio": "PORTAFOLIO",
    "nav.contact": "CONTACTO",

    "hero.role": "Técnico Profesional en Programación Web · Desarrollo Web",

    "about.title": "Sobre Mí",

    "about.text": "Soy estudiante de Técnico Profesional en Programación Web en UniEspinal y actualmente curso cuarto semestre. Me interesa el desarrollo web, las bases de datos y la creación de soluciones tecnológicas mediante proyectos académicos.",

    "about.infoTitle": "Información",

    "about.labelLocation": "Ubicación",

    "about.valueLocation": "Espinal, Tolima, Colombia",

    "about.labelEmail": "Email",

    "about.labelLanguages": "Idiomas",

    "about.valueLanguages": "Español (nativo) · Inglés (en formación)",

    "about.labelStatus": "Disponibilidad",

    "about.valueStatus": "Disponible para prácticas",

    "about.interestsTitle": "Intereses",

    "interest.1": "PROGRAMACIÓN",
    "interest.2": "DESARROLLO WEB",
    "interest.3": "BASES DE DATOS",
    "interest.4": "TECNOLOGÍA",

    "skills.title": "Habilidades",

    "skills.technical": "Habilidades técnicas",

    "skills.professional": "Habilidades profesionales",

    "skill.support": "Comunicación",
    "skill.teamwork": "Trabajo en equipo",
    "skill.problem": "Resolución de problemas",
    "skill.english": "Aprendizaje continuo",

    "resume.title": "Formación y proyectos",

    "resume.education": "Formación académica",

    "resume.experience": "Proyectos académicos",

    "edu.1.title": "Técnico Profesional en Programación Web",

    "edu.1.text": "Formación en desarrollo web, programación, bases de datos, programación orientada a objetos y herramientas de desarrollo. Actualmente curso cuarto semestre en UniEspinal.",

    "edu.2.title": "Formación complementaria en desarrollo y tecnología",

    "edu.2.text": "Práctica académica en Java Swing, PHP, MySQL, Git/GitHub y fundamentos de redes con Cisco Packet Tracer.",

    "exp.1.title": "Desarrollo de proyectos académicos",

    "exp.1.text": "Desarrollé aplicaciones web y de escritorio usando PHP, MySQL, HTML, CSS, JavaScript y Java Swing, aplicando validaciones, estructuras de programación y orientación a objetos.",

    "exp.2.title": "Prácticas de bases de datos y redes",

    "exp.2.text": "Diseñé y probé bases de datos en MySQL y realicé prácticas de direccionamiento, subnetting y enrutamiento estático en Cisco Packet Tracer.",

    "portfolio.title": "Portafolio",

    "project.1.title": "Sistema Web de Notas y Asistencias",

    "project.1.text": "PHP · MySQL · HTML · CSS · JavaScript · XP",

    "project.2.title": "Figuras Geométricas",

    "project.2.text": "PHP · POO · Herencia · Polimorfismo · Encapsulamiento",

    "project.3.title": "Aplicaciones Java Swing",

    "project.3.text": "Java · Swing · Eclipse · Interfaces gráficas · Validaciones",

    "contact.title": "Contacto",

    "contact.intro": "Si quieres conocer más sobre mis proyectos académicos o mi formación en programación web, puedes escribirme.",

    "contact.emailLabel": "Email",

    "contact.linkedinValue": "Perfil profesional",

    "footer.note": "Melany Rodriguez · Técnico Profesional en Programación Web · UniEspinal"
};


const EN = {

    "nav.home": "HOME",
    "nav.about": "ABOUT ME",
    "nav.skills": "SKILLS",
    "nav.resume": "EDUCATION",
    "nav.portfolio": "PORTFOLIO",
    "nav.contact": "CONTACT",

    "hero.role": "Web Programming Student · Web Development",

    "about.title": "About Me",

    "about.text": "I am a Web Programming student at UniEspinal, currently in my fourth semester. I am interested in web development, databases, and building technology solutions through academic projects.",

    "about.infoTitle": "Information",

    "about.labelLocation": "Location",

    "about.valueLocation": "Espinal, Tolima, Colombia",

    "about.labelEmail": "Email",

    "about.labelLanguages": "Languages",

    "about.valueLanguages": "Spanish (native) · English (in training)",

    "about.labelStatus": "Availability",

    "about.valueStatus": "Open to internships",

    "about.interestsTitle": "Interests",

    "interest.1": "PROGRAMMING",
    "interest.2": "WEB DEVELOPMENT",
    "interest.3": "DATABASES",
    "interest.4": "TECHNOLOGY",

    "skills.title": "Skills",

    "skills.technical": "Technical skills",

    "skills.professional": "Professional skills",

    "skill.support": "Communication",
    "skill.teamwork": "Teamwork",
    "skill.problem": "Problem solving",
    "skill.english": "Continuous learning",

    "resume.title": "Education and projects",

    "resume.education": "Academic education",

    "resume.experience": "Academic projects",

    "edu.1.title": "Professional Technician in Web Programming",

    "edu.1.text": "Training in web development, programming, databases, object-oriented programming, and development tools. Currently in my fourth semester at UniEspinal.",

    "edu.2.title": "Additional training in development and technology",

    "edu.2.text": "Academic practice with Java Swing, PHP, MySQL, Git/GitHub, and networking fundamentals using Cisco Packet Tracer.",

    "exp.1.title": "Academic project development",

    "exp.1.text": "Built web and desktop applications using PHP, MySQL, HTML, CSS, JavaScript, and Java Swing, applying validation, programming structures, and object-oriented programming.",

    "exp.2.title": "Database and networking practice",

    "exp.2.text": "Designed and tested MySQL databases and practiced addressing, subnetting, and static routing in Cisco Packet Tracer.",

    "portfolio.title": "Portfolio",

    "project.1.title": "Grades and Attendance Web System",

    "project.1.text": "PHP · MySQL · HTML · CSS · JavaScript · XP",

    "project.2.title": "Geometric Shapes",

    "project.2.text": "PHP · OOP · Inheritance · Polymorphism · Encapsulation",

    "project.3.title": "Java Swing Applications",

    "project.3.text": "Java · Swing · Eclipse · GUI · Validation",

    "contact.title": "Contact",

    "contact.intro": "If you would like to learn more about my academic projects or my training in web programming, feel free to contact me.",

    "contact.emailLabel": "Email",

    "contact.linkedinValue": "Professional profile",

    "footer.note": "Melany Rodriguez · Professional Technician in Web Programming · UniEspinal"
};


const DICCIONARIOS = {
    es: ES,
    en: EN
};


let idiomaActual = "es";


function aplicarIdioma(idioma) {

    const diccionario = DICCIONARIOS[idioma];

    document.documentElement.lang = idioma;

    const elementos = document.querySelectorAll("[data-i18n]");

    elementos.forEach(function(elemento) {

        const clave = elemento.getAttribute("data-i18n");

        if (diccionario[clave]) {
            elemento.textContent = diccionario[clave];
        }

    });


    const botonIdioma = document.getElementById("btn-idioma");

    if (botonIdioma) {

        if (idioma === "es") {
            botonIdioma.textContent = "EN";
        } else {
            botonIdioma.textContent = "ES";
        }

    }

}


function cambiarIdioma() {

    if (idiomaActual === "es") {
        idiomaActual = "en";
    } else {
        idiomaActual = "es";
    }

    aplicarIdioma(idiomaActual);

}


function abrirMenu() {

    const nav = document.getElementById("nav");

    if (nav) {
        nav.classList.toggle("responsive");
    }

}


function cerrarMenu() {

    const nav = document.getElementById("nav");

    if (nav) {
        nav.classList.remove("responsive");
    }

}


function animarHabilidades() {

    const habilidades = document.querySelectorAll(".progreso");

    habilidades.forEach(function(habilidad) {

        const porcentaje = habilidad.getAttribute("data-percent");

        habilidad.style.width = porcentaje + "%";

    });

}


document.addEventListener("DOMContentLoaded", function() {

    aplicarIdioma("es");

    const botonIdioma = document.getElementById("btn-idioma");

    if (botonIdioma) {

        botonIdioma.addEventListener("click", cambiarIdioma);

    }


    const botonMenu = document.querySelector(".nav-responsive");

    if (botonMenu) {

        botonMenu.addEventListener("click", abrirMenu);

    }


    const enlaces = document.querySelectorAll("#nav a");

    enlaces.forEach(function(enlace) {

        enlace.addEventListener("click", cerrarMenu);

    });


    animarHabilidades();

});
