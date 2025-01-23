import Carousel from 'react-bootstrap/Carousel'

export default function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/photo-man.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/photo-man.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel>
    )
}