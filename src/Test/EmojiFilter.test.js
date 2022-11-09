import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "../App"

test("Filtered emoji list", () => {
    render(<App/>)
    const input = screen.getByTestId("searchInput")
    const emojiResultsDiv = screen.getAllByTestId("emojiResultRow")
    fireEvent.change(input, { target: { value: "100"}})
    expect(emojiResultsDiv.length).toBe(1)
})

