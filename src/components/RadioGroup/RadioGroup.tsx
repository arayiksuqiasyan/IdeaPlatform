import { FC, useState } from 'react'
import classes from './RadioGroup.module.scss'
import classNames from 'classnames'

export interface RadioOption {
    id: string
    label: string
}

interface IProps {
    options: RadioOption[]
    onChange: (id: string) => void
    defaultId?: string
}

const RadioGroup: FC<IProps> = ({ options, onChange, defaultId }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(
        defaultId || null
    )

    const handleOptionChange = (id: string) => {
        setSelectedOption(id)
        onChange(id)
    }

    return (
        <div className={classes['radio-group']}>
            {options.map((option: RadioOption) => (
                <label
                    key={option.id}
                    className={classNames(classes['radio-option'], {
                        [classes.checked]: selectedOption === option.id,
                    })}
                >
                    <input
                        type="radio"
                        name="radioOptions"
                        value={option.id}
                        className={classes['radio-input']}
                        checked={selectedOption === option.id}
                        onChange={() => handleOptionChange(option.id)}
                    />
                    <span className={classes['radio-label']}>
                        {option.label}
                    </span>
                </label>
            ))}
        </div>
    )
}

export default RadioGroup
