/**
 * Created by keren.kochanovitch on 28/04/2018.
 */
import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <div>
                <h2>Experience</h2>
                <div className="job">
                    <h3>Full Stack Developer</h3>
                    <h3>Natural Intelligence	2014 - Current</h3>
                    <h3>Tel Aviv</h3>
                    <ul>
                        <li>Full stack development of large-scale web applications.</li>
                        <li>Test Driven Development, Micro services architecture.</li>
                        <li>Continuous Integration / Continuous Deployment.</li>
                        <li>Requirements analysis, design and implementation.</li>
                        <li>UI/UX oriented development, cross platform and pixel-perfect.</li>
                        <li>Working in scrum teams in an agile environment.</li>
                        <li>Project planning and management.</li>
                    </ul>
                </div>
                <div className="job">
                    <h3>Software Engineer</h3>
                    <h3>AT&T	2013 - 2014</h3>
                    <h3>Tel Aviv</h3>
                    <ul>
                        <li>User interface design and implementation.</li>
                        <li>Software integration and automation.</li>
                        <li>Project Management.</li>
                    </ul>
                </div>

                <div className="job">
                    <h3>UNIX System admin student</h3>
                    <h3>Intel	2011 - 2013</h3>
                    <h3>Haifa</h3>
                    <ul>
                        <li>End-to-end monitoring of Intel’s design centers worldwide.</li>
                        <li>User administration (setup and maintaining account).</li>
                        <li>Process automations, system performance and network monitoring.</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Experience;