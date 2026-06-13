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
        <h1>MODIFY</h1>
     <h1>
  Music that <span>matches</span> your mood
</h1>
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