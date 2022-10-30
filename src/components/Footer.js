
import '../App.css'

const Footer = () => {

  const footerStyle = 'bottom-part'

  return (
    <div className={footerStyle}>
      <div className='footer-text'>
        <p className='footer-text-bold'>Facultad de Ingeniería de la Universidad de Buenos Aires</p>
        <p>Av. Paseo Colón 850 - C1063ACV - Buenos Aires - Argentina</p>
      </div>
      <img className="d-block w-100 footer-image"
        src="./img/fiuba-footer-logo.png"
        alt="footer-logo"
      />
    </div>
  )
}

export default Footer
