/* ============================================================
   WEB PROFILE TEMPLATE - SCRIPT
   UniEspinal · Técnico Profesional en Programación Web
   ============================================================ */


/* ------------------------------------------------------------
   1. SPANISH TEXTS
   ------------------------------------------------------------ */

const ES = {
  "nav.home":      "INICIO",
  "nav.about":     "SOBRE MÍ",
  "nav.skills":    "HABILIDADES",
  "nav.resume":    "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact":   "CONTACTO",

  "hero.role": "Desarrolladora Web · Programación",

  "about.title":          "Sobre Mí",
  "about.text":           "Soy estudiante de Técnico Profesional en Programación Web, actualmente en cuarto semestre en la Institución Universitaria de El Espinal - UniEspinal. Me interesa el desarrollo web, la programación, las bases de datos y la creación de soluciones tecnológicas.",
  "about.infoTitle":      "Información",
  "about.labelLocation":  "Ubicación",
  "about.valueLocation":  "Espinal, Tolima, Colombia",
  "about.labelEmail":     "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "Abierta a oportunidades académicas y profesionales",
  "about.interestsTitle": "Intereses",

  "interest.1": "PROGRAMACIÓN",
  "interest.2": "DESARROLLO WEB",
  "interest.3": "BASES DE DATOS",
  "interest.4": "TECNOLOGÍA",

  "skills.title":        "Habilidades",
  "skills.technical":    "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.support":       "Soporte al usuario",
  "skill.teamwork":      "Trabajo en equipo",
  "skill.problem":       "Resolución de problemas",
  "skill.english":       "Inglés técnico",

  "resume.title":      "Formación y experiencia",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.text":  "Formación en desarrollo web, programación, bases de datos, programación orientada a objetos y creación de aplicaciones.",

  "edu.2.title": "Formación en programación y tecnología",
  "edu.2.text":  "Aprendizaje y práctica en HTML, CSS, JavaScript, PHP, MySQL, Java, Swing, Git, bases de datos y redes.",

  "exp.1.title": "Sistema Web de Notas y Asistencias",
  "exp.1.text":  "Desarrollo de una plataforma web para gestionar notas y asistencias académicas, utilizando PHP, MySQL, HTML, CSS y JavaScript.",

  "exp.2.title": "Figuras Geométricas",
  "exp.2.text":  "Desarrollo de un proyecto para calcular áreas, perímetros y volúmenes aplicando herencia, polimorfismo y encapsulamiento.",

  "portfolio.title": "Proyectos",

  "project.1.title": "Sistema Web de Notas y Asistencias",
  "project.1.text":  "PHP · MySQL · HTML · CSS · JavaScript",

  "project.2.title": "Figuras Geométricas",
  "project.2.text":  "PHP · POO · Herencia · Polimorfismo · Encapsulamiento",

  "project.3.title": "Aplicaciones Java",
  "project.3.text":  "Java · Swing · Eclipse · GUI",

  "contact.title":         "Contacto",
  "contact.intro":         "Si deseas conocer más sobre mis proyectos o tienes alguna oportunidad académica o profesional, puedes escribirme.",
  "contact.emailLabel":    "Correo",
  "contact.linkedinValue": "Perfil profesional",

  "footer.note": "Melany Rodriguez · Técnico Profesional en Programación Web · UniEspinal"
};


/* ------------------------------------------------------------
   2. ENGLISH TEXTS
   ------------------------------------------------------------ */

const EN = {
  "nav.home":      "HOME",
  "nav.about":     "ABOUT",
  "nav.skills":    "SKILLS",
  "nav.resume":    "EDUCATION",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Web Developer · Programming",

  "about.title":          "About Me",
  "about.text":           "I am a fourth-semester Professional Technician in Web Programming student at Institución Universitaria de El Espinal - UniEspinal. I am interested in web development, programming, databases, and building technology-based solutions.",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "Espinal, Tolima, Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Open to academic and professional opportunities",
  "about.interestsTitle": "Interests",

  "interest.1": "PROGRAMMING",
  "interest.2": "WEB DEVELOPMENT",
  "interest.3": "DATABASES",
  "interest.4": "TECHNOLOGY",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support":       "User support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text":  "Training in web development, programming, databases, object-oriented programming, and application development.",

  "edu.2.title": "Programming and Technology Training",
  "edu.2.text":  "Academic practice with HTML, CSS, JavaScript, PHP, MySQL, Java, Swing, Git, databases, and networking.",

  "exp.1.title": "Grades and Attendance Web System",
  "exp.1.text":  "Developed a web platform for managing academic grades and attendance using PHP, MySQL, HTML, CSS, and JavaScript.",

  "exp.2.title": "Geometric Figures",
  "exp.2.text":  "Developed a project to calculate areas, perimeters, and volumes using inheritance, polymorphism, and encapsulation.",

  "portfolio.title": "Projects",

  "project.1.title": "Grades and Attendance Web System",
  "project.1.text":  "PHP · MySQL · HTML · CSS · JavaScript",

  "project.2.title": "Geometric Figures",
  "project.2.text":  "PHP · OOP · Inheritance · Polymorphism · Encapsulation",

  "project.3.title": "Java Applications",
  "project.3.text":  "Java · Swing · Eclipse · GUI",

  "contact.title":         "Contact",
  "contact.intro":         "If you would like to learn more about my projects or discuss an academic or professional opportunity, feel free to contact me.",
  "contact.emailLabel":    "Email",
  "contact.linkedinValue": "Professional profile",

  "footer.note": "Melany Rodriguez · Professional Technician in Web Programming · UniEspinal"
};


/* ============================================================
   3. LANGUAGE SWITCHER
   ============================================================ */

const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {

  const textos = DICCIONARIOS[idioma];

  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {

    const clave = elemento.getAttribute("data-i18n");

    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    } else {
      console.warn("Missing translation key:", clave);
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


function cambiarIdioma() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}


/* ============================================================
   4. RESPONSIVE MENU
   ============================================================ */

let menuVisible = false;

function mostrarOcultarMenu() {

  const nav = document.getElementById("nav");

  menuVisible = !menuVisible;

  nav.className = menuVisible ? "responsive" : "";
}


function cerrarMenu() {

  document.getElementById("nav").className = "";

  menuVisible = false;
}


/* ============================================================
   5. SKILL BARS
   ============================================================ */

function animarHabilidades() {

  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {

    const porcentaje =
      barra.getAttribute("data-percent") || "0";

    barra.style.width = porcentaje + "%";

    const etiqueta =
      barra.querySelector("span");

    if (etiqueta) {
      etiqueta.textContent = porcentaje + "%";
    }
  };


  if (!("IntersectionObserver" in window)) {

    barras.forEach(mostrar);

    return;
  }


  const observador = new IntersectionObserver(
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


  barras.forEach(barra => {
    observador.observe(barra);
  });
}


/* ============================================================
   6. START
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  aplicarIdioma("es");

  animarHabilidades();

});
