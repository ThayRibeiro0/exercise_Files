import { getByText, render } from "@testing-library/react"
import { Star } from "./Star"

test("renders an h1", () => {
    const { getByText } = render(<Star />)
    const h1 = getByText(/COOL STAR/)
    expect(h1).toHaveTextContent("COOL STAR")
})