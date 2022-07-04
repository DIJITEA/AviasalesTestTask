const logo = require('../../assets/svg/Logo.svg')

function Header(){
    return(
        <header>
            <img src={logo} alt='logo'/>
        </header>
    )
}

export default Header