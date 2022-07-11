import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks'
import { GetTikets } from '../../store/actions/TiketsAction';
import TiketsAmount, { TiketsUpdate } from '../../store/actions/TiketsAmount';
import { TiketsState } from '../../store/actions/TiketsAction';
import { fromWhereUpdate } from '../../store/actions/TicketSettingsAction';

function fromUpdate(store: TiketsState, from: string) {
    let inf = store.value.slice()
    let result = []
    for (let i = 0; i < inf.length; i++) {
        if (inf[i].info.origin === from.toUpperCase())
            result.push(inf[i])
    }
    if (result.length > 0)
        return result
    else
    return inf
}
function byPrice(a: any, b: any) {
    console.log(typeof a)
    return a.price - b.price
}

function Tiket(Component: { dataId: number }) {
    const status = useAppSelector(state => state.TiketsState.status)
    const tickets = useAppSelector(state => state.TiketsState)
    const inputFromWhere = useAppSelector(state => state.TiketsSettings.fromWhere)

    if (status === 'loading') return (<div><h1>{status}</h1></div>)
    else if (status === 'failed') return (<div><h1>{status}</h1></div>)
    else if (status === 'succes') {
        let temptickets = tickets.value.slice()
        // const inputFromWhere = useAppSelector(state => state.TiketsSettings.fromWhere)
        if (inputFromWhere.length === 3) {
            temptickets = fromUpdate(tickets, inputFromWhere)
        }

        // temptickets.sort(byPrice)
        const ticketInfo = temptickets[Component.dataId]
        const dateStart = new Date(ticketInfo.info.dateStart)
        const dateEnd = new Date(ticketInfo.info.dateEnd)
        const duration = new Date(ticketInfo.info.duration)

        const stopsLength = () => {
            if (ticketInfo.info.stops.length == 0) {
                return (<div><p>БЕЗ ПЕРЕСАДОК</p></div>)
            } else {
                let transplantsCountString = 'ПЕРЕСАДКИ'
                if (ticketInfo.info.stops.length === 1) transplantsCountString = 'ПЕРЕСАДКА'
                return (<div>
                    <p>{ticketInfo.info.stops.length} {transplantsCountString}</p>
                    <h4>{ticketInfo.info.stops.join(', ')}</h4>
                </div>)
            }
        }

        return (<div>
            <div>
                <h3>{ticketInfo.price} Р</h3>
                <p>{ticketInfo.companyId}</p>
            </div>
            <div>
                <div>
                    <p>{ticketInfo.info.origin} - {ticketInfo.info.destination}</p>
                    <h4>{`${dateStart.getHours()}:${dateStart.getMinutes()}`} - {`${dateEnd.getHours()}:${dateEnd.getMinutes()}`}</h4>
                </div>
                <div>
                    <p>в пути</p>
                    <h4>{`${duration.getHours()}ч ${duration.getMinutes()}м`}</h4>
                </div>
                <div>
                    {stopsLength()}
                </div>
            </div>
        </div>)
    }
}
function Tikets() {
    const dispatch = useAppDispatch()

    const tiketsAmount = useAppSelector(state => state.TiketsAmount.value)
    useEffect(() => {
        dispatch(GetTikets())
    }, [dispatch])
    return (<div>
        {([...Array(tiketsAmount)].map((e, i: number) => <Tiket key={i} dataId={i} />))}
        <button onClick={() => dispatch(TiketsUpdate())}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ</button>
    </div>)
}
export default Tikets