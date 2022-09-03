import { render, screen } from "@testing-library/react"
import { LaunchDescription } from "./LaunchDescription"

describe("LaunchDescription", () => {
    test("renders correctly", () => {
        render(<LaunchDescription/>);
        const nameElement = screen.getByRole('link')
        expect(nameElement).toBeInTheDocument()
    })
})