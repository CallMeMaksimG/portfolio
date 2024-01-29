import { Link } from 'react-router-dom';
import './About.scss';

const About = () => {
    return (
        <div className="about">
            <h1 className="about__title">Максим Голованов</h1>
            <p className="about__subtitle">Frontend-разработчик</p>
            <div className="contacts">
                <Link
                    className="contacts__link"
                    to="https://t.me/maksimglvnv"
                    target={'_blank'}
                >
                    <img
                        className="contacts__img"
                        src="img/icons/telegram.svg"
                        alt="telegram"
                    />
                </Link>

                <Link to="mailto:maxgolovanov10@gmail.com">
                    <img
                        className="contacts__img"
                        src="img/icons/email.svg"
                        alt="email"
                    />
                </Link>

                <Link to="https://github.com/CallMeMaksimG" target={'_blank'}>
                    <img
                        className="contacts__img"
                        src="img/icons/github.svg"
                        alt="github"
                    />
                </Link>
            </div>
        </div>
    );
};

export default About;
