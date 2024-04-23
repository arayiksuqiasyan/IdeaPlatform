import React, { FC, ChangeEvent } from 'react'
import classes from './TicketFilter.module.scss'

import Checkbox from '../Checkbox/Checkbox.tsx'
import RadioGroup from '../RadioGroup/RadioGroup.tsx'
import { handleFilter } from '../../reducers/root.reducer.ts'
import { CURRENCY_OPTIONS, defaultFilter } from './constats.ts'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxUtils.ts'

interface ITicketFilter {}

const TicketFilter: FC<ITicketFilter> = () => {
    const dispatch = useAppDispatch()
    const { filter } = useAppSelector((state) => state.root)

    const onChangeCheckboxes = (e: ChangeEvent<HTMLInputElement>) => {
        let { name, checked } = e.target
        if (e.target.name === 'all') {
            dispatch(
                handleFilter({
                    all: checked,
                    NoTransfers: checked,
                    OneTransfer: checked,
                    TwoTransfers: checked,
                    ThreeTransfers: checked,
                })
            )
        } else {
            dispatch(handleFilter({ [name]: checked }))
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.radioGroupWrapper}>
                <span className={classes.title}>ВАЛЮТА</span>
                <RadioGroup
                    options={CURRENCY_OPTIONS}
                    defaultId={defaultFilter.currency}
                    onChange={(id: string) =>
                        dispatch(handleFilter({ currency: id }))
                    }
                />
            </div>
            <div className={classes.transfers}>
                <span className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
                <Checkbox
                    name={'all'}
                    label={'Все'}
                    checked={filter.all}
                    onChange={(e) =>
                        onChangeCheckboxes(e as ChangeEvent<HTMLInputElement>)
                    }
                />
                <Checkbox
                    name={'NoTransfers'}
                    label={'Без пересадок'}
                    checked={filter.NoTransfers}
                    onChange={(e) =>
                        onChangeCheckboxes(e as ChangeEvent<HTMLInputElement>)
                    }
                />
                <Checkbox
                    name="OneTransfer"
                    label={'1 пересадка'}
                    checked={filter.OneTransfer}
                    onChange={(e) =>
                        onChangeCheckboxes(e as ChangeEvent<HTMLInputElement>)
                    }
                />
                <Checkbox
                    name="TwoTransfers"
                    label={'2 пересадки'}
                    checked={filter.TwoTransfers}
                    onChange={(e) =>
                        onChangeCheckboxes(e as ChangeEvent<HTMLInputElement>)
                    }
                />
                <Checkbox
                    name="ThreeTransfers"
                    label={'3 пересадки'}
                    checked={filter.ThreeTransfers}
                    onChange={(e) =>
                        onChangeCheckboxes(e as ChangeEvent<HTMLInputElement>)
                    }
                />
            </div>
        </div>
    )
}

export default TicketFilter
