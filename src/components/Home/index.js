import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/logo-s.png'

import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  console.log("▶ Home component is loading...");

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'y', 't', 'h', 'e', 'm']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  let logoImg = null
  try {
    //  remplace ceci par une image temporaire si le chemin est invalide
    // import LogoTitle from '../../assets/images/logo-s.png'
    logoImg = <img src={LogoTitle} alt="developer" />
    console.log("✅ Image chargée avec succès.")
  } catch (error) {
    console.error("❌ Erreur lors du chargement de l'image :", error)
  }

  let logoComponent = null
  try {
    logoComponent = <Logo />
    console.log("✅ Composant Logo chargé avec succès.")
  } catch (error) {
    console.error("❌ Erreur dans le composant Logo :", error)
  }

  return (
    <> 
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              {logoImg}

                <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />

              <br />

              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />  
            </h1>
            <h2>Web Developer / UX Designer / Digital Marketer</h2>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
          </div>
          {logoComponent}
        </div>
        <Loader type='pacman'></Loader>
    </>
  )
}

export default Home
