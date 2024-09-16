import './Header.scss'

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    
                </ul>
            </nav>
            <div class="header-content">
                <h1>Hardi Tabuna</h1>
                <h2>Dev Full Stack</h2>
            </div>
        </header>  
    )
}

export default Header