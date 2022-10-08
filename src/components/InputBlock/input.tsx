import '../../assets/scss/inputComponentScss/inputComponent.scss'
import { useAppDispatch, useAppSelector } from "../../hooks"
import {
    fromWhereUpdate,
    toWhereUpdate,
    fromToChange,
    whenUpdate,
    whenBackUpdate,
} from "../../store/actions/TicketSettingsAction"



function Input() {
    const dispatch = useAppDispatch()
    const from = useAppSelector(state => state.TiketsSettings.fromWhere)
    const toWhere = useAppSelector(state => state.TiketsSettings.toWhere)
    return (
        <form className='form'>
            <input type='text' className='form__input form__input--left form__input--text' value={from} onChange={(e) => dispatch(fromWhereUpdate(e.target.value))} placeholder="Откуда"></input>
            <input type='button' className='form__button' onClick={() => dispatch(fromToChange())}></input>
            <input type='text' className='form__input form__input--second' value={toWhere} onChange={(e) => dispatch(toWhereUpdate(e.target.value))} placeholder="Куда"></input>
            {/* <label>
                Когда */}
            <input type="date" placeholder='Когда' className='form__input form__input--data form__input--data-non-active-forward'
                onFocus={(e) => {
                    // e.target.type = 'date';
                    e.target.classList.toggle('form__input--data-active')
                    e.target.classList.toggle('form__input--data-non-active-forward')
                }}
                onBlur={(e) => {
                    if (e.target.value == '') {
                        // e.target.type = 'text'
                        e.target.classList.toggle('form__input--data-active')
                        e.target.classList.toggle('form__input--data-non-active-forward')
                    }
                }}
                onChange={(e) => dispatch(whenUpdate(e.target.value))}
            ></input>
            {/* </label> */}
            {/* <label>
                Обратно */}
            <input type="date" placeholder='Обратно' className='form__input form__input--right form__input--data form__input--data-non-active-back'
                onFocus={(e) => {
                    // e.target.type = 'date';
                    e.target.classList.toggle('form__input--data-active')
                    e.target.classList.toggle('form__input--data-non-active-back')
                }}
                onBlur={(e) => {
                    if (e.target.value == '') {
                        // e.target.type = 'text'
                        e.target.classList.toggle('form__input--data-active')
                        e.target.classList.toggle('form__input--data-non-active-back')
                    }
                }}
                onChange={(e) => dispatch(whenBackUpdate(new Date(e.target.value)))}></input>
            {/* </label> */}
        </form>
    )
}
export default Input