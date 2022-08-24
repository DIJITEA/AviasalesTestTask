import '../../assets/scss/HeaderScss/header.scss'
const logo = require('../../assets/svg/Logo.svg')

function Header(){
    return(
        <header className="header">
            <img className="header__logo" src={logo} alt='logo'/>
        </header>
    )
}

export default Header