import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState , useEffect } from 'react'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
        useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(timer)
        }, [])


    return (
        <>
          <div className='container contact-page'>
            <div className='text-zone' >
                <br/>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','M','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm interested in freelance opportunities - espacially ambitious or large projects . However , if you have other request or question , don't hesitate to contact me using below from either .
                </p>
                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className='half' >
                                <input type='text' name='name' placeholder='Please enter your name' required  />
                            </li>
                            <li className='half' >
                                <input type='email' name='email' placeholder='Please enter your email' required  />
                            </li>
                            <li className='half' >
                                <input type='text' name='name' placeholder='Subject' required  />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li  >
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
          
          </div>
          <Loader  type='pacman' />
        </>
    )
}

export default Contact