import React from "react"
import { Button } from "./Button.js"
import "../App.css"
import "./HeroSection.css"

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video1.mp4" autoPlay loop muted />
      <h1>EXCITING ADVENTURES UNFOLD</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          GET STARTED
        </Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection