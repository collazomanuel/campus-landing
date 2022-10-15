
import '../App.css'

import MenuButton from './MenuButton'

const Menu = () => {

  return (
    <div className='middle-part button-container'>
      <MenuButton type='Book' text='Grado' />
      <MenuButton type='Hat' text='Posgrado' />
      <MenuButton type='Teacher' text='Formación docente' />
      <MenuButton type='Cetec' text='Cetec' />
    </div>
  )
}

export default Menu
