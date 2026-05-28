import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
const RBCarousel = () => {
  // Replace these placeholders with your actual downloaded banner URLs
  const banners = [
    {
      id: 1,
      image: "https://wowslider.com/sliders/demo-44/data1/images/bridge.jpg",
      title: "First Slide",
      description: "This is the first slide description."
    },
    {
      id: 2,
      image: "https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg",
      title: "Second Slide",
      description: "This is the second slide description."
    },
    {
      id: 3,
      image: "https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg",
      title: "Third Slide",
      description: "This is the third slide."
    }
  ];

  return (
    <Container className="my-5 carousel-custom-container">
      <Carousel 
        indicators={true} 
        nextLabel="Next →" 
        prevLabel="← Prev"
        className="custom-carousel"
      >
        {banners.map((banner) => (
          <Carousel.Item key={banner.id}>
            <img
              className="d-block w-100 carousel-img"
              src={banner.image}
              alt={banner.title}
            />
            <Carousel.Caption className="custom-caption text-end">
              <h3>{banner.title}</h3>
              <p>{banner.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default RBCarousel;