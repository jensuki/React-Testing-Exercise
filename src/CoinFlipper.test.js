import { render, fireEvent, screen } from "@testing-library/react";
import CoinFlipper from './CoinFlipper';

it('renders without crashing', () => {
    render(<CoinFlipper />)
})

it('does not show a coin on initial load', () => {
    render(<CoinFlipper />);

    const coinImage = document.querySelector('img');
    expect(coinImage).not.toBeInTheDocument();
})

it('flips coin when button is clicked', () => {
    // render coin flipper component
    const { getByText } = render(<CoinFlipper />)
    const button = getByText('Flip Me!');

    // click flip coin button
    fireEvent.click(button);
    expect(screen.getByText((content) => content.includes('Out of 1'))).toBeInTheDocument();
})

it('updates text when coin lands heads or tails', () => {
    render(<CoinFlipper />)

    const button = screen.getByText('Flip Me!');
    fireEvent.click(button);

    expect(screen.getByText((content) => content.includes("Out of 1,"))).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText((content) => content.includes("Out of 2,"))).toBeInTheDocument();

})
