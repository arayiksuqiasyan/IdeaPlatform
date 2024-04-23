import { FC, useMemo } from 'react'
import classes from './Ticket.module.scss'

import { IoIosAirplane } from 'react-icons/io'
import { formatPrice } from '../../helpers/helpers.ts'
import Logo from '../../assets/images/logo.png'

export interface ITicket {
    id: number
    priceRUB: string
    priceUSD: string
    priceEUR: string
    transfers: '0' | '1' | '2' | '3'
    from: string
    fromTime: string
    fromStreet: string
    to: string
    toTime: string
    toStreet: string
}

interface IProps {
    currency: '1' | '2' | '3'
    data: ITicket
}

const Ticket: FC<IProps> = ({ data, currency }) => {
    const transfersTitle = useMemo(() => {
        return data.transfers === '0'
            ? 'Без пересадок'
            : data.transfers === '1'
              ? '1 пересадка'
              : `${data.transfers} пересадки`
    }, [data])

    const currencyValue = useMemo(() => {
        let curr = { price: '', symbol: '' }
        if (currency === '1') {
            curr = { price: formatPrice(data.priceRUB), symbol: '₽' }
        } else if (currency === '2') {
            curr = { price: data.priceUSD, symbol: '$' }
        } else {
            curr = { price: data.priceEUR, symbol: '€' }
        }
        return curr
    }, [currency])

    return (
        <div className={classes.container}>
            <div className={classes.leftWrapper}>
                <img src={Logo} alt="airline" width={200} height={50} />
                <button className={classes.buyBtn}>
                    <span>Купить</span>
                    <span>
                        {currencyValue.price}
                        <b>{currencyValue.symbol}</b>
                    </span>
                </button>
            </div>
            <div className={classes.rightWrapper}>
                <div className={classes.infoWrapper}>
                    <span className={classes.time}>{data.fromTime}</span>
                    <span className={classes.city}>{data.from}</span>
                    <span className={classes.date}>{data.fromStreet}</span>
                </div>

                <div className={classes.transfersWrapper}>
                    <span className={classes.transfers}>{transfersTitle}</span>
                    <div className={classes.transfersIconWrapper}>
                        <IoIosAirplane />
                    </div>
                </div>

                <div className={classes.infoWrapper}>
                    <span className={classes.time}>{data.toTime}</span>
                    <span className={classes.city}>{data.to}</span>
                    <span className={classes.date}>{data.toStreet}</span>
                </div>
            </div>
        </div>
    )
}

export default Ticket
