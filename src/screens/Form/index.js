import React, { useState } from "react"
import Select from "../../components/Select"
import Modal from "../../components/Modal"
import { SELECT_VALUES } from "../../constants"
import { formatDate } from "../../utils/formatDate"
import { Content, Title, Label, Button, Image } from "./styles"

function Form() {
  const [formResult, setFormResult] = useState({
    name: "Teste",
    birthDate: "11/11/1111",
    position: "teste",
    class: "teste",
    pet: "on",
    petName: "lucas",
  })

  const [hasPet, setHasPet] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const handleSubmit = (form) => {
    form.preventDefault()
    setModalOpen(true)
  }

  const handleChange = (change) => {
    setFormResult({ ...formResult, [change.name]: change.value })
  }

  const handleDateInput = (e) => {
    const filtered = e.target.value.replace(/\D/g, "")
    setFormResult({ ...formResult, [e.target.name]: formatDate(filtered) })
  }

  return (
    <Content>
      {modalOpen && <Modal data={formResult} />}
      <form onSubmit={handleSubmit}>
        <Title>Meetup Form</Title>
        <Label>
          <span>Nome</span>
          <input type="text" name="name" placeholder="Fulana" onChange={(e) => handleChange(e.target)} />
        </Label>
        <Label>
          <span>Data de Nascimento</span>
          <input type="text" name="birthDate" value={formResult.birthDate} onChange={handleDateInput} />
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
              checked={formResult.class === "worker"}
            />
            <span>Classe operária</span>
          </label>
          <label>
            <input
              type="radio"
              name="class"
              value="bourgeoisie"
              onChange={(e) => handleChange(e.target)}
              checked={formResult.class === "bourgeoisie"}
            />
            <span>Burguês safado</span>
          </label>
        </Label>
        <label>
          <input
            type="checkbox"
            name="pet"
            checked={hasPet}
            onChange={(e) => handleChange(e.target)}
            onClick={() => setHasPet(!hasPet)}
          />
          <span>Marque se você possuir um pet</span>
        </label>
        {hasPet && (
          <Label>
            <span>Qual seu pet?</span>
            <input type="text" name="petName" onChange={(e) => handleChange(e.target)} />
          </Label>
        )}
        <Button>Enviar</Button>
      </form>
      <Image />
    </Content>

  )
}

export default Form
