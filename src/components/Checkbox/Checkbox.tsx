import {
    forwardRef,
    ChangeEvent,
    ForwardedRef,
    RefAttributes,
    ForwardRefExoticComponent,
} from 'react'
import classNames from 'classnames'
import classes from './Checkbox.module.scss'

import { FaCheck } from 'react-icons/fa'

interface IProps {
    name?: string
    label?: string
    checked?: boolean
    disabled?: boolean
    onBlur?: () => void
    onChange: (event: ChangeEvent) => void
    ref?: ForwardedRef<HTMLInputElement>
}

const Checkbox: ForwardRefExoticComponent<
    Omit<IProps, 'ref'> & RefAttributes<HTMLLabelElement>
> = forwardRef((props, ref: ForwardedRef<HTMLLabelElement>) => {
    const {
        name = '',
        label = '',
        onBlur,
        checked,
        disabled = false,
        onChange,
    } = props || {}

    return (
        <label
            ref={ref}
            className={classNames(classes.container, {
                [classes.checked]: checked,
            })}
        >
            <span className={classes.checkmark}>{checked && <FaCheck />}</span>
            <input
                name={name}
                type="checkbox"
                checked={checked}
                disabled={disabled}
                onBlur={() => onBlur?.()}
                onChange={(event:ChangeEvent<HTMLInputElement>) => onChange(event)}
            />
            {!!label && <span className={classes.label}>{label}</span>}
        </label>
    )
})

export default Checkbox
