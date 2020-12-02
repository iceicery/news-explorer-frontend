import author from '../../images/yellow_me.jpg';
import './About.css';

export default function About() {
    return (
        <section className="about">
            <img className="about__img" src={author} alt="author" />
            <div className="about__text-box">
                <h2 className="about__title">About the author</h2>
                <p className="about__text">In 2020, I was selected to join Practicum by Yandex Web Developer beta-testing program - a intensive 10-month course in web development that covers HTML, CSS, JavaScript, React, back-end infrastructure, and more.
                I learned a lot through working on projects with deadlines and am proud to see my ideas go alive in web programming.
             Since then, I have fallen in love in programming.</p>
                <p className="about__text">I live in Huntsville, AL. I am a Physicist/Statistician in my educational training, and I am an Engineer/Educator by nature.
             I love cooking, hiking, traveling, reading and watching Netflix.</p>
            </div>
        </section>
    )
}