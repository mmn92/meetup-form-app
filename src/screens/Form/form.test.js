import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Form from ".";

describe("Form tests", () => {

    it("the title should be visible", () => {
        const { getByText } = render(<Form />);

        expect(getByText('Meetup Form')).toBeInTheDocument();
    });

    it("the input must update the value", async () => {
        const name = "Fulana Antonia"
        const { getByPlaceholderText, getByText } = render(<Form />);

        const input = getByPlaceholderText("Fulana")

        fireEvent.change(input, name);

        expect(getByText(name)).toBeInTheDocument();
    })

    it("the select update option", async () => {
        const { getByRole, getByText } = render(<Form />);

        const select = getByRole("combobox");

        fireEvent.change(select, { target: { value: "mid" } });

        await waitFor(() => getByText(select, "Pleno"));
        expect(select.getByText("Pleno")).toBeInTheDocument();
    })
});