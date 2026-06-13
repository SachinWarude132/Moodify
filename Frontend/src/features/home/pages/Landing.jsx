import { Link } from "react-router";
import "../style/landing.scss";

const Landing = () => {
return ( <main className="landing">

```
  <div className="landing__bg">
    <div className="blob blob--1"></div>
    <div className="blob blob--2"></div>
    <div className="blob blob--3"></div>
  </div>

  <section className="landing-hero">

    <div className="landing-hero__content">

      <p className="landing-hero__tag">
        AI Powered Music Recommendation
      </p>

      <h1>
        Discover Music Through
        <span> Emotion</span>
      </h1>

      <p className="landing-hero__description">
        Moodify uses AI facial expression detection to understand
        your emotions and instantly recommend music that matches
        your mood.
      </p>

      <div className="landing-hero__actions">
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

    <div className="landing-hero__image">

      <div className="landing-hero__image-glow"></div>

      <img
        src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200"
        alt="Music"
      />

    </div>

  </section>

  <section className="landing-features">

    <div className="landing-feature">
      <div className="landing-feature__icon">🎭</div>

      <h3>Face Detection</h3>

      <p>
        Detect emotions using MediaPipe AI facial analysis.
      </p>
    </div>

    <div className="landing-feature">
      <div className="landing-feature__icon">🎵</div>

      <h3>Smart Recommendations</h3>

      <p>
        Receive music recommendations based on your mood.
      </p>
    </div>

    <div className="landing-feature">
      <div className="landing-feature__icon">⚡</div>

      <h3>Instant Listening</h3>

      <p>
        Play music immediately after emotion detection.
      </p>
    </div>

  </section>

</main>
```

);
};

export default Landing;
