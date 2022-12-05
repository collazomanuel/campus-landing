
import '../App.css'

import { ReactComponent as TouchIcon } from '../icons/touch-icon.svg'
import { ReactComponent as BookIcon } from '../icons/book-icon.svg'
import { ReactComponent as HatIcon } from '../icons/hat-icon.svg'
import { ReactComponent as TeacherIcon } from '../icons/teacher-icon.svg'
import { ReactComponent as CetecIcon } from '../icons/cetec-icon.svg'

const Icon = (props) => {

  const type = props.type

  switch (type) {
  case 'Book':
    return (<BookIcon className={'button-icon'} />)
  case 'Hat':
    return (<HatIcon className={'button-icon'} />)
  case 'Teacher':
    return (<TeacherIcon className={'button-icon teacher-icon'} />)
  case 'Cetec':
    return (<CetecIcon className={'cetec-icon'} />)
  case 'Touch':
    return (<TouchIcon className={'touch-icon'} />)
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
