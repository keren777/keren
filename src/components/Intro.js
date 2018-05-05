/**
 * Created by keren.kochanovitch on 28/04/2018.
 */
import React from 'react';

const Intro = () => {
    return (
        <div className="intro-container">
            <header>
            <h1 className="App-title">Keren Kochanovitch</h1>
            <div className="contact">
                <p>Tel Aviv  |  052-5506642</p>
                <div>
                    <a href="https://www.linkedin.com/in/keren-kochanovitch-46289b26/" target="blank">Linkedin</a>
                </div>
                <div>
                    <a href="mailto:keren730@gmail.com?Subject=Career%opportunity">keren730@gmail.com</a>
                </div>
            </div>

            <p>An experienced full stack developer,</p>
            <p>skilled with all stages of the development cycle for dynamic web projects.</p>
            <p>A team player, highly passionate about web development.</p>
            <p>Now looking for my next challenge.</p>
        </header>
        </div>);

};

export default Intro;