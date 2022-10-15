
import '../App.css'

import Icon from './Icon'

const MenuButton = (props) => {

  const text = props.text
  const type = props.type

  let buttonTextStyle = 'button-text'

  if (type === 'Teacher') {
    buttonTextStyle = buttonTextStyle.concat(' button-text-teacher')
  }

  return (
    <a className='menu-button' href='/'>
      <Icon type={type} /> <div className={buttonTextStyle}>{text}</div>
    </a>
  )
}

export default MenuButton
