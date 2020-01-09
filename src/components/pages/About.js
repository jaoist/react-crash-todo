import React from 'react'

function About() {
    return (
        <React.Fragment> {/* Needed for JSX to insert container element without making a div */}
            <h1>About</h1>
            <p>This is the TodoList app v1.0. 
                It is part of the React JS Crash Course from Traversy Media on the YouTube.
            </p>
        </React.Fragment>
    )
}

export default About;
