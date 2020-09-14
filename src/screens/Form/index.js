import React, { useState } from "react";
import { Title, Label, Button } from "./styles";

function Form() {
  const [hasPet, setHasPet] = useState(false);

  const handleSubmit = (form) => {
    form.preventDefault();
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
        <span>Nível</span>
        <select name="position">
          <option value="" selected disabled>
            Selecione seu nível
          </option>
          <option value="junior">Júnior</option>
          <option value="mid">Pleno</option>
          <option value="senior">Senior</option>
          <option value="god">Topper das Galáxias</option>
        </select>
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
