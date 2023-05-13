import styles from './styles'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const ServiceCard = () => {
  const firstCapitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  const [hoveredCard, setHoveredCard] = useState(null);
  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  }
  const services = [
    {
      "id": 1, "name": "Dog bath", "img": '/serviceIcon/dog-bath.png',
      "desc": "Our dog bath service at the pet store provides a thorough and gentle cleaning for your furry friend. Our trained professionals use only high-quality dog-friendly shampoo and ensure that your pet is comfortable and happy throughout the process."
    },
    {
      "id": 2, "name": "Cat bath", "img": '/serviceIcon/cat-bath.jpg',
      "desc": "Our Cat bath service provides gentle and thorough cleaning for your feline friend. Our trained professionals use cat-friendly shampoo to ensure your cat is comfortable and relaxed throughout the process."
    },
    {
      "id": 3, "name": "Dog walking", "img": '/serviceIcon/dog-walking.png',
      "desc": "Our dog walking service provides a convenient and reliable way to ensure that your furry friend gets the exercise and stimulation they need. Our trained and experienced dog walkers will come to your home, leash up your dog, and take them for a walk around the neighborhood or a nearby park."
    },
  ]
  return (
    <div className="elementor-column">
      <div className="elementor-column-wrapper">
        <div className="woocommerce">
          <ul className="products">
            {services.map((service) => (
              <li
                className={`product-wrapper ${hoveredCard === service.id ? 'hovered' : ''}`}
                key={service.id}
                onMouseEnter={() => handleCardHover(service.id)} // Set hovered card when mouse enters
                onMouseLeave={() => handleCardHover(null)} // Reset hovered card when mouse leaves
              >
                <div className="product">
                  <div className="product-img">
                    <Image
                      src={service.img ? service.img : '/images/no-image.png'}
                      width={400}
                      height={400}
                      objectFit="cover"
                    />
                  </div>
                  <div className="product-detail">
                    <span className="product-category" style={{ "fontSize": "20px" }}>{firstCapitalize(service.name)}</span>
                    {hoveredCard === service.id && (
                      // Show description and "Book Now" button when card is hovered

                      <div className="card-hover-content">
                        <p style={{ "textAlign": "justify", "fontWeight": "normal", "marginBottom":"15px"}}>{service.desc}</p>
                        
                        <a href="/services/form">
                          <button className="book-now-button">Book Now</button>
                        </a>

                      </div>
                    )}
                  </div>

                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default ServiceCard
