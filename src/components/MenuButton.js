
import '../App.css'

import Icon from './Icon'

const MenuButton = (props) => {

  const text = props.text
  const type = props.type

  if (type === 'Cetec') {
    return (
      <a className={'menu-button' + ' ' + type.toLowerCase() + '-button'} href='/'>
        <Icon type={type} />
      </a>
    )
  }

  return (
    <a className={'menu-button' + ' ' + type.toLowerCase() + '-button'} href='/'>
      <Icon type={type} /> <div className='button-text'>{text}</div>
    </a>
  )
}

export default MenuButton
