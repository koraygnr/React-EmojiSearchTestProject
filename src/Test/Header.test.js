import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "../App"


test("header render test", () => {
    render(<App/>)
    const HeaderDiv = screen.getByText(/Emoji Search/i)
    expect(HeaderDiv).toBeInTheDocument()
})