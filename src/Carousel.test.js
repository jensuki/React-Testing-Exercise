import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it('renders without crashing', () => {
  render(<Carousel photos={TEST_IMAGES} />);
})

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it('works when you click the left arrow', () => {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing" />)

  // move forward to the second image with right arrow first
  const rightArrow = container.querySelector('.bi-arrow-right-circle');
  fireEvent.click(rightArrow);

  // verify that image 2 of 3 is displayed
  expect(
    container.querySelector('img[alt="testing image 2"]'))
    .toBeInTheDocument();
  // verify that image 1 is no longer displayed
  expect(
    container.querySelector('img[alt="testing image 1"]'))
    .not.toBeInTheDocument();

  // click left arrow to go back to first image
  const leftArrow = container.querySelector('.bi-arrow-left-circle');
  fireEvent.click(leftArrow);

  // verify that image 1 of 3 is displayed again
  expect(
    container.querySelector('img[alt="testing image 1"]'))
    .toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2')
  ).not.toBeInTheDocument();
})

it('should hide the left arrow when on image 1 of 3', () => {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing" />)

  // on image 1 of 3 , left arrow should be hidden
  expect(
    container.querySelector('.bi-arrow-left-circle')
  ).not.toBeInTheDocument();

  // mimic moving forward to the last image 3 of 3
  const rightArrow = container.querySelector('.bi-arrow-right-circle');
  fireEvent.click(rightArrow)
  fireEvent.click(rightArrow)

  // verify right arrow hidden
  expect(
    container.querySelector('bi-arrow-right-circle')
  ).not.toBeInTheDocument();
})