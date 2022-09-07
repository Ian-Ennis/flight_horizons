import { render, screen} from '@testing-library/react'
import Home from '../Components/Home'

test('it renders the Home screen', () => {
    render(<Home />)

    // const button = screen.getByRole('button')
    // expect(button).toBeInTheDocument();
})