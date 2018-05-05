import React from 'react';

import Intro from './Intro';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Interests from './Interests';

const Home = () => (
        <div>
            <Intro/>
            <Skills/>
            <Experience/>
            <Education/>
            <Interests/>
        </div>
    );

export default Home;