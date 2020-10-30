import React from "react"
import CardItem from "./CardItem"
import "./Cards.css"

function Cards() {
  return (
    <div className="cards">
      <h1>Check these EPIC destinations out!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src="/images/image1.jpg" text="Pristine blue waters calm the mood in the tropical islands of the Philippines!" label="Getaway" path="/services" />
            <CardItem src="../images/image2.jpg" text="Trek the hills up north and watch the sun rise come out up close!" label="Adventure" path="/services" />
          </ul>
          <ul className="cards__items">
            <CardItem src="images/image3.jpg" text="If you are looking for a romantic escape, a relaxing vacation with access to a world-class spa, or a family vacation, this is the place." label="Luxury" path="/services" />
            <CardItem src="images/image4.jpg" text="Discover some of the beautiful routes in this area, no trekking experience necessary." label="Beginner-friendly" path="/services" />
            <CardItem src="images/image5.jpg" text="Travel with an expert guide or at your own leisure and admire the most beautiful alpine views in Europe." label="Adventure" path="/services" />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
