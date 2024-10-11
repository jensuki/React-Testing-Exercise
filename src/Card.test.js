import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";


// smoke tests

it('renders without crashing', () => {
    render(<Card
        caption={TEST_IMAGES[0].caption}
        src={TEST_IMAGES[0].src}
        currNum={1}
        totalNum={TEST_IMAGES.length} />);
})

it("renders without crashing", () => {
    render(<Card
        caption="Test caption"
        src="test.jpg"
        currNum={1}
        totalNum={3} />);
});

// snapshot tests

it('matches snapshot', () => {
    const { asFragment } = render(<Card
        caption={TEST_IMAGES[0].caption}
        src={TEST_IMAGES[0].src}
        currNum={1}
        totalNum={TEST_IMAGES.length} />)
    expect(asFragment()).toMatchSnapshot();
})