import './About.scss'

function Projects() {
    return (
        <section id="projects" class="projects-section">
        <div class="container">
            <h2>Mes Projets</h2>
            <div class="project-grid">
                <div class="project-item">
                    <img src="https://via.placeholder.com/300" alt="Projet 1" />
                    <h3>Travel Agency</h3>
                    <p>Description du projet 1. Ce projet utilise HTML, CSS, et JavaScript pour créer une application
                        web interactive.</p>
                    <a href="https://stately-shortbread-dcf83a.netlify.app/" class="button">Voir le projet</a>
                </div>
                <div class="project-item">
                    <img src="https://via.placeholder.com/300" alt="Projet 2" />
                    <h3>France Geocoding</h3>
                    <p>Description du projet 2. Ce projet est une application responsive utilisant Flexbox et Grid.</p>
                    <a href="https://starlit-blini-5a9d0b.netlify.app/" class="button">Voir le projet</a>
                </div>
                <div class="project-item">
                    <img src="https://via.placeholder.com/300" alt="Projet 3" />
                    <h3>Pokedex Angular</h3>
                    <p>Description du projet 3. Ce projet est une page de portfolio simple et élégante.</p>
                    <a href="https://angular-pokedex-app-8c2a6.web.app/" class="button">Voir le projet</a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Projects