import "./components.css";
import { Github } from "react-bootstrap-icons";

const Footer = () => {
    return (
        <>
        <div className="clear"></div>
        <footer>
            <p>by Tom Rossner&copy; <a id="githubLink" href="https://github.com/TomRossner"><Github className="icon white"/></a></p>
        </footer>
        </>
    )
}

export default Footer;