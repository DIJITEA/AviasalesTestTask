import '../../assets/scss/CompaniesSwitcherBlockScss/companiesSwitcher.scss'

function CompaniesSwitcher() {
    return (
        <form className='companies-form'>
            <h2 className='companies-form__header'>КОМПАНИЯ</h2>
            <div className='company-cell'>
                <input type="radio" id="allRadio" className='company-cell__input'></input>
                <label htmlFor="allRadio" className='company-cell__label'>
                    Все
                </label>
            </div>
            <div className='company-cell'>
                <input type="radio" id="s7Radio" className='company-cell__input'></input>
                <label htmlFor="s7Radio" className='company-cell__label'>
                    S7 Airlines
                </label>
            </div>
            <div className='company-cell'>
                <input type="radio" id="XiamenRadio" className='company-cell__input'></input>
                <label htmlFor="XiamenRadio" className='company-cell__label'>
                    XiamenAir
                </label>
            </div>
        </form>
    )
}

export default CompaniesSwitcher