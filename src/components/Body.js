import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import Avatar from '../assets/headshot.jpg';

const Body = () => {
    return (
        <div id="body" className="body">
            <div className="body-container">
                <div className="body-profile">
                    <img className="body-img" alt="Angel Boakye headshot" src={Avatar} />

                    <div className="body-content">
                        <div className="body-headline">Angel Boakye</div>
                        <div className="body-text">Software Engineer</div>
                        <div className="body-subtext">Backend Development • Full-Stack • DevOps</div>
                    </div>

                    <div className="body-icons">
                        <a 
                            href="https://github.com/aboakye1994" 
                            target="_blank" 
                            rel="noreferrer" 
                            aria-label="GitHub Profile" 
                            className="icon-link"
                        >
                            <FaGithub />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/angel-boakye/" 
                            target="_blank" 
                            rel="noreferrer" 
                            aria-label="LinkedIn Profile" 
                            className="icon-link"
                        >
                            <FaLinkedin />
                        </a>
                    </div>

                    {/* Resume Download Button */}
                    <div className="body-resume">
                        <a 
                            href="/resume.pdf" 
                            download="Angel_Boakye_Resume.pdf"
                            className="resume-button"
                            aria-label="Download Resume"
                        >
                            <FaFileDownload style={{ marginRight: '0.5rem' }} />
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
