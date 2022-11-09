import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "../App"

test("first emoji row render test", () => {
    render(<App/>)
    const rowCount = screen.getAllByText("Click to copy emoji")
    expect(rowCount.length).toEqual(20)
})