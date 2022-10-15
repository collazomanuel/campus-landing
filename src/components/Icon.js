
import '../App.css'

const Icon = (props) => {

  const type = props.type

  switch (type) {
  case 'Book':
    return (
      <svg x="0px" y="0px" viewBox="0 0 490 490">
        <g>
          <path d="M463.9,105.892v326.3c-47.1-26.5-86.5-32.8-118.2-33.1c-29.8-0.2-81.2,8.7-100.7,14c-22.5-5.6-73.7-14.6-100.7-14
                    c-33,0.7-62.6,3.9-118.2,33.1v-326.3H0v339.1h490v-339.1H463.9z"/>
          <path d="M255.5,56.492v334.5c63-13.2,126-19.8,189,10.1v-334.5C381.5,36.692,318.5,43.292,255.5,56.492z M416.1,346.592
                    c-3.8,8.4-11.2,6.1-12.4,5.4c-36.9-14.8-73.9-10.1-108.5-2.7c-5.4,1.2-10.5-2.3-11.7-7.4c-1.2-5.8,1.9-10.9,7.4-12.1
                    c35.4-7.8,77.8-13.2,119.8,3.9C415.7,335.692,418.1,341.592,416.1,346.592z M416.1,289.492c-3.8,8.4-11.2,6.1-12.4,5.4
                    c-36.9-14.8-73.9-10.1-108.5-2.7c-5.4,1.2-10.5-2.3-11.7-7.4c-1.2-5.8,1.9-10.9,7.4-12.1c35.4-7.8,77.8-13.2,119.8,3.9
                    C415.7,278.592,418.1,284.392,416.1,289.492z M416.1,232.192c-3.8,8.4-11.2,6.1-12.4,5.4c-36.9-14.8-73.9-10.1-108.5-2.7
                    c-5.4,1.2-10.5-2.3-11.7-7.4c-1.2-5.8,1.9-10.9,7.4-12.1c35.4-7.8,77.8-13.2,119.8,3.9C415.7,221.292,418.1,227.092,416.1,232.192
                    z M416.1,175.092c-3.8,8.4-11.2,6.1-12.4,5.4c-36.9-14.8-73.9-10.1-108.5-2.7c-5.4,1.2-10.5-2.3-11.7-7.4
                    c-1.2-5.8,1.9-10.9,7.4-12.1c35.4-7.8,77.8-13.2,119.8,3.9C415.7,164.192,418.1,170.092,416.1,175.092z M416.1,117.992
                    c-3.8,8.4-11.2,6.1-12.4,5.4c-36.9-14.8-73.9-10.1-108.5-2.7c-5.4,1.2-10.5-2.3-11.7-7.4c-1.2-5.8,1.9-10.9,7.4-12.1
                    c35.4-7.8,77.8-13.2,119.8,3.9C415.7,107.092,418.1,112.892,416.1,117.992z"/>
          <path d="M45.9,66.192v334.4c63-29.9,126-23.3,189-9.7v-334.4C171.9,42.892,108.9,36.292,45.9,66.192z M206.5,346.192
                    c-3.8,8.4-11.2,6.1-12.4,5.4c-36.9-14.8-73.9-10.1-108.5-2.7c-5.4,1.2-10.5-2.3-11.7-7.4c-1.2-5.8,1.9-10.9,7.4-12.1
                    c35.4-7.8,77.8-13.2,119.8,3.9C206.1,335.292,208.4,341.092,206.5,346.192z M206.5,288.992c-3.8,8.4-11.2,6.1-12.4,5.4
                    c-36.9-14.8-73.9-10.1-108.5-2.7c-5.4,1.2-10.5-2.3-11.7-7.4c-1.2-5.8,1.9-10.9,7.4-12.1c35.4-7.8,77.8-13.2,119.8,3.9
                    C206.1,278.092,208.4,283.892,206.5,288.992z M206.5,231.692c-3.8,8.4-11.2,6.1-12.4,5.4c-36.9-14.8-73.9-10.1-108.5-2.7
                    c-5.4,1.2-10.5-2.3-11.7-7.4c-1.2-5.8,1.9-10.9,7.4-12.1c35.4-7.8,77.8-13.2,119.8,3.9C206.1,220.792,208.4,226.592,206.5,231.692
                    z M206.5,174.692c-3.8,8.4-11.2,6.1-12.4,5.4c-36.9-14.8-73.9-10.1-108.5-2.7c-5.4,1.2-10.5-2.3-11.7-7.4
                    c-1.2-5.8,1.9-10.9,7.4-12.1c35.4-7.8,77.8-13.2,119.8,3.9C206.1,163.792,208.4,169.592,206.5,174.692z M206.5,117.492
                    c-3.8,8.4-11.2,6.1-12.4,5.4c-36.9-14.8-73.9-10.1-108.5-2.7c-5.4,1.2-10.5-2.3-11.7-7.4c-1.2-5.8,1.9-10.9,7.4-12.1
                    c35.4-7.8,77.8-13.2,119.8,3.9C206.1,106.592,208.4,112.392,206.5,117.492z"/>
        </g>
      </svg>
    )
  case 'Hat':
    return (
      <svg x="0px" y="0px" viewBox="0 0 20 20">
        <g>
          <path d="M4 14.5V11.165L8.00843 13.4663C9.24174 14.1743 10.7583 14.1743 11.9916 13.4663L16 11.165V14.5C16 14.6326 15.9473 14.7598 15.8536 14.8536L15.852 14.8551L15.8496 14.8574L15.8428 14.8642L15.8201 14.8859C15.801 14.9039 15.7741 14.9288 15.7394 14.9596C15.6701 15.0213 15.5696 15.1067 15.4389 15.2079C15.1777 15.41 14.7948 15.6761 14.2978 15.9412C13.3033 16.4716 11.8479 17 10 17C8.15211 17 6.69675 16.4716 5.70221 15.9412C5.20518 15.6761 4.82226 15.41 4.5611 15.2079C4.43043 15.1067 4.32994 15.0213 4.26059 14.9596C4.22591 14.9288 4.19898 14.9039 4.17992 14.8859L4.15724 14.8642C4.05938 14.7684 4 14.6378 4 14.5Z" />
          <path d="M18.7489 8.43369L11.4937 12.599C10.5687 13.1301 9.4313 13.1301 8.50632 12.599L2 8.86367L2 13.5C2 13.7761 1.77614 14 1.5 14C1.22386 14 1 13.7761 1 13.5V8.00008C1 7.81007 1.10598 7.64474 1.26206 7.56014L8.5063 3.40104C8.85317 3.20189 9.22992 3.07743 9.61413 3.02764C9.73586 3.01187 9.85834 3.00359 9.98086 3.00281C10.3739 3.0003 10.7674 3.07496 11.1377 3.22679C11.2591 3.27658 11.3781 3.33466 11.4937 3.40104L18.749 7.56646C18.9042 7.65561 19 7.82101 19 8.00008C19 8.17914 18.9042 8.34454 18.7489 8.43369Z" />
        </g>
      </svg>
    )
  case 'Teacher':
    return (
      <svg x="0px" y="0px" viewBox="0 0 256 203">
        <g>
          <path d="M84.2,2.3c18.7,0,33.8,15.1,33.8,33.8s-15.1,33.8-33.8,33.8S50.4,54.7,50.4,36.1S65.5,2.3,84.2,2.3z M188.8,151.4
                    c4.3,0,7.8,2.2,7.8,5s-3.5,5-7.8,5c-4.3,0-7.8-2.2-7.8-5S184.5,151.4,188.8,151.4z M149.3,112.1l-3.9,11.1c-4-8.3-8-16.3-11.1-21.8
                    c-3.4-7.2-8.7-13.3-15.3-17.6c-6.6-4.3-14.5-6.8-22.9-6.8H44.2C20.9,76.9,2,96,2,119.1V183c0,9.8,7.9,17.7,17.7,17.7h202.7
                    l31.6-88.6H149.3z M215.5,190.9H88.6v-5.7c0-8.8-7.2-16-16-16H33.5v-43.3c0-2.2,1.8-3.9,3.9-3.9s3.9,1.8,3.9,3.9v35.4h31.2
                    c12.4,0,22.6,9.5,23.8,21.7h38.1l21.7-61H240L215.5,190.9z"/>
        </g>
      </svg>
    )
  case 'Cetec':
    return (
      <svg x="0px" y="0px" viewBox="-10 35 280.000000 20.000000">
        <g transform="translate(0.000000,101.000000) scale(0.100000,-0.100000)">
          <path d="M1860 851 c-56 -18 -127 -62 -164 -100 -38 -39 -39 -41 -21 -55 17
                    -13 24 -10 62 24 76 66 125 85 228 85 74 0 98 -5 136 -23 74 -37 125 -87 160
                    -157 32 -65 47 -77 67 -52 17 20 -28 107 -85 168 -26 28 -75 65 -108 82 -53
                    27 -72 31 -155 34 -52 1 -106 -1 -120 -6z"/>
          <path d="M277 816 c-64 -17 -116 -61 -150 -127 -27 -50 -28 -61 -25 -149 5
                    -130 42 -201 132 -247 47 -25 166 -29 221 -9 52 20 111 83 125 135 16 59 15
                    61 -43 61 -52 0 -53 0 -72 -42 -37 -79 -127 -99 -194 -42 -89 75 -76 270 22
                    320 44 24 111 14 148 -22 16 -15 29 -34 29 -41 0 -9 17 -13 61 -13 58 0 60 1
                    54 23 -27 87 -81 138 -166 156 -62 14 -81 13 -142 -3z"/>
          <path d="M970 765 l0 -45 80 0 80 0 0 -220 0 -220 60 0 60 0 0 220 0 220 80 0
                    80 0 0 45 0 45 -220 0 -220 0 0 -45z"/>
          <path d="M793 671 c-44 -11 -77 -34 -109 -77 -49 -64 -45 -192 8 -260 69 -87
                    253 -82 308 8 29 48 26 58 -20 58 -28 0 -46 -7 -64 -25 -19 -19 -35 -25 -70
                    -25 -37 0 -48 5 -70 31 -14 17 -26 39 -26 50 0 18 9 19 140 19 l140 0 0 28 c0
                    66 -41 147 -90 175 -32 19 -106 28 -147 18z m101 -93 c14 -13 26 -32 28 -43 3
                    -19 -3 -20 -81 -20 -97 0 -108 9 -63 55 37 37 80 40 116 8z"/>
          <path d="M1483 671 c-124 -31 -184 -184 -121 -306 61 -117 252 -127 325 -16
                    31 46 29 51 -17 51 -28 0 -46 -7 -64 -25 -20 -20 -35 -25 -75 -25 -42 0 -53 4
                    -70 26 -12 15 -21 37 -21 50 l0 24 140 0 c158 0 152 -4 126 83 -17 57 -49 103
                    -84 121 -37 19 -100 26 -139 17z m104 -93 c11 -13 24 -33 28 -45 6 -23 5 -23
                    -84 -23 -85 0 -91 1 -91 20 0 61 104 94 147 48z"/>
          <path d="M1925 671 c-68 -17 -130 -77 -141 -136 -13 -70 0 -150 30 -190 88
                    -115 293 -89 331 43 6 21 3 22 -44 22 -28 0 -51 -4 -51 -10 0 -36 -75 -63
                    -125 -44 -62 24 -59 200 4 234 35 18 80 12 105 -15 18 -20 33 -25 70 -25 56 0
                    59 14 16 64 -42 48 -130 73 -195 57z"/>
          <path d="M2187 486 c-11 -28 19 -37 119 -34 91 3 99 5 99 23 0 19 -8 20 -106
                    23 -86 2 -108 0 -112 -12z"/>
          <path d="M2275 355 c-22 -58 -103 -148 -158 -174 -23 -11 -66 -25 -96 -32 -93
                    -20 -212 16 -283 85 -33 32 -35 33 -56 16 l-22 -18 38 -34 c54 -48 99 -74 166
                    -93 175 -51 371 41 451 211 26 55 25 84 -5 84 -11 0 -23 -15 -35 -45z"/>
        </g>
      </svg>
    )
  default:
    break
  }

  return (
    <div>
        Icon
    </div>
  )
}

export default Icon
