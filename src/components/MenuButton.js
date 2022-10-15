
import '../App.css'

import Icon from './Icon'

const MenuButton = (props) => {

  const menuButtonStyle = ''

  const text = props.text
  const type = props.type

  return (
    <div className={menuButtonStyle}>
      <a href='/'>
        <Icon type={type} /><p>{text}</p>
      </a>
    </div>
  )
}

export default MenuButton
