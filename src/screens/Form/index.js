import React, { useState, useEffect } from "react"
import Select from "../../components/Select"
import { SELECT_VALUES } from "../../constants"
import { Title, Label, Button } from "./styles"

function Form() {
  const [formResult, setFormResult] = useState({
    name: "",
    birthDate: "",
    position: "",
    class: "",
    pet: "",
    petName: "",
  })
  const [date, setDate] = useState("")

  const [hasPet, setHasPet] = useState(false)

  useEffect(() => {
    // console.log(formResult);
  }, [formResult])

  const handleSubmit = (form) => {
    form.preventDefault()
  }

  const handleChange = (change) => {
    // console.log(change)
    setFormResult({ ...formResult, [change.name]: change.value })
  }

  const handleDateInput = (e) => {
    // console.log("match: ", e.target.value.match(/\d*/))
    setDate(e.target.value.match(/\d*/)[0])
  }

  return (
    <form onSubmit={handleSubmit}>
      <Title>Meetup Form</Title>
      <Label>
        <span>Nome</span>
        <input type="text" name="name" placeholder="Fulana" />
      </Label>
      <Label>
        <span>Data de Nascimento</span>
        <input
          type="text"
          name="birthDate"
          value={date}
          onChange={handleDateInput}
        />
      </Label>
      <Label>
        <Select options={SELECT_VALUES} handleChange={handleChange} />
      </Label>
      <Label>
        <span>Quem é você nesse mundo?</span>
        <label>
          <input
            type="radio"
            name="class"
            value="worker"
            onChange={(e) => handleChange(e.target)}
            checked={formResult.class === 'worker'}
          />
          <span>Classe operária</span>
        </label>
        <label>
          <input
            type="radio"
            name="class"
            value="bourgeoisie"
            onChange={(e) => handleChange(e.target)}
            checked={formResult.class === 'bourgeoisie'}
          />
          <span>Burguês safado</span>
        </label>
      </Label>
      <label>
        <input
          type="checkbox"
          name="pet"
          checked={hasPet}
          onClick={() => setHasPet(!hasPet)}
        />
        <span>Marque se você possuir um pet</span>
      </label>
      {hasPet && (
        <Label>
          <span>Qual seu pet?</span>
          <input type="text" name="petName" />
        </Label>
      )}
      <Button>Enviar</Button>
    </form>
  )
}

export default Form
