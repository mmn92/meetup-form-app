import React from "react";
import { render, fireEvent  } from "@testing-library/react";
import Form from ".";

describe("Form tests", () => {

    it("the title should be visible", () => {
        const { getByText } = render(<Form/>);

        expect(getByText('Meetup Form')).toBeInTheDocument();
    });

    it("the input must update the value", async () => {
        const name = "Fulana Antonia"
        const { getByPlaceholderText, getByText } = render(<Form/>);

        const input = getByPlaceholderText("Fulana")

        fireEvent.change(input,  name);

        expect(getByText(name)).toBeInTheDocument();
    })
});