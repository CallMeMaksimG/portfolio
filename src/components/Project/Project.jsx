import './Project.scss';
import Slider from '../Swiper/Swiper';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    console.log(project)
    const photo = [
        './../img/projects/lendings/RumTibet.jpg',
        './../img/projects/lendings/PantoFurniture.jpg',
        './../img/projects/lendings/InkHouse.jpg',
        './../img/projects/lendings/LeaseCars.jpg',
        './../img/projects/lendings/LoftHouse.jpg',
    ];
    return (
        <div className="project">
            <div className="project__info">
                {project.title.isLink ? (
                    <Link>
                        <h2 className="project__title">
                            {project.title.title}
                        </h2>
                    </Link>
                ) : (
                    <h2 className="project__title">{project.title.title}</h2>
                )}

                <p className="project__description">{project.description}</p>
                <div className="project__technologies">
                    <h3 className="project__technologies-title">
                        Используемые технологии:
                    </h3>
                    <ul className="project__technologies-list">
                        {project.technologies.map((tech) => (
                            <li className="project__technologies-list-item">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="project__images">
                <Slider slides={project.img}></Slider>
            </div>
        </div>
    );
};

export default Project;
