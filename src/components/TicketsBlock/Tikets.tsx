import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks'
import { GetTikets } from '../../store/actions/TiketsAction';
import TiketsAmount, { TiketsUpdate } from '../../store/actions/TiketsAmount';

function Tiket() {
    const tiketsAmount = useAppSelector(state => state.TiketsAmount.value)
    const tickets = useAppSelector(state => state.TiketsState.value)
    console.log(tickets)
    return (<div><h1>{tiketsAmount}</h1></div>)
}
function Tikets() {
    const dispatch = useAppDispatch()
    const tiketsAmount = useAppSelector(state => state.TiketsAmount.value)
    useEffect(() =>{
        dispatch(GetTikets())
    }, [dispatch])
    return (<div>
        {([...Array(tiketsAmount)].map((e, i) => <Tiket key={i} />))}
        <button onClick={() => dispatch(TiketsUpdate())} />
    </div>)
}
export default Tikets