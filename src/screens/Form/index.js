import React, { useState, useEffect } from "react";
import Select from '../../components/Select'
import { SELECT_VALUES } from '../../constants'
import { Title, Label, Button } from "./styles";

function Form() {
  const [formResult, setFormResult] = useState({
    name: '', birthDate: '', position: '', class: '', pet: '', petName: ''
  })

  const [hasPet, setHasPet] = useState(false);

  useEffect(() => {
    console.log(formResult)
  }, [formResult])

  const handleSubmit = (form) => {
    form.preventDefault();
  };

  const handleChange = (change) => {
    setFormResult({...formResult, [change.target.name]: change.target.text })
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title>Meetup Form</Title>
      <Label>
        <span>Nome</span>
        <input type="text" name="name" placeholder="Fulana" />
      </Label>
      <Label>
        <span>Data de Nascimento</span>
        <input type="text" name="birthDate" />
      </Label>
      <Label>
        <Select options={SELECT_VALUES} />
      </Label>
      <Label>
        <span>Quem é você nesse mundo?</span>
        <label>
          <input type="radio" name="class" value="worker" />
          <span>Classe operária</span>
        </label>
        <label>
          <input type="radio" name="class" value="bourgeoisie" />
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
  );
}

export default Form;
