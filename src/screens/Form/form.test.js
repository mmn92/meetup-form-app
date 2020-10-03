import React from "react"
import { render, fireEvent, cleanup, screen } from "@testing-library/react"
import { formatDate } from '../../utils/formatDate'
import Form from "."

describe("Form tests", () => {
  afterEach(cleanup)

  it("should render the form title", () => {
    const { getByText } = render(<Form />)

    expect(getByText("Meetup Form")).toBeInTheDocument()
  })

  it("should update the text input value", async () => {
    const name = "Fulana Antonia"
    const { getByPlaceholderText } = render(<Form />)

    const input = getByPlaceholderText("Fulana")

    expect(input).toBeInTheDocument()

    fireEvent.change(input, { target: { value: name } })

    expect(input.value).toBe(name)
  })

  it("should only write numbers in date input", async () => {
    const text = "abc"
    const number = 1
    const { getByLabelText } = render(<Form />)

    const input = getByLabelText(/data de nascimento/i)

    expect(input).toBeInTheDocument()

    fireEvent.change(input, { target: { value: text } })
    expect(input.value).not.toBe(text)

    fireEvent.change(input, { target: { value: number } })
    expect(input.value).toBe(number.toString())
  })

  it("should write formatted numbers in date input", async () => {
    const number = 1111111
    const { getByLabelText } = render(<Form />)

    const input = getByLabelText(/data de nascimento/i)

    expect(input).toBeInTheDocument()

    fireEvent.change(input, { target: { value: number } })
    expect(input.value).toBe(formatDate(number.toString()))
  })

  it("should render the radio buttons", async () => {
    const { getAllByLabelText, getAllByRole } = render(<Form />)

    const input = getAllByLabelText(/Quem é você/)
    expect(input).toHaveLength(2)

    const radios = getAllByRole(/radio/)
    expect(radios[0].checked).toBe(false)

    fireEvent.click(radios[0])
    expect(radios[0].checked).toBe(true)
    expect(radios[1].checked).toBe(false)

    fireEvent.click(radios[1])
    expect(radios[0].checked).toBe(false)
    expect(radios[1].checked).toBe(true)
  })

  it("should render the checkbox", async () => {
    const { getByLabelText, queryByLabelText } = render(<Form />)

    const checkbox = getByLabelText(/Marque se você possuir um pet/)
    expect(checkbox).toBeInTheDocument()

    expect(queryByLabelText(/Qual seu pet/)).not.toBeInTheDocument()

    fireEvent.click(checkbox)
    const petInput = queryByLabelText(/Qual seu pet/)
    expect(petInput).toBeInTheDocument()

    const name = "Senhor Gato"
    fireEvent.change(petInput, { target: { value: name } })
    expect(petInput.value).toBe(name)
  })

  it("should submit form on button press", async () => {
    const { getByRole } = render(<Form />)

    const btn = getByRole('button')
    expect(btn).toBeInTheDocument()

    fireEvent.click(btn)
  })
})
