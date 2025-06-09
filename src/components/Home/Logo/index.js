import './index.scss'
import LogoS from '../../../assets/images/logo-s.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'

const Logo = () => {
  const bgRef = useRef(null)
  const outlineLogoRef = useRef(null)
  const solidLogoRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    // Vérification que tous les éléments sont présents
    if (!bgRef.current || !outlineLogoRef.current || !solidLogoRef.current) return

    const tl = gsap.timeline()

    tl.to(bgRef.current, {
      duration: 1,
      opacity: 1,
    })
    .from(outlineLogoRef.current, {
      drawSVG: 0,
      duration: 20,
    })
    .fromTo(solidLogoRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2 }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img className="solid-logo" src={LogoS} alt="S" ref={solidLogoRef} />
      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="svg-container" transform="translate(0.000000,897.000000) scale(0.100000,-0.100000)" fill="none">
          <path
            ref={outlineLogoRef}
            d="M2930 8964 c-457 -31 -773 -97 -1110 -230 -382 -150 -717 -359 -1044
            -653 -130 -116 -388 -403 -399 -438 -3 -9 -18 -36 -34 -61 -37 -57 -133 -265
            -169 -362 -29 -79 -93 -286 -120 -390 -32 -120 -91 -455 -110 -625 -43 -388
            -52 -1015 -21 -1430 63 -837 194 -1628 441 -2640 14 -58 59 -209 100 -335 98
            -302 184 -509 337 -810 161 -320 367 -634 581 -886 270 -318 708 -711 1026
            -921 380 -250 763 -420 1152 -505 251 -56 334 -63 916 -72 442 -7 501 -6 547
            8 89 29 160 79 224 158 60 72 71 92 290 530 263 526 394 805 394 834 0 11 4
            23 9 28 5 6 21 44 35 85 25 77 102 313 166 509 141 431 270 978 365 1541 104
            617 144 1205 122 1750 -13 321 -35 558 -74 775 -11 61 -29 162 -41 225 -26
            138 -95 404 -135 520 -152 445 -378 811 -659 1076 -306 289 -623 500 -988
            657 -366 158 -648 239 -1030 300 -156 25 -627 35 -865 19z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
