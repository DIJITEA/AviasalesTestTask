import '../../assets/scss/TiketsBlockScss/tiketsBlock.scss'
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks'
import { GetTikets } from '../../store/actions/TiketsAction';

type ticketsSlicedType = {
    companyId: string;
    id: string;
    info: {
        dateEnd: number;
        dateStart: number;
        destination: string;
        duration: number;
        origin: string;
        stops: string[];
    };
    price: number;
}[]

function fromUpdate(store: ticketsSlicedType, city: string, fromTo: string) {
    let inf = store.slice()
    let result = []
    for (let i = 0; i < inf.length; i++) {
        if (fromTo === 'from') {
            if (inf[i].info.origin === city.toUpperCase())
                result.push(inf[i])
        } else {
            if (inf[i].info.destination === city.toUpperCase()) {
                result.push(inf[i])
            }
        }
    }
    if (result.length > 0)
        return result
    else
        return inf
}

function Tiket(Component: { dataId: number }) {
    const dispatch = useAppDispatch()

    const status = useAppSelector(state => state.TiketsState.status)
    const tickets = useAppSelector(state => state.TiketsState)
    const inputFromWhere = useAppSelector(state => state.TiketsSettings.fromWhere)
    const inputToWhere = useAppSelector(state => state.TiketsSettings.toWhere)
    let temptickets: ticketsSlicedType
    if (status === 'succes') {
        temptickets = tickets.value.slice()
    }

    useEffect(() => {
        if (status === 'succes') {
            if (inputFromWhere.length === 3) {
                temptickets = fromUpdate(temptickets, inputFromWhere, 'from')
            }
            if (inputToWhere.length === 3) {
                temptickets = fromUpdate(temptickets, inputToWhere, 'to')
            }
            if (Component.dataId >= temptickets.length - 1) {
                dispatch(TiketsErrorUpdate(temptickets.length))
            }
            dispatch(TiketsMaxValueUpdate(temptickets.length))
        }
    })

    if (status === 'loading') return (<div><h1>{status}</h1></div>)
    else if (status === 'failed') return (<div><h1>{status}</h1></div>)
    else if (status === 'succes') {
        if (inputFromWhere.length === 3) {
            temptickets = fromUpdate(temptickets, inputFromWhere, 'from')
        }
        if (inputToWhere.length === 3) {
            temptickets = fromUpdate(temptickets, inputToWhere, 'to')
        }

        //--- tiketsAmount error fix
        if (Component.dataId >= temptickets.length) {
            return (<div></div>)
        }
        //---

        const ticketInfo = temptickets[Component.dataId]
        const dateStart = new Date(ticketInfo.info.dateStart)
        const dateEnd = new Date(ticketInfo.info.dateEnd)
        const duration = new Date(ticketInfo.info.duration)

        const stopsLength = () => {
            if (ticketInfo.info.stops.length == 0) {
                return (<div className='tiket-lower-level-cell'>
                    <p className='tiket-lower-level-cell__names'>БЕЗ ПЕРЕСАДОК</p>
                    <h4></h4>
                    </div>)
            } else {
                let transplantsCountString = 'ПЕРЕСАДКИ'
                if (ticketInfo.info.stops.length === 1) transplantsCountString = 'ПЕРЕСАДКА'
                return (<div className='tiket-lower-level-cell'>
                    <p className='tiket-lower-level-cell__names'>{ticketInfo.info.stops.length} {transplantsCountString}</p>
                    <h4 className='tiket-lower-level-cell__content'>{ticketInfo.info.stops.join(', ')}</h4>
                </div>)
            }
        }

        return (<div className='tiket-block'>
            <div className='tiket-upper-level'>
                <h3 className='tiket-upper-level__price'>{ticketInfo.price} Р</h3>
                <p className='tiket-upper-level__company'>{ticketInfo.companyId}</p>
            </div>
            <div className='tiket-lower-level'>
                <div className='tiket-lower-level-cell'>
                    <p className='tiket-lower-level-cell__names'>{ticketInfo.info.origin} - {ticketInfo.info.destination}</p>
                    <h4 className='tiket-lower-level-cell__content'>{`${dateStart.getHours()}:${dateStart.getMinutes()}`} - {`${dateEnd.getHours()}:${dateEnd.getMinutes()}`}</h4>
                </div>
                <div className='tiket-lower-level-cell'>
                    <p className='tiket-lower-level-cell__names'>в пути</p>
                    <h4 className='tiket-lower-level-cell__content'>{`${duration.getHours()}ч ${duration.getMinutes()}м`}</h4>
                </div>
                <div>
                    {stopsLength()}
                </div>
            </div>
        </div>)
    }
}

function AddTiketsbutton() {
    const dispatch = useAppDispatch()
    const tiketsmaxAmount = useAppSelector(state => state.TiketsAmount.maxValue)
    const tiketsAmount = useAppSelector(state => state.TiketsAmount.value)
    let maxAdd = 5
    if (tiketsmaxAmount - tiketsAmount < 5) {
        maxAdd = tiketsmaxAmount - tiketsAmount
    }
    return (
        <button className='add-tickets-button' onClick={() => dispatch(TiketsUpdate())}>ПОКАЗАТЬ ЕЩЕ {maxAdd} БИЛЕТОВ</button>
    )
}
import TiketsAmount, { TiketsUpdate, TiketsErrorUpdate, TiketsMaxValueUpdate } from '../../store/actions/TiketsAmount';



export default function Tikets() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(GetTikets())
    }, [dispatch])

    const tiketsAmount = useAppSelector(state => state.TiketsAmount.value)

    return (<div>
        {([...Array(tiketsAmount)].map((e, i: number) => <Tiket key={i} dataId={i} />))}
        <AddTiketsbutton />
    </div>)
}