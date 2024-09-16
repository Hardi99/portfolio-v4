import './Contact.scss'

function Contact() {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <form>
                <div>
                    <input type="text" placeholder="Your Name" required/>
                </div>
                <div>
                    <input type="email" placeholder="Your Email" required/>
                </div>
                <div>
                    <textarea placeholder="Your Message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </section> 
    )
}

export default Contact