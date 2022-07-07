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
        <form>
            <h2>Количество пересадок</h2>
            <label>
                <input type='checkbox' value={0} onChange={(e) => UpdateCheckbox((e.target as HTMLInputElement).value, e.target.checked)}></input>
                Без пересадок
            </label>
            <label>
                <input type='checkbox' value={1} onChange={(e) => UpdateCheckbox((e.target as HTMLInputElement).value, e.target.checked)}></input>
                1 пересадка
            </label>
            <label>
                <input type='checkbox' value={2} onChange={(e) => UpdateCheckbox((e.target as HTMLInputElement).value, e.target.checked)}></input>
                2 пересадки
            </label>
            <label>
                <input type='checkbox' value={3} onChange={(e) => UpdateCheckbox((e.target as HTMLInputElement).value, e.target.checked)}></input>
                3 пересадки
            </label>
        </form>
    )
}
export default NumberOfTransfers