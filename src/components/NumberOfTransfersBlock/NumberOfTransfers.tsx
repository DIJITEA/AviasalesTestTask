import { useDispatch } from "react-redux"
import { transplantsUpdate } from "../../store/actions/TicketSettingsAction"

function NumberOfTransfers() {
    const dispatch = useDispatch()
    dispatch(transplantsUpdate())
    function UpdateCheckbox(){
        
    }
    return (
        <form>
            <h2>Количество пересадок</h2>
            <label>
                <input type='checkbox' value={0} id="NoneTransfers" onChange={(e)=>console.log(e)}></input>
                Без пересадок
            </label>
            <label>
                <input type='checkbox' value={1}></input>
                1 пересадка
            </label>
            <label>
                <input type='checkbox' value={2}></input>
                2 пересадки
            </label>
            <label>
                <input type='checkbox' value={3}></input>
                3 пересадки
            </label>
        </form>
    )
}
export default NumberOfTransfers