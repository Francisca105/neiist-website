import React, { useState, useEffect } from "react"
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Carousel from 'react-bootstrap/Carousel'

const HashCode = () => {
    const [carouselImages, setCarouselImages] = useState([])

    return (
        <>
            <NavBar />
            <Carousel style={{ margin: "10px 20vw" }}>
                {
                    carouselImages.map(carouselImage =>
                        <Carousel.Item key={carouselImage.sys.id}>
                            <img
                                style={{ display: "block", width: "100%" }}
                                src={`https:${carouselImage.fields.image.fields.file.url}?w=1500`}
                                alt={carouselImage.fields.title}
                            />
                            <Carousel.Caption>
                                <h3>{carouselImage.fields.title}</h3>
                                <p>{carouselImage.fields.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                }
            </Carousel>
            <Footer />
        </>
    )
}

export default HashCode