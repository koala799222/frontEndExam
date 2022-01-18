import { render, screen } from "@testing-library/react"
import React from "react"
import Root from "../component/Root"

test("renders learn react link", () => {
  render(<Root />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
