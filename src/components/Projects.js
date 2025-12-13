import data from '../data/projects.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
    const settings = {
        dots: true,
        infinite: false,
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    infinite: false,
                    initialSlide: 0,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div id='projects' className='projects'>
            <div className="projects-heading">
                <h2>PROJECTS</h2>
            </div>
            <div className="projects-container">
                <Slider {...settings}>
                    {
                        data.map(({ name, description, link, liveLink, image, techStack }, key) => {
                            return (
                                <div key={key} className="project">
                                    <div className="content">
                                        <img 
                                            src={image || 'https://via.placeholder.com/150'} 
                                            alt={name} 
                                        />
                                        <h2 className="name">{name}</h2>
                                        {
                                            description.length > 150
                                            ? <p className='description-min'>{description}</p>
                                            : <p className='description'>{description}</p>
                                        }
                                        
                                        {/* Tech Stack Badges */}
                                        {techStack && techStack.length > 0 && (
                                            <div className="tech-stack">
                                                {techStack.map((tech, index) => (
                                                    <span key={index} className="tech-badge">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        
                                        {/* Project Links */}
                                        <div className="project-buttons">
                                            {link && (
                                                <a
                                                    className="project-button"
                                                    target="_blank"
                                                    href={link}
                                                    rel="noreferrer"
                                                >
                                                    GitHub
                                                </a>
                                            )}
                                            {liveLink && (
                                                <a
                                                    className="project-button project-button-live"
                                                    target="_blank"
                                                    href={liveLink}
                                                    rel="noreferrer"
                                                >
                                                    Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Projects;
