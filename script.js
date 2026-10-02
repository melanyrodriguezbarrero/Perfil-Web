<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Melany Rodriguez - Perfil Profesional</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- ================= HEADER ================= -->

    <header>
        <div class="contenedor-header">

            <div class="logo">
                <a href="#inicio">MELANY RODRIGUEZ</a>
            </div>

            <nav id="nav">
                <ul>
                    <li><a href="#inicio" data-i18n="nav.home">INICIO</a></li>
                    <li><a href="#sobremi" data-i18n="nav.about">SOBRE MÍ</a></li>
                    <li><a href="#skills" data-i18n="nav.skills">HABILIDADES</a></li>
                    <li><a href="#curriculum" data-i18n="nav.resume">FORMACIÓN</a></li>
                    <li><a href="#portfolio" data-i18n="nav.portfolio">PROYECTOS</a></li>
                    <li><a href="#contacto" data-i18n="nav.contact">CONTACTO</a></li>
                </ul>
            </nav>

            <button id="btn-idioma" onclick="cambiarIdioma()" aria-label="Switch to English">
                <span class="idioma-activo">ES</span>
                <span class="idioma-sep">/</span>
                <span class="idioma-inactivo">EN</span>
            </button>

            <div class="nav-responsive" onclick="mostrarOcultarMenu()">
                <i class="fa-solid fa-bars"></i>
            </div>

        </div>
    </header>


    <!-- ================= INICIO ================= -->

    <section id="inicio" class="inicio">

        <div class="contenido-banner">

            <div class="contenedor-img">
                <img src="images/profile.jpg" alt="Melany Rodriguez">
            </div>

            <h1>Melany Rodriguez</h1>

            <h2 data-i18n="hero.role">
                Desarrolladora Web
            </h2>

            <div class="redes">
                <a href="#" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </a>

                <a href="#" target="_blank">
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>
            </div>

        </div>

    </section>


    <!-- ================= SOBRE MÍ ================= -->

    <section id="sobremi" class="sobremi">

        <div class="contenido-seccion">

            <h2 data-i18n="about.title">Sobre Mí</h2>

            <p data-i18n="about.text">
                Soy estudiante de Técnico Profesional en Programación Web, actualmente en cuarto semestre en la Institución Universitaria de El Espinal - UniEspinal. Me interesa el desarrollo web, la programación, las bases de datos y la creación de soluciones tecnológicas.
            </p>

            <div class="fila">

                <!-- DATOS PERSONALES -->

                <div class="col">

                    <h3 data-i18n="about.infoTitle">Información</h3>

                    <ul>

                        <li>
                            <strong data-i18n="about.labelLocation">Ubicación</strong>
                            <span data-i18n="about.valueLocation">
                                Espinal, Tolima, Colombia
                            </span>
                        </li>

                        <li>
                            <strong data-i18n="about.labelEmail">Correo</strong>
                            <span>
                                mrodriguez99@itfip.edu.co
                            </span>
                        </li>

                        <li>
                            <strong>Programa</strong>
                            <span>
                                Técnico Profesional en Programación Web
                            </span>
                        </li>

                        <li>
                            <strong>Institución</strong>
                            <span>
                                Institución Universitaria de El Espinal - UniEspinal
                            </span>
                        </li>

                        <li>
                            <strong>Semestre</strong>
                            <span>
                                4.º semestre · En curso
                            </span>
                        </li>

                    </ul>

                </div>


                <!-- INTERESES -->

                <div class="col">

                    <h3 data-i18n="about.interestsTitle">
                        Intereses
                    </h3>

                    <div class="contenedor-intereses">

                        <div class="interes">
                            <i class="fa-solid fa-code"></i>
                            <span data-i18n="interest.1">PROGRAMACIÓN</span>
                        </div>

                        <div class="interes">
                            <i class="fa-solid fa-globe"></i>
                            <span data-i18n="interest.2">DESARROLLO WEB</span>
                        </div>

                        <div class="interes">
                            <i class="fa-solid fa-database"></i>
                            <span data-i18n="interest.3">BASES DE DATOS</span>
                        </div>

                        <div class="interes">
                            <i class="fa-solid fa-microchip"></i>
                            <span data-i18n="interest.4">TECNOLOGÍA</span>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>


    <!-- ================= HABILIDADES ================= -->

    <section class="skills" id="skills">

        <div class="contenido-seccion">

            <h2 data-i18n="skills.title">
                Habilidades
            </h2>

            <div class="fila">

                <!-- HABILIDADES TÉCNICAS -->

                <div class="col">

                    <h3 data-i18n="skills.technical">
                        Habilidades técnicas
                    </h3>

                    <div class="skill">

                        <span>HTML</span>

                        <div class="barra-skill">
                            <div class="progreso" data-percent="85">
                                <span>85%</span>
                            </div>
                        </div>

                    </div>


                    <div class="skill">

                        <span>CSS</span>

                        <div class="barra-skill">
                            <div class="progreso" data-percent="80">
                                <span>80%</span>
                            </div>
                        </div>

                    </div>


                    <div class="skill">

                        <span>JavaScript</span>

                        <div class="barra-skill">
                            <div class="progreso" data-percent="70">
                                <span>70%</span>
                            </div>
                        </div>

                    </div>


                    <div class="skill">

                        <span>PHP</span>

                        <div class="barra-skill">
                            <div class="progreso" data-percent="80">
                                <span>80%</span>
                            </div>
                        </div>

                    </div>


                    <div class="skill">

                        <span>MySQL</span>

                        <div class="barra-skill">
                            <div class="progreso" data-percent="75">
                                <span>75%</span>
                            </div>
                        </div>

                    </div>


                    <div class="skill">

                        <span>Java / Swing</span>

                        <div class="barra-skill">
                            <div class="progreso" data-percent="70">
                                <span>70%</span>
                            </div>
                        </div>

                    </div>

                </div>


                <!-- HABILIDADES PROFESIONALES -->

                <div class="col">

                    <h3 data-i18n="skills.professional">
                        Habilidades profesionales
                    </h3>

                    <div class="skill">

                        <span data-i18n="skill.support">
                            Soporte al usuario
                        </span>

                        <div class="barra-skill">
                            <div class="progreso" data-percent="80">
                                <span>80%</span>
                            </div>
                        </div>

                    </div>


                    <div class="skill">

                        <span data-i18n="skill.teamwork">
                            Trabajo en equipo
                        </span>

                        <div class="barra-skill">
                            <div class="progreso" data-percent="85">
                                <span>85%</span>
                            </div>
                        </div>

                    </div>


                    <div class="skill">

                        <span data-i18n="skill.problem">
                            Resolución de problemas
                        </span>

                        <div class="barra-skill">
                            <div class="progreso" data-percent="80">
                                <span>80%</span>
                            </div>
                        </div>

                    </div>


                    <div class="skill">

                        <span data-i18n="skill.english">
                            Inglés técnico
                        </span>

                        <div class="barra-skill">
                            <div class="progreso" data-percent="60">
                                <span>60%</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>


    <!-- ================= FORMACIÓN ================= -->

    <section id="curriculum" class="curriculum">

        <div class="contenido-seccion">

            <h2 data-i18n="resume.title">
                Formación y experiencia
            </h2>

            <div class="fila">

                <!-- FORMACIÓN -->

                <div class="col izquierda">

                    <h3 data-i18n="resume.education">
                        Formación
                    </h3>

                    <div class="item izq">

                        <h4 data-i18n="edu.1.title">
                            Técnico Profesional en Programación Web
                        </h4>

                        <span class="casa">
                            Institución Universitaria de El Espinal - UniEspinal
                        </span>

                        <span class="fecha">
                            4.º semestre · En curso
                        </span>

                        <p data-i18n="edu.1.text">
                            Formación en desarrollo web, programación, bases de datos, programación orientada a objetos y creación de aplicaciones utilizando diferentes tecnologías.
                        </p>

                        <div class="conectori">
                            <div class="circuloi"></div>
                        </div>

                    </div>


                    <div class="item izq">

                        <h4>
                            Formación en tecnologías de desarrollo
                        </h4>

                        <span class="casa">
                            Desarrollo académico
                        </span>

                        <span class="fecha">
                            Actualmente
                        </span>

                        <p>
                            Aprendizaje y práctica en HTML, CSS, JavaScript, PHP, MySQL, Java, Swing, Git, bases de datos y redes.
                        </p>

                        <div class="conectori">
                            <div class="circuloi"></div>
                        </div>

                    </div>

                </div>


                <!-- EXPERIENCIA / PROYECTOS -->

                <div class="col derecha">

                    <h3 data-i18n="resume.experience">
                        Experiencia
                    </h3>

                    <div class="item der">

                        <h4>
                            Sistema Web de Notas y Asistencias
                        </h4>

                        <span class="casa">
                            Proyecto académico
                        </span>

                        <span class="fecha">
                            PHP · MySQL · HTML · CSS · JavaScript
                        </span>

                        <p>
                            Desarrollo de una plataforma web para gestionar notas, asistencias y consultas académicas, utilizando una base de datos y diferentes módulos del sistema.
                        </p>

                        <div class="conectord">
                            <div class="circulod"></div>
                        </div>

                    </div>


                    <div class="item der">

                        <h4>
                            Desarrollo de aplicaciones y proyectos académicos
                        </h4>

                        <span class="casa">
                            Java · PHP · Bases de datos · Redes
                        </span>

                        <span class="fecha">
                            Formación académica
                        </span>

                        <p>
                            Creación de aplicaciones Java Swing, proyectos PHP orientados a objetos, bases de datos y prácticas de configuración y conectividad en Cisco Packet Tracer.
                        </p>

                        <div class="conectord">
                            <div class="circulod"></div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>


    <!-- ================= PROYECTOS ================= -->

    <section id="portfolio" class="portfolio">

        <div class="contenido-seccion">

            <h2 data-i18n="portfolio.title">
                Proyectos
            </h2>

            <div class="galeria">

                <div class="proyecto">

                    <img src="images/proyecto1.jpg" alt="Sistema Web de Notas y Asistencias">

                    <div class="overlay">

                        <h3>
                            Sistema Web de Notas y Asistencias
                        </h3>

                        <p>
                            PHP · MySQL · HTML · CSS · JavaScript
                        </p>

                    </div>

                </div>


                <div class="proyecto">

                    <img src="images/proyecto2.jpg" alt="Figuras Geométricas">

                    <div class="overlay">

                        <h3>
                            Figuras Geométricas
                        </h3>

                        <p>
                            PHP · POO · Herencia · Polimorfismo · Encapsulamiento
                        </p>

                    </div>

                </div>


                <div class="proyecto">

                    <img src="images/proyecto3.jpg" alt="Aplicaciones Java">

                    <div class="overlay">

                        <h3>
                            Aplicaciones Java
                        </h3>

                        <p>
                            Java · Swing · Eclipse · GUI
                        </p>

                    </div>

                </div>

            </div>

        </div>

    </section>


    <!-- ================= CONTACTO ================= -->

    <section id="contacto" class="contacto">

        <div class="contenido-seccion">

            <h2 data-i18n="contact.title">
                Contacto
            </h2>

            <p data-i18n="contact.intro">
                Si deseas conocer más sobre mis proyectos o tienes alguna oportunidad académica o profesional, puedes escribirme.
            </p>

            <div class="fila">

                <div class="col">

                    <h3 data-i18n="contact.emailLabel">
                        Correo
                    </h3>

                    <p>
                        <i class="fa-solid fa-envelope"></i>
                        mrodriguez99@itfip.edu.co
                    </p>

                </div>


                <div class="col">

                    <h3>
                        LinkedIn
                    </h3>

                    <p>
                        <a href="#" target="_blank">
                            Perfil profesional
                        </a>
                    </p>

                </div>

            </div>

        </div>

    </section>


    <!-- ================= FOOTER ================= -->

    <footer>

        <p data-i18n="footer.note">
            Melany Rodriguez · Técnico Profesional en Programación Web · UniEspinal
        </p>

        <div class="redes">

            <a href="#" target="_blank">
                <i class="fa-brands fa-github"></i>
            </a>

            <a href="#" target="_blank">
                <i class="fa-brands fa-linkedin-in"></i>
            </a>

        </div>

    </footer>


    <!-- ================= SCRIPT ================= -->

    <script src="script.js"></script>

</body>

</html>

