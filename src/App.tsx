import TicketFilter from './components/TicketFilter/TicketFilter.tsx'
import React, { useEffect, useMemo, useState } from 'react'

import { useAppSelector } from './hooks/reduxUtils.ts'
import Ticket, { ITicket } from './components/Ticket/Ticket.tsx'
import {
    ICheckboxKey,
    IDefaultFilter,
    ICheckboxValues,
    CHECKBOXES_KEYS_ARR,
    CHECKBOXES_KEYS_ARR_MAP,
} from './components/TicketFilter/constats.ts'

function App() {
    const [ticketsData, setTicketsData] = useState([])
    const { filter } = useAppSelector((state) => state.root)

    const tickets: ITicket[] = useMemo(() => {
        const arr: ICheckboxValues[] = []
        Object.keys(filter).forEach((key: string) => {
            const value = filter[key as keyof IDefaultFilter]
            if (CHECKBOXES_KEYS_ARR.includes(key) && !!value) {
                arr.push(CHECKBOXES_KEYS_ARR_MAP[key as ICheckboxKey])
            }
        })
        return arr.length === 0
            ? ticketsData
            : ticketsData?.filter((el: ITicket) => arr.includes(el.transfers))
    }, [ticketsData, filter])

    useEffect(() => {
        fetch('../tickets.json')
            .then((res) => res.json())
            .then((data) => {
                setTicketsData(data.tickets)
            })
    }, [])

    return (
        <div className={'app'}>
            <TicketFilter />
            <div className={'ticket-wrapper'}>
                {tickets?.map((ticket: ITicket) => (
                    <Ticket
                        data={ticket}
                        key={ticket.id}
                        currency={filter.currency}
                    />
                ))}
            </div>
        </div>
    )
}

export default App
