import React from 'react'
import FaceExpression from "../../Expressions/components/FaceExpression"
import Player from '../components/player'
import { useSong } from '../hooks/useSong'
import"../style/home.scss"
const Home = () => {

const {HandleSong} =useSong()

  return (
    
 
    <div className="home">

     <div className="hero">

  <p className="hero__badge">
    AI Powered Music Experience
  </p>

  <h1>
    MOOD<span>IFY</span>
  </h1>

  <p className="hero__subtitle">
    Discover songs that adapt to your emotions in real time.
    Let AI understand your mood and build the perfect soundtrack.
  </p>

</div>

      <div className="dashboard">

        <FaceExpression
          onClick={(expression) => {
            HandleSong(expression);
          }}
        />

        <Player />

      </div>

    </div>
  );
};
 
 
export default Home