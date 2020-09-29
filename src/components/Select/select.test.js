import React from "react";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import { SELECT_VALUES } from "../../constants";
import Select from ".";

describe("Select test", () => {
  afterEach(cleanup);

  it("should be render select change value", async () => {
    const { getByTestId, queryByTestId, getByText, getAllByRole } = render(
      <Select options={SELECT_VALUES} handleChange={() => {}} />
    );

    expect(getAllByRole("option")).toHaveLength(5);

    expect(queryByTestId("selecionado")).not.toBeInTheDocument();

    fireEvent.change(getByTestId("position"), { target: { value: "senior" } });

    expect(getByTestId("selecionado")).toBeInTheDocument();

    expect(getByText("Seu cargo é Senior")).toBeInTheDocument();
  });
});
