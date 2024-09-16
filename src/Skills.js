import './Skills.scss'
import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiAngular } from "react-icons/si";
import { SiPhp } from "react-icons/si";

function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div class="skills-container">
                <div class="skill">
                    <SiReact className='big' />
                    <h3>React</h3>
                </div>
                <div class="skill">
                    <SiTypescript className='big' />
                    <h3>TypeScript</h3>
                </div>
                <div class="skill">
                    <SiAngular className='big' />
                    <h3>Angular</h3>
                </div>
            </div>
        </section>
    )
}

export default Skills