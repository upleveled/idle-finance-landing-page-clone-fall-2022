/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
// import ellipse2 from './images/Ellipse2.png'
// import ellipse3 from './images/Ellipse3.png'
// import ellipse4 from './images/Ellipse4.png'
// import ellipse5 from './images/Ellipse5.png'
// import ellipse6 from './images/Ellipse6.png'
// import ellipse7 from './images/Ellipse7.png'
// import ellipse8 from './images/Ellipse8.png'
// import ellipse9 from './images/Ellipse9.png'
import bgCircles1 from './images/bgCircles-desktop1.svg';
import convex from './images/convex.svg';
import ellipse1 from './images/Ellipse1.png';
import euler from './images/euler.svg';
import lido from './images/lido.svg';
import { ReactComponent as Logo } from './images/logo.svg';
import pbtccrv from './images/PBTCCRV.svg';
import robot1 from './images/robot-1.png';
import robot2 from './images/robot-2.png';
import robot3 from './images/robot-3.png';

// import bgCircles2 from './images/bgCircles-desktop2.svg'
// import bgCircles3 from './images/bgCircles-desktop3.svg'
// import bgCircles4 from './images/bgCircles-desktop4.svg'
// import bgCircles5 from './images/bgCircles-desktop5.svg'

const mainStyles = css``;

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 52px;
  position: fixed;
  width: 100%;
  z-index: 2;
  backdrop-filter: blur(24px);
`;

const navStyles = css`
  margin-left: 40px;

  a {
    opacity: 0.6;
    transition: 0.3s opacity;
    margin-right: 40px;

    &:hover {
      opacity: 1;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  /*
    // This is another way of doing the margin
    a + a {
      margin-left: 40px;
    }
  */
`;

const buttonStyles = (variant) => css`
  background: #fff;
  color: #333;
  border-radius: 4px;
  padding: 11px 25px;
  font-weight: bold;
  font-size: 14px;

  ${variant === 'outline' &&
  css`
    background: transparent;
    color: #fff;
    border: 1px solid #ddd;
  `}
`;

const contentSectionStyles = css`
  padding: 133px 0;
  margin: 0 auto;
  width: 1110px;
`;

const heroBackgroundStyles = css`
  position: absolute;
  z-index: 0;

  img:nth-child(1) {
    width: 715px;
    height: auto;
  }

  img {
    position: absolute;
  }
`;

const heroVideoStyles = css`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 823px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  video {
    width: 100%;
  }
`;

const heroTextStyles = css`
  position: relative;
  z-index: 1;

  > div {
    width: 500px;

    @media (max-width: 1024px) {
      margin-top: 500px;
      width: 100%;
    }
  }

  h1 + div {
    font-size: 24px;
    font-weight: 300;
    line-height: 36px;
    margin-bottom: 60px;
  }
`;

const heroCtaStyles = css`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const productTextStyles = css``;

const productIntroStyles = css`
  display: flex;
  justify-content: space-between;

  > div {
    width: 430px;
  }
`;

const productIntroLeftStyles = css`
  div {
    opacity: 0.4;
    font-size: 17px;
  }

  h2 {
    margin-top: 20px;
  }
`;

const productIntroRightStyles = css`
  margin-top: -12px;
  line-height: 32px;
  font-weight: 300;
  opacity: 0.88;
  margin-bottom: 120px;
`;

const productOptionsStyles = css`
  display: grid;
  margin-right: 25px;
  grid-template-columns: repeat(3, 33%);
  gap: 20px;
`;

const productOptionStyles = css`
  background-color: #17202e;
  position: relative;
  border-radius: 14px;
`;

const productOptionGradientStyles = css`
  opacity: 0;
  transition: 0.4s opacity;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 14px;
  background: linear-gradient(
    360deg,
    #3643b9 -35.85%,
    #3643b8 -25.95%,
    #3441b7 -16.05%,
    #323fb4 -6.15%,
    #2f3bb0 3.76%,
    #2a37aa 13.66%,
    #2532a4 23.56%,
    #202c9d 33.46%,
    #1a2795 43.37%,
    #15218e 53.27%,
    #101c88 63.17%,
    #0b1882 73.07%,
    #08147e 82.98%,
    #06127b 92.88%,
    #04107a 102.78%,
    #041079 112.68%
  );

  *:hover > & {
    opacity: 1;
  }
`;

const productOptionGridStyles = css`
  display: grid;
  grid-template-areas:
    'image image'
    'intro intro'
    'percent token'
    'cta1 cta2'
    'credits credits';
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  position: relative;
  z-index: 1;
  padding: 30px 40px 30px;
  text-align: center;
`;

const productOptionImageStyles = css`
  grid-area: image;

  img {
    margin-bottom: 10px;
  }
`;

const productOptionIntroStyles = css`
  grid-area: intro;
  margin-bottom: 30px;

  div:nth-child(1) {
    font-size: 12px;
    opacity: 0.6;
    font-weight: 500;
  }

  div:nth-child(2) {
    font-size: 28px;
    line-height: 48px;
    margin-bottom: 15px;
  }

  div:nth-child(3) {
    font-size: 12px;
    line-height: 22px;
    opacity: 0.88;
  }
`;

const productOptionPercentStyles = css`
  grid-area: percent;
  border-right: 1px solid #666;
  width: 100%;
  margin-bottom: 30px;

  div:nth-child(1) {
    font-size: 12px;
    opacity: 0.6;
    font-weight: 500;
  }

  div:nth-child(2) {
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 15px;
  }
`;

const productOptionTokenStyles = css`
  grid-area: token;
  margin-bottom: 30px;

  div:nth-child(1) {
    font-size: 12px;
    opacity: 0.6;
    font-weight: 500;
  }

  div:nth-child(2) {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 15px;
  }

  img {
    vertical-align: middle;
    width: 26px;
  }
`;

const productOptionCta1Styles = css`
  grid-area: cta1;
`;

const productOptionCta2Styles = css`
  grid-area: cta2;
`;

const productOptionCreditsStyles = css`
  grid-area: credits;
`;

export default function App() {
  return (
    <div css={mainStyles}>
      <header css={headerStyles}>
        {/*
          Alternative: import the image using an import
          line like this:

          import logo from './images/logo.svg';
          <img src={logo} alt="Idle finance" />
        */}
        <Logo width="79" height="36" />

        <nav css={navStyles}>
          <a href="#abc">Analytics</a>
          <a href="#abc">Docs</a>
          <a href="#abc">Governance</a>
          <a href="#abc">Security</a>
        </nav>

        <a href="#abc" css={buttonStyles()}>
          Enter App
        </a>
      </header>

      <main>
        <section>
          <div css={heroBackgroundStyles}>
            <img src={ellipse1} alt="" />
            <img src={bgCircles1} alt="" />
          </div>

          <div css={[heroTextStyles, contentSectionStyles]}>
            <div>
              <h1>The Yield Automation Protocol</h1>
              <div>
                DeFi yields aren’t easy to manage.
                <br />
                Idle makes you feel like they are
              </div>
              <div css={heroCtaStyles}>
                <a href="#abc" css={buttonStyles()}>
                  Enter App
                </a>
                <a href="#abc">Read The Documentation</a>
              </div>
            </div>
          </div>

          <div css={heroVideoStyles}>
            <video src="/hero-desktop.webm" autoPlay muted loop>
              <track kind="captions" />
            </video>
          </div>
        </section>

        <section>
          <div css={[productTextStyles, contentSectionStyles]}>
            <div css={productIntroStyles}>
              <div css={productIntroLeftStyles}>
                <div>Yield optimization and risk tranching</div>
                <h2>
                  Get the yield best <br />
                  suited for your needs
                </h2>
              </div>

              <div css={productIntroRightStyles}>
                Achieve capital efficiency with Idle’s products: as a leading
                DeFi yield aggregator, Idle offers first-rate yield optimization
                and risk tranching strategies. Get the best yield by using,
                integrating or building on top of Idle’s products. Money should
                never sit still.
              </div>
            </div>

            <div css={productOptionsStyles}>
              <div css={productOptionStyles}>
                <div css={productOptionGradientStyles} />
                <div css={productOptionGridStyles}>
                  <img src={robot1} alt="" />
                </div>
              </div>

              <div css={productOptionStyles}>
                <div css={productOptionGradientStyles} />
                <div css={productOptionGridStyles}>
                  <div css={productOptionImageStyles}>
                    <img src={robot2} alt="" />
                  </div>
                  <div css={productOptionIntroStyles}>
                    <div>Senior Tranche</div>
                    <div>Protected Yield</div>
                    <div>
                      The innovative safeguarded strategy covered by the
                      counterpart Junior Tranche
                    </div>
                  </div>
                  <div css={productOptionPercentStyles}>
                    <div>APY</div>
                    <div>9.08%</div>
                  </div>
                  <div css={productOptionTokenStyles}>
                    <div>Token</div>
                    <div>
                      <img src={pbtccrv} alt="" /> PBTCCRV
                    </div>
                  </div>
                  <div css={productOptionCta1Styles}>
                    <a href="#abc" css={buttonStyles()}>
                      Launch
                    </a>
                  </div>
                  <div css={productOptionCta2Styles}>
                    <a href="#abc" css={buttonStyles('outline')}>
                      Integrate
                    </a>
                  </div>
                  <div css={productOptionCreditsStyles}>
                    Powered By:
                    <div>
                      <img src={convex} alt="Convex" />
                      <img src={lido} alt="Lido" />
                      <img src={euler} alt="Euler" />
                    </div>
                  </div>
                </div>
              </div>
              <div css={productOptionStyles}>
                <div css={productOptionGradientStyles} />
                <div css={productOptionGridStyles}>
                  <img src={robot3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        {/* footer content here */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </footer>
    </div>
  );
}
