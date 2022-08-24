import '../../assets/scss/NumberOfTransfersScss/numberOfTransfers.scss'
import { useAppDispatch, useAppSelector } from "../../hooks"
import { transplantsPush, transplantsSplice } from "../../store/actions/TicketSettingsAction"

function NumberOfTransfers() {
    const dispatch = useAppDispatch()

    const checkboxArr = useAppSelector(state => state.TiketsSettings.transplants)

    function UpdateCheckbox(e: string, checked: boolean) {
        console.log(e)
        console.log(checked)
        console.log(checkboxArr)

        if (checked) {
            return dispatch(transplantsPush(Number(e)))
        } else {
            return dispatch(transplantsSplice(Number(e)))
        }
    }
    return (
        <form className='transfers-form'>
            <h2 className='transfers-form__header'>Количество пересадок</h2>

            <div className='transfers-form__input-container'>
                <input type='checkbox' id='checkbox0' className='transfers-form__checkbox' value={0} onChange={(e) => UpdateCheckbox((e.target as HTMLInputElement).value, e.target.checked)}></input>
                <label htmlFor='checkbox0' className='transfers-form__label'>
                    Без пересадок
                </label>
            </div>

            <div className='transfers-form__input-container'>
                <input type='checkbox' id='checkbox1' className='transfers-form__checkbox' value={1} onChange={(e) => UpdateCheckbox((e.target as HTMLInputElement).value, e.target.checked)}></input>
                <label htmlFor='checkbox1' className='transfers-form__label'>
                    1 пересадка
                </label>
            </div>

            <div className='transfers-form__input-container'>
                <input type='checkbox' id='checkbox2' className='transfers-form__checkbox' value={2} onChange={(e) => UpdateCheckbox((e.target as HTMLInputElement).value, e.target.checked)}></input>
                <label htmlFor='checkbox2' className='transfers-form__label'>
                    2 пересадки
                </label>
            </div>

            <div className='transfers-form__input-container'>
                <input type='checkbox' id='checkbox3' className='transfers-form__checkbox' value={3} onChange={(e) => UpdateCheckbox((e.target as HTMLInputElement).value, e.target.checked)}></input>
                <label htmlFor='checkbox3' className='transfers-form__label'>
                    3 пересадки
                </label>
            </div>
        </form>
    )
}
export default NumberOfTransfers