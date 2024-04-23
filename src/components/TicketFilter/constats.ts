import { RadioOption } from '../RadioGroup/RadioGroup.tsx'

export interface IDefaultFilter {
    currency: '1' | '2' | '3'
    all: boolean
    NoTransfers: boolean
    OneTransfer: boolean
    TwoTransfers: boolean
    ThreeTransfers: boolean
}

export const defaultFilter: IDefaultFilter = {
    currency: '1',
    all: false,
    NoTransfers: false,
    OneTransfer: false,
    TwoTransfers: false,
    ThreeTransfers: false,
}

export const CURRENCY_OPTIONS: RadioOption[] = [
    { id: '1', label: 'RUB' },
    { id: '2', label: 'USD' },
    { id: '3', label: 'EUR' },
]

export const CHECKBOXES_KEYS_ARR = [
    'NoTransfers',
    'OneTransfer',
    'TwoTransfers',
    'ThreeTransfers',
]
export type ICheckboxKey = keyof typeof CHECKBOXES_KEYS_ARR_MAP

export type ICheckboxValues =
    (typeof CHECKBOXES_KEYS_ARR_MAP)[keyof typeof CHECKBOXES_KEYS_ARR_MAP]

export const CHECKBOXES_KEYS_ARR_MAP = {
    NoTransfers: '0',
    OneTransfer: '1',
    TwoTransfers: '2',
    ThreeTransfers: '3',
}
