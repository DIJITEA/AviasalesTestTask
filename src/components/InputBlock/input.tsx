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
        <form>
            <label>
                Откуда
                <input type='text' value={from} onChange={(e) => dispatch(fromWhereUpdate(e.target.value))}></input>
            </label>
            <input type='button' onClick={() => dispatch(fromToChange())}></input>
            <label>
                Куда
                <input type='text' value={toWhere} onChange={(e) => dispatch(toWhereUpdate(e.target.value))}></input>
            </label>
            <label>
                Когда
                <input type="date" onChange={(e) => dispatch(whenUpdate(new Date(e.target.value)))} ></input>
            </label>
            <label>
                Обратно
                <input type="date" onChange={(e) => dispatch(whenBackUpdate(new Date(e.target.value)))}></input>
            </label>
        </form>
    )
}
export default Input