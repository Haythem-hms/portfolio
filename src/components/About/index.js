import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState , useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss, faGitAlt, faHtml5, faJsSquare, faLaravel, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
    }, [])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone' >
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u','t', ' ', 'm','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I’m a passionate and ambitious web developer looking for an opportunity in a 
                    dynamic company where I can apply my skills and grow by working on modern, 
                    challenging, and meaningful projects.
                </p>
                <p>
                    Naturally curious, self-motivated, and constantly learning,
                     I enjoy exploring new technologies and improving my abilities in both front-end 
                     and back-end development.
                </p>
                <p>
                    If I had to describe myself in one sentence: a young and driven developer,
                     passionate about tech, eager to learn, create, and collaborate, 
                     with a balanced mindset between creativity, precision, and teamwork.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubesspinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faLaravel} color='#FF2D20' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss} color='#28a4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81F' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4E28' />
                    </div>                    
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About