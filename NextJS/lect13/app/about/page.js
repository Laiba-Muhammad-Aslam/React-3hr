"use client"
import React from 'react'

const About = () => {
    return (
        <div>

            <div className='container'>

                <h1>This is about me</h1>
                <p>Hey I am a good Girl</p>

                <style jsx>{`
            .container{
                background-color: red;
                color: green;
                }
                `}
                </style>

                {/* <style jsx global>{`
            .container{
                background-color: red;
                color: green;
                }
                `}
                </style> */}
            </div>
            <div className="container">
                Hey I am good
            </div>
        </div>
    )
}

export default About