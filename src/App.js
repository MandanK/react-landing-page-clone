/** @jsxImportSource @emotion/react */
//import './App.css';
import './style.css';
import { css, keyframes } from '@emotion/react';
import AppStoreBadge from './images/app-store-badge.png';
import CalmariaImage2 from './images/calmaria-2front.png';
import CalmariaImage3 from './images/calmaria-3pers.png';
import GoogleBadge from './images/google-play-badge.png';
import SunImage from './images/sun.png';

const wrapperStyle = css`
  overflow-x: hidden;
`;

const containerStyle = css`
  margin: 0 auto;
  position: relative;
  max-width: 1440px;
  padding: 32px;
`;

const section1Style = css`
  z-index: 100;
  background: #ffffff;
  color: #000000;
  display: block;

  h1 {
    font-stretch: 100%;
    font-size-adjust: none;
    font-feature-settings: normal;
    font-kerning: auto;
    font-style: bold;
    font-size: 48px;
    font-weight: 800;
    line-height: 120%;
    color: #000000;
    margin: 0px;
    padding: 0px;
  }

  h2 {
    margin: 0px;
    padding: 0px;
    font-size: 34px;
    color: #000000;
    font-weight: 900;
    position: absolute;
    bottom: 750px;
    line-height: 140%;
  }
`;

const playBadgeStyle = css`
  position: absolute;
  width: 180px;
  border-bottom: none;
  right: 32px;
  bottom: 260px;
  bottom: auto;
  top: 610px;
`;

const appStoreBadgeStyle = css`
  position: absolute;
  width: 157px;
  border-bottom: none;
  right: 32px;
  bottom: 180px;
  padding: 12px;
  bottom: auto;
  top: 543px;
`;
const heroImageStyle = css`
  position: relative;
  width: 1280px;
  margin: 0 auto;
  z-index: 100000;
`;

const heroStyle = css`
  display: block;
  width: 1280px;
  height: auto;
  img {
    width: 1024px;
    z-index: 10000;
  }
`;

const section2Style = css`
  background: var(--background);
  margin-top: -728px;
  padding: 585px 0 0 0;
  color: #fff;

  p {
    margin-bottom: 24px;
    max-width: 66%;
  }

  p:nth-child(3) {
    margin-bottom: 150px;
  }
`;
const imageStyle = css`
  width: 1280px;
  align-items: center;
  margin: 32px;
`;

const p3Style = css`
  margin-bottom: 150px;
`;

const section3Style = css`
  background: #ffffff;
  margin-top: -850px;
  padding: 728px 0 0 0;

  span {
    display: block;
    margin: 8px 0 24px 0;
  }
  p {
    max-width: 66%;
  }
`;

const breathingKeyFrames = keyframes`
  0% {
    transform: scale(0.6);
  }
  19.04% {
    transform: scale(1);
  }
  53% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.6);
  }
`;

const animationStyle = css`
  display: block;
  position: absolute;
  top: 430px;
  width: 320px;
  height: 320px;
  left: calc(50% - 160px);
  background: var(--background);
`;
const sunAnimation = css`
  width: 100%;
  height: auto;
  animation-fill-mode: forwards;
  animation-name: ${breathingKeyFrames};
  animation-duration: 19s;
  animation-iteration-count: 4;
  animation-timing-function: ease-in-out;
`;

const lineAnimation = css`
  z-index: 1000;
  position: absolute;
  left: 0;
  bottom: 4px;
  width: 100%;
`;

const aStyle = css`
  color: var(--primary-color);
  text-decoration: none;
  border-bottom: 2px solid #feed07;
  border-bottom: 2px solid #feed07;
`;

const playBadgeS4Style = css`
  position: absolute;
  width: 180px;
  border-bottom: none;
  right: 32px;
  bottom: 260px;
`;

const appStoreBadgeS4Style = css`
  position: absolute;
  width: 157px;
  border-bottom: none;
  right: 32px;
  bottom: 180px;
  padding: 12px;
`;

const section4Style = css`
  background: #000000;
  color: #fff;
  margin-top: -528px;
  padding: 440px 0 0 0;
`;

const listStyle = css`
  font-size: 32px;
  line-height: 48px;
  margin-bottom: 16px;
  list-style-type: none !important;
`;

const ulStyle = css`
  padding-left: 0px;
  margin-left: 0px;
`;

const footerStyle = css`
  margin-top: 72px;
  opacity: 0.5;
  font-size: 14px;
`;

function App() {
  return (
    <div css={wrapperStyle}>
      <section css={section1Style}>
        <div css={containerStyle}>
          <h1>Calmaria</h1>
          <h2>
            Focus /
            <br />
            Breathe /
            <br />
            Relax /
          </h2>
          <div>
            <a href="https://play.google.com/store/apps/details?id=com.abdz.breathing">
              <img
                css={playBadgeStyle}
                src={GoogleBadge}
                alt="Google Play Icon"
              />
            </a>
          </div>
          <div>
            <a href="https://apps.apple.com/us/app/calmaria/id1523108871">
              <img
                css={appStoreBadgeStyle}
                src={AppStoreBadge}
                alt="App Store Icon"
              />
            </a>
          </div>
          <div css={heroImageStyle}>
            <img
              css={heroStyle}
              src="https://calmaria.app/images/calmaria_front.png"
              alt="A Mobile Phone with Calmaria Logo on Screen"
            />
            <div css={animationStyle}>
              <img
                src={SunImage}
                alt="A Bright Sun On a Mobile Screen"
                css={sunAnimation}
              />
              <img
                src="https://calmaria.app/images/sunset_lines.svg"
                alt="Sun Set On a Mobile Phone Screen"
                css={lineAnimation}
              />
            </div>
          </div>
        </div>
      </section>
      <section css={section2Style}>
        <div css={containerStyle}>
          <p>
            Access to information has helped us evolve rapidly but not without
            side effects. Misinformation and the strong polarization of opinions
            are amplified by our confirmation bias tendencies. What to believe,
            who is right, who is wrong?
          </p>
          <p>
            Questions with no answers inevitably create anxiety. The good news
            is that there is a simple way to reduce it, just breathe. It works!
          </p>
          <p css={p3Style}>
            There are several different breathing techniques and exercises that
            are designed to bring your body to a deep relaxation state. Holding
            your breath for a period of time allows your body to better
            oxygenate. One of the simplest techniques is the 4-7-8 method which
            is simply inhaling for 4 seconds, holding your breath for 7 seconds
            and exhaling for 8 seconds.
          </p>
          <img
            css={imageStyle}
            src={CalmariaImage3}
            Alt="Three Mobile Phone Together"
          />
        </div>
      </section>
      <section css={section3Style}>
        <div css={containerStyle}>
          <h2>Calmaria</h2>
          <span>[ feminine ] /kɑʊma’ɾia/</span>
          <p>
            In Portuguese means calmness, tranquility, calm. It’s often used by
            seamen and surfers to indicate that there are no waves in the ocean.
            That mood perfectly translates to what this app intends to do, bring
            peace of mind and tranquility to your busy day to day life. Just
            breathe and relax.
          </p>
          <img
            css={imageStyle}
            src={CalmariaImage2}
            Alt="Two Mobile Phones with calmaria Logo on Screen"
            g
          />
        </div>
      </section>
      <section css={section4Style}>
        <div css={containerStyle}>
          <p>Available for</p>
          <ul css={ulStyle}>
            <li css={listStyle}>
              <a
                css={aStyle}
                href="https://play.google.com/store/apps/details?id=com.abdz.breathing"
              >
                Android
              </a>
            </li>
            <li css={listStyle}>
              <a
                css={aStyle}
                href="https://apps.apple.com/us/app/calmaria/id1523108871"
              >
                iOS
              </a>
            </li>
            <li css={listStyle}>
              <a css={aStyle} href="https://calmaria.app/pwa/">
                PWA Progressive Web App
              </a>
            </li>
          </ul>
          <p></p>
          <div>
            <a href="https://play.google.com/store/apps/details?id=com.abdz.breathing">
              {' '}
              <img
                css={playBadgeS4Style}
                src={GoogleBadge}
                Alt="Google Play Icon"
              />{' '}
            </a>
            <a href="https://apps.apple.com/us/app/calmaria/id1523108871">
              {' '}
              <img
                css={appStoreBadgeS4Style}
                src={AppStoreBadge}
                alt="Apple Store Icon"
              />{' '}
            </a>
          </div>
          <footer css={footerStyle}>
            Proudly designed and developed by the folks over at
            <a css={aStyle} href="https://abduzeedo.com/">
              {' '}
              abdz.do{' '}
            </a>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default App;
