import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Aseem from './images/Aseem.png'
import './Team.css'

function Team() {

    const teamMembers = {
        'heads': [
            { name: 'Dhruv Kauts', linkedin: 'https://www.linkedin.com/in/aseemmangla/', github: 'https://github.com/manglaaseem' },
            { name: 'Jaskaran Singh', linkedin: 'https://www.linkedin.com/in/aseemmangla/', github: 'https://github.com/manglaaseem' },
            { name: 'Bhavesh Kumar', linkedin: 'https://www.linkedin.com/in/aseemmangla/', github: 'https://github.com/manglaaseem' },
            { name: 'Priyanshu Kaushal', linkedin: 'https://www.linkedin.com/in/aseemmangla/', github: 'https://github.com/manglaaseem' },
        ],
        'coreTeam': [
            { name: 'Dhruv Kauts', linkedin: 'https://www.linkedin.com/in/aseemmangla/', github: 'https://github.com/manglaaseem' },
            { name: 'Jaskaran Singh', linkedin: 'https://www.linkedin.com/in/aseemmangla/', github: 'https://github.com/manglaaseem' },
            { name: 'Bhavesh Kumar', linkedin: 'https://www.linkedin.com/in/aseemmangla/', github: 'https://github.com/manglaaseem' },
            { name: 'Priyanshu Kaushal', linkedin: 'https://www.linkedin.com/in/aseemmangla/', github: 'https://github.com/manglaaseem' },
        ]
    }

    const linkedinSvg = () => {
        return (
            <svg
                width="64"
                height="66"
                viewBox="0 0 64 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* <rect width="64" height="66" rx="20" fill="white" /> */}
                <path
                    d="M24.6382 46.3739V28.5454H18.8969V46.3739H24.6388H24.6382ZM21.7687 26.1116C23.7704 26.1116 25.0166 24.7426 25.0166 23.0317C24.9791 21.2819 23.7704 19.951 21.8068 19.951C19.8418 19.951 18.5585 21.2819 18.5585 23.0316C18.5585 24.7425 19.8042 26.1115 21.7311 26.1115H21.7683L21.7687 26.1116ZM27.816 46.3739H33.5568V36.4187C33.5568 35.8866 33.5943 35.3531 33.7459 34.973C34.1608 33.9079 35.1054 32.8054 36.6918 32.8054C38.7687 32.8054 39.6 34.4402 39.6 36.8372V46.3739H45.3407V36.1516C45.3407 30.6757 42.5087 28.1274 38.7315 28.1274C35.6348 28.1274 34.2747 29.914 33.519 31.1308H33.5573V28.546H27.8163C27.8912 30.2185 27.8159 46.3745 27.8159 46.3745L27.816 46.3739Z"
                    fill="#0075FF"
                />
            </svg>
        )
    }

    const githubSvg = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="36"
                height="36" fill="black" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
        )
    }

    return (
        <div>

            <section id="team">

                {/* <h2 className="team-title">Our Team</h2> */}
                <div className="container">
                    <div className="row">
                    <h2 className="team-title">Heads</h2>
                        {
                            teamMembers.heads.map(person => {
                                return (
                                    <div className="col-12 col-sm-6 col-lg-3">
                                        <div className="our-team">
                                            <div className="picture">
                                                <img  className="img-fluid" src={Aseem} alt={person.name} />
                                            </div>
                                            <div className="team-content">
                                                <h3 className="name">{person.name}</h3>
                                            </div>
                                            <div className="social">
                                                <a href={person.linkedin} target="_blank" rel="noreferrer" className="fa fa-linkedin" aria-hidden="true">
                                                    {linkedinSvg()}
                                                </a>
                                                <a href={person.github} target="_blank" rel="noreferrer" className="fa fa-github" aria-hidden="true" >
                                                    {githubSvg()}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="row">
                    <h2 className="team-title">Core-Team</h2>
                        {
                            teamMembers.coreTeam.map(person => {
                                return (
                                    <div className="col-12 col-sm-6 col-lg-3">
                                        <div className="our-team">
                                            <div className="picture">
                                                <img  className="img-fluid" src={Aseem} alt={person.name} />
                                            </div>
                                            <div className="team-content">
                                                <h3 className="name">{person.name}</h3>
                                            </div>
                                            <div className="social">
                                                <a href={person.linkedin} target="_blank" rel="noreferrer" className="fa fa-linkedin" aria-hidden="true">
                                                    {linkedinSvg()}
                                                </a>
                                                <a href={person.github} target="_blank" rel="noreferrer" className="fa fa-github" aria-hidden="true" >
                                                    {githubSvg()}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Team