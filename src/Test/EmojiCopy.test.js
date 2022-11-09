import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "../App"


test("Emoji copied test", () => {
    render(<App/>)

    const emojiResultsDiv = screen.getAllByTestId("emojiResultRow").at(0)
    fireEvent.click(emojiResultsDiv)
    expect(emojiResultsDiv.getAttribute("data-clipboard-text").length).toBeGreaterThan(0)
})
