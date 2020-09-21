import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { SELECT_VALUES } from '../../constants'
import Select from ".";

describe("Select test", () => {

    afterEach(cleanup)

    it("should be render select change value", async () => {
        const { getByTestId, getByText } = render(<Select options={SELECT_VALUES} handleChange={() => {}} />);

        fireEvent.change(getByTestId("position"), { target: { value: "senior" }});

        expect(getByTestId("selecionado")).toBeInTheDocument();

        expect(getByText("Seu cargo é Senior")).toBeInTheDocument();
    })
});