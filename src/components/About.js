import IMG from '../assets/headshot.jpg';
import { SiColorhunt } from 'react-icons/si';
import { FaUsers } from 'react-icons/fa';

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">
                <div className="about-desc">
                    <div>
                        <p style={{ marginBottom: '1.5rem' }}>
                            I'm a senior Computer Science student at Georgia State University, graduating May 2026. 
                            After nearly a decade in healthcare as a pharmacy technician at a Level I trauma center, 
                            I transitioned into software engineering driven by a passion for building impactful systems.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            I specialize in <strong>backend development, automation, and full-stack web applications</strong>, 
                            with hands-on experience in Java, Python, JavaScript, and SQL. During my technical internship 
                            at Citi, I built automation tools that eliminated hours of manual work and improved system 
                            reliability.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            I bring a unique combination of technical skills and experience working in high-stakes, 
                            reliability-critical environments. Currently seeking new grad software engineering roles 
                            where I can continue learning and building robust systems.
                        </p>
                        <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <FaUsers style={{ fontSize: '1.5rem' }} />
                                <span style={{ fontSize: '1.2rem' }}><strong>ColorStack</strong> Member</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <FaUsers style={{ fontSize: '1.5rem' }} />
                                <span style={{ fontSize: '1.2rem' }}><strong>NSBE</strong> Member</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={IMG} alt="Angel Boakye headshot" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
