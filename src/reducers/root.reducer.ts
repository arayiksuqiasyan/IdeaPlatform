import { createSlice } from '@reduxjs/toolkit'
import {
    CHECKBOXES_KEYS_ARR,
    defaultFilter,
    IDefaultFilter,
} from '../components/TicketFilter/constats.ts'
interface IState {
    filter: IDefaultFilter
}

const initialState: IState = {
    filter: defaultFilter,
}

export const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        handleFilter: (state, action) => {
            let newFilter = { ...state.filter, ...action.payload }
            const checkboxes = Object.entries(newFilter).filter(
                ([key, value]) => CHECKBOXES_KEYS_ARR.includes(key)
            )
            newFilter['all'] = checkboxes.every(([key, value]) => value)
            state.filter = newFilter
        },
    },
})

export const { handleFilter } = rootSlice.actions

export default rootSlice.reducer
