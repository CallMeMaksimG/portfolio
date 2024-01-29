import './Project.scss';
import Slider from '../Swiper/Swiper';

const Project = () => {
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
                <h2 className="project__title">SneakerShop</h2>
                <p className="project__description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Praesentium cum corrupti accusamus similique eligendi
                    dolorum, dicta totam modi eum natus, tempora officiis.
                    Quaerat consequatur excepturi incidunt obcaecati, sed
                    delectus ullam?
                </p>
                <p className="project__technologies">
                    <h3 className="project__technologies-title">
                        Используемые технологии:
                    </h3>
                    <ul className="project__technologies-list">
                        <li className="project__technologies-list-item">
                            HTML
                        </li>
                        <li className="project__technologies-list-item">CSS</li>
                        <li className="project__technologies-list-item">
                            REACT
                        </li>
                        <li className="project__technologies-list-item">
                            TypeScript
                        </li>
                        <li className="project__technologies-list-item">
                            SCSS
                        </li>
                    </ul>
                </p>
            </div>
            <div className="project__images">
                <Slider slides={photo}></Slider>
            </div>
        </div>
    );
};

export default Project;
