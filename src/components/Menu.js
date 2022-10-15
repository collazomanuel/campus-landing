
import '../App.css'

import MenuButton from './MenuButton'

const Menu = () => {

  const menuStyle = 'middle-part'

  return (
    <div className={menuStyle}>
      <MenuButton type='Book' text='Grado' />
      <MenuButton type='Hat' text='Posgrado' />
      <MenuButton type='Teacher' text='Formación docente' />
      <MenuButton type='Cetec' text='Cetec' />
    </div>
  )
}

export default Menu
