
import '../App.css'

import Icon from './Icon'

const MenuButton = (props) => {

  const text = props.text
  const type = props.type

  return (
    <div>
      <a href='/'>
        <Icon type={type} /><p>{text}</p>
      </a>
    </div>
  )
}

const Menu = () => {

  const menuStyle = {
    color: '#484A4B',
    backgroundColor: '#D3E9EC'
  }

  return (
    <div style={menuStyle}>
      <MenuButton type='Book' text='Grado' />
      <MenuButton type='Hat' text='Posgrado' />
      <MenuButton type='Teacher' text='Formación docente' />
      <MenuButton type='Cetec' text='' />
    </div>
  )
}

export default Menu
