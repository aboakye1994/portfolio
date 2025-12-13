import { 
    FaJava, 
    FaReact, 
    FaPython, 
    FaGithub, 
    FaDocker, 
    FaNodeJs,
    FaDatabase,
    FaServer
} from "react-icons/fa";
import { 
    SiJavascript, 
    SiMysql, 
    SiExpress,
    SiPostman,
    SiJenkins
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Skills = () => {
    const skillsArr = [
        { name: 'Java', icon: FaJava },
        { name: 'Python', icon: FaPython },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'SQL', icon: FaDatabase },
        { name: 'React', icon: FaReact },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Express', icon: SiExpress },
        { name: 'MySQL', icon: SiMysql },
        { name: 'Git', icon: FaGithub },
        { name: 'Docker', icon: FaDocker },
        { name: 'Jenkins', icon: SiJenkins },
        { name: 'REST APIs', icon: FaServer },
        { name: 'Postman', icon: SiPostman }
    ];

    return (
        <div id='skills' className='skills'>
            <h2 className='title'>Skills</h2>
            <div className='skill-holder'>
                {
                    skillsArr.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div key={index} className='skill-cards'>
                                <Icon className='skill-icon'/>
                                <p className='skill'>{skill.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills;
