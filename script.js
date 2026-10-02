```javascript
/* ============================================================
   SCRIPT - PERFIL WEB DE MELANY RODRIGUEZ
   UniEspinal · Técnico Profesional en Programación Web
   ============================================================ */


/* ------------------------------------------------------------
   1. TEXTOS EN ESPAÑOL
   ------------------------------------------------------------ */

const ES = {

  "nav.home":      "INICIO",
  "nav.about":     "SOBRE MÍ",
  "nav.skills":    "HABILIDADES",
  "nav.resume":    "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact":   "CONTACTO",

  "hero.role": "Técnico Profesional en Programación Web · Desarrollo Web",

  "about.title": "Sobre Mí",

  "about.text": "Soy Melany Rodriguez, estudiante del programa Técnico Profesional en Programación Web en UniEspinal. Me interesa la programación, el desarrollo web, las bases de datos y la tecnología. Durante mi formación he desarrollado diferentes proyectos académicos utilizando herramientas y lenguajes de programación.",

  "about.infoTitle": "Información",

  "about.labelLocation": "Ubicación",
  "about.valueLocation": "Espinal, Tolima, Colombia",

  "about.labelEmail": "Correo",

  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (básico - intermedio)",

  "about.labelStatus": "Disponibilidad",
  "about.valueStatus": "Disponible para prácticas y proyectos",

  "about.interestsTitle": "Intereses",

  "interest.1": "PROGRAMACIÓN",
  "interest.2": "DESARROLLO WEB",
  "interest.3": "BASES DE DATOS",
  "interest.4": "TECNOLOGÍA",


  "skills.title": "Habilidades",

  "skills.technical": "Habilidades técnicas",

  "skills.professional": "Habilidades profesionales",

  "skill.support": "Desarrollo Web",

  "skill.teamwork": "Trabajo en equipo",

  "skill.problem": "Resolución de problemas",

  "skill.english": "Inglés técnico",


  "resume.title": "Formación y experiencia",

  "resume.education": "Formación",

  "resume.experience": "Experiencia",


  "edu.1.title": "Técnico Profesional en Programación Web",

  "edu.1.text": "Actualmente curso el programa Técnico Profesional en Programación Web en UniEspinal. Durante mi formación he aprendido HTML, CSS, JavaScript, PHP, MySQL, programación orientada a objetos y desarrollo de aplicaciones web.",

  "edu.2.title": "Desarrollo de proyectos web",

  "edu.2.text": "He desarrollado diferentes proyectos académicos relacionados con páginas web, sistemas de información, bases de datos y programación, aplicando los conocimientos adquiridos durante mi formación.",


  "exp.1.title": "Proyectos académicos",

  "exp.1.text": "He trabajado en proyectos de programación y desarrollo web utilizando HTML, CSS, JavaScript, PHP y MySQL, creando aplicaciones para resolver diferentes necesidades.",

  "exp.2.title": "Aplicaciones y programación",

  "exp.2.text": "También he desarrollado aplicaciones utilizando programación orientada a objetos y Java, trabajando con interfaces gráficas, formularios, eventos, cálculos y validación de información.",


  "portfolio.title": "Proyectos",

  "project.1.title": "Sistema Web de Notas y Asistencias",

  "project.1.text": "Sistema web académico desarrollado con PHP, MySQL, HTML, CSS y JavaScript para gestionar notas, actividades, estudiantes y asistencias.",


  "project.2.title": "Figuras Geométricas",

  "project.2.text": "Aplicación desarrollada en PHP utilizando programación orientada a objetos para calcular áreas, perímetros y volúmenes de diferentes figuras geométricas.",


  "project.3.title": "Aplicaciones Java",

  "project.3.text": "Aplicaciones desarrolladas en Java utilizando Swing y Eclipse, trabajando con formularios, botones, eventos, cálculos y validación de datos.",


  "contact.title": "Contacto",

  "contact.intro": "Si deseas conocer más sobre mis proyectos o mi formación como Técnico Profesional en Programación Web, puedes contactarme por medio de mi correo electrónico.",

  "contact.emailLabel": "Correo",

  "contact.linkedinValue": "Perfil profesional",


  "footer.note": "MELANY RODRIGUEZ · Técnico Profesional en Programación Web · UniEspinal"

};


/* ------------------------------------------------------------
   2. TEXTOS EN INGLÉS
   ------------------------------------------------------------ */

const EN = {

  "nav.home":      "HOME",
  "nav.about":     "ABOUT ME",
  "nav.skills":    "SKILLS",
  "nav.resume":    "EDUCATION",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Professional Technician in Web Programming · Web Development",

  "about.title": "About Me",

  "about.text": "I am Melany Rodriguez, a student of the Professional Technician in Web Programming program at UniEspinal. I am interested in programming, web development, databases and technology. During my studies, I have developed different academic projects using programming languages and tools.",

  "about.infoTitle": "Information",

  "about.labelLocation": "Location",
  "about.valueLocation": "Espinal, Tolima, Colombia",

  "about.labelEmail": "Email",

  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (basic - intermediate)",

  "about.labelStatus": "Availability",
  "about.valueStatus": "Available for internships and projects",

  "about.interestsTitle": "Interests",

  "interest.1": "PROGRAMMING",
  "interest.2": "WEB DEVELOPMENT",
  "interest.3": "DATABASES",
  "interest.4": "TECHNOLOGY",


  "skills.title": "Skills",

  "skills.technical": "Technical Skills",

  "skills.professional": "Professional Skills",

  "skill.support": "Web Development",

  "skill.teamwork": "Teamwork",

  "skill.problem": "Problem Solving",

  "skill.english": "Technical English",


  "resume.title": "Education and Experience",

  "resume.education": "Education",

  "resume.experience": "Experience",


  "edu.1.title": "Professional Technician in Web Programming",

  "edu.1.text": "I am currently studying the Professional Technician in Web Programming program at UniEspinal. During my studies, I have learned HTML, CSS, JavaScript, PHP, MySQL, object-oriented programming and web application development.",

  "edu.2.title": "Web Development Projects",

  "edu.2.text": "I have developed different academic projects related to websites, information systems, databases and programming, applying the knowledge acquired during my studies.",


  "exp.1.title": "Academic Projects",

  "exp.1.text": "I have worked on programming and web development projects using HTML, CSS, JavaScript, PHP and MySQL, creating applications to solve different needs.",

  "exp.2.title": "Applications and Programming",

  "exp.2.text": "I have also developed applications using object-oriented programming and Java, working with graphical interfaces, forms, events, calculations and data validation.",


  "portfolio.title": "Projects",

  "project.1.title": "Grades and Attendance Web System",

  "project.1.text": "Academic web system developed with PHP, MySQL, HTML, CSS and JavaScript to manage grades, activities, students and attendance.",


  "project.2.title": "Geometric Figures",

  "project.2.text": "Application developed in PHP using object-oriented programming to calculate areas, perimeters and volumes of different geometric figures.",


  "project.3.title": "Java Applications",

  "project.3.text": "Applications developed in Java using Swing and Eclipse, working with forms, buttons, events, calculations and data validation.",


  "contact.title": "Contact",

  "contact.intro": "If you would like to know more about my projects or my training as a Professional Technician in Web Programming, you can contact me by email.",

  "contact.emailLabel": "Email",

  "contact.linkedinValue": "Professional profile",


  "footer.note": "MELANY RODRIGUEZ · Professional Technician in Web Programming · UniEspinal"

};


/* ============================================================
   3. CAMBIO DE IDIOMA
   ============================================================ */

const DICCIONARIOS = {
  es: ES,
  en: EN
};

let idiomaActual = "es";


function aplicarIdioma(idioma) {

  const textos = DICCIONARIOS[idioma];

  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {

    const clave = elemento.getAttribute("data-i18n");

    if (textos[clave] !== undefined) {

      elemento.textContent = textos[clave];

    } else {

      console.warn("Falta la traducción:", clave);

    }

  });

  document.documentElement.lang = idioma;

  const boton = document.getElementById("btn-idioma");

  if (boton) {

    const otro = idioma === "es" ? "en" : "es";

    boton.innerHTML =
      '<span class="idioma-activo">' + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase() + '</span>';

    boton.setAttribute(
      "aria-label",
      idioma === "es"
        ? "Switch to English"
        : "Cambiar a español"
    );

  }

  idiomaActual = idioma;

}


/* ============================================================
   4. MENÚ RESPONSIVO
   ============================================================ */

let menuVisible = false;


function mostrarOcultarMenu() {

  const nav = document.getElementById("nav");

  menuVisible = !menuVisible;

  nav.className = menuVisible
    ? "responsive"
    : "";

}


function cerrarMenu() {

  document.getElementById("nav").className = "";

  menuVisible = false;

}


/* ============================================================
   5. BARRAS DE HABILIDADES
   ============================================================ */

function animarHabilidades() {

  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {

    const porcentaje =
      barra.getAttribute("data-percent") || "0";

    barra.style.width =
      porcentaje + "%";

    const etiqueta =
      barra.querySelector("span");

    if (etiqueta) {

      etiqueta.textContent =
        porcentaje + "%";

    }

  };


  if (!("IntersectionObserver" in window)) {

    barras.forEach(mostrar);

    return;

  }


  const observador =
    new IntersectionObserver(
      (entradas, obs) => {

        entradas.forEach(entrada => {

          if (entrada.isIntersecting) {

            mostrar(entrada.target);

            obs.unobserve(entrada.target);

          }

        });

      },
      {
        threshold: 0.4
      }
    );


  barras.forEach(
    barra => observador.observe(barra)
  );

}


/* ============================================================
   6. INICIO
   ============================================================ */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    aplicarIdioma("es");

    animarHabilidades();

  }
);
```
