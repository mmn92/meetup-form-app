import React from "react";
import { render, cleanup } from "@testing-library/react";
import Modal from "."

const mockCommunist = {
    name: "Matheus",
    birthDate: "",
    position: "",
    class: "worker",
    pet: "on",
    petName: "Fantasma",
}

const mockBourgeoisie = {
    name: "Matheus",
    birthDate: "",
    position: "",
    class: "bourgeoisie",
    pet: "",
    petName: "",
}

describe("Modal test", () => {
    afterEach(cleanup);

    it("should be render modal communist", () => {
        const { getByText } = render(<Modal data={mockCommunist} />)

        expect(getByText("Bem vindo a luta, Matheus")).toBeInTheDocument();
    });

    it("should be render modal bourgeoisie debug", () => {
        const { debug, getByText } = render(<Modal data={mockBourgeoisie} />)

        debug();

        expect(getByText("Dados cadastrados, aguarde contato!")).toBeInTheDocument();
    });
})