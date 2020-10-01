import React, { useState } from "react"

const Select = ({ options, handleChange }) => {

    const [selected, setSelected] = useState({ value: "", text: "" })

    const getTextOption = (change) => {
        const selectedOption = options.filter((opt) => {
            return opt.value === change.value && opt
        })
        setSelected({ value: change.value, text: selectedOption[0].text })
        handleChange(change)
    }

    return (
        <>
            <span>Nível</span>
            {/* {console.log(selected)} */}
            <select data-testid="position" onChange={(e) => getTextOption(e.target)}>
                <option value="" selected disabled>
                    Selecione seu nível
                </option>
                {options.map((option, key) => {
                    return <option key={key} value={option.value}>{option.text}</option>
                })}
            </select>
            {selected.value && <div data-testid="selecionado">Seu cargo é {selected.text}</div>}
        </>
    )
}

export default Select