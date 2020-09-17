import React, { useState } from "react";

const Select = ({ options, handleChange }) => {

    const [selected, setSelected] = useState({ value: "", text: "" });

    return (
        <>
            <span>Nível</span>
            {console.log(selected)}
            <select name="position" onChange={(e) => setSelected({ value: e.target.value, text: e.target.text })}>
                <option value="" selected disabled>
                    Selecione seu nível
                </option>
                {options.map((option, key) => {
                    return <option key={key} value={option.value}>{option.text}</option>
                })}
            </select>
            {selected.value && <div>Seu cargo é {selected.text}</div>}
        </>
    )
}

export default Select;