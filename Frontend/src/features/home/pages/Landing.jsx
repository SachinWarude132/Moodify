import { Link } from "react-router";
import "../style/landing.scss";

const Landing = () => {
  return (
    <main className="landing">

      <section className="hero">
        <div className="hero__content">

          <p className="hero__tag">
            AI Powered Music Recommendation
          </p>

          <h1>
            Discover Music Through
            <span> Emotion</span>
          </h1>

          <p className="hero__description">
            Moodify uses AI facial expression detection to understand
            your emotions and instantly recommend music that matches
            your mood.
          </p>

          <div className="hero__actions">
            <Link className="button" to="/login">
              Login
            </Link>

            <Link
              className="button button--secondary"
              to="/register"
            >
              Register
            </Link>
          </div>

        </div>

        <div className="hero__image">
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=900"
            alt="Music"
          />
        </div>
      </section>

      <section className="moods">

        <div className="mood-card">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500"
            alt="Happy"
          />
          <h3>😊 Happy</h3>
        </div>

        <div className="mood-card">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500"
            alt="Sad"
          />
          <h3>😢 Sad</h3>
        </div>

        <div className="mood-card">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
            alt="Surprised"
          />
          <h3>😲 Surprised</h3>
        </div>

      </section>

      <section className="features">

        <div className="feature">
          <div className="feature__icon">🎭</div>
          <h3>Face Detection</h3>
          <p>
            Detect emotions using MediaPipe AI facial analysis.
          </p>
        </div>

        <div className="feature">
          <div className="feature__icon">🎵</div>
          <h3>Smart Recommendations</h3>
          <p>
            Receive music recommendations based on your mood.
          </p>
        </div>

        <div className="feature">
          <div className="feature__icon">▶</div>
          <h3>Instant Listening</h3>
          <p>
            Play music immediately after emotion detection.
          </p>
        </div>

      </section>

    </main>
  );
};

export default Landing;