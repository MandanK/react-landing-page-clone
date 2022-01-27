/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';

const testStyle = css`
  background-color: red;
`;

function App() {
  return (
    <div id="project">
      <div id="home" class="">
        <section id="hero">
          <header
            class="container row sr-top-slow"
            data-sr-id="0"
            style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0.2s;"
          >
            <div class="logo row">
              <div class="picto"></div>
              <div class="typo">MekaVerse</div>
            </div>
            <div class="socialnav row">
              <div class="link">
                <a
                  href="https://twitter.com/MekaVerse"
                  name="twitternav"
                  rel="noopener"
                  target="_blank"
                  class="twitter row"
                ></a>
              </div>

              <div class="link">
                <a
                  href="https://discord.com/invite/mekaverse"
                  name="discordnav"
                  rel="noopener"
                  target="_blank"
                  class="discord row"
                ></a>
              </div>
              <div id="connect-btn" data-v-755c0851="">
                <button class="wallet" data-v-755c0851="">
                  <span class="dot" data-v-755c0851=""></span>
                  Connect wallet
                </button>
              </div>
            </div>
          </header>
          <a
            class="hero-main-btn clickable"
            href="https://opensea.io/collection/mekaverse"
            target="_blank"
          >
            <div class="element">
              <div class="text">View on Opensea</div>
            </div>
          </a>
          <div>
            <video id="hero-video" tabindex="0" preload="" playsinline="">
              <source src="images/hero_mn.mp4" type="video/mp4"></source>
            </video>
          </div>
        </section>
        <section id="presentation" class="container row">
          <div
            class="description sr-top-fast"
            data-sr-id="2"
            style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -20, 0, 1);"
          >
            <h2>
              <div class="degrade">8,888 unique Mekas</div>
              who need Drivers.{' '}
            </h2>
            <p>
              The MekaVerse is a collection of 8,888 generative Mekas with
              hundreds of elements inspired by the Japan Mecha universes.
            </p>
            <p>
              Each artwork is original, with its own color palette and creation.
              The objective was to make each Meka unique in order to prioritize
              quality above quantity.
            </p>
          </div>
          <div
            class="examples sr-top-fast-delayed"
            data-sr-id="7"
            style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -20, 0, 1);"
          >
            <video class="various" tabindex="0" preload="" autoplay="" loop="">
              <source src="images/various.mp4" type="video/mp4"></source>
            </video>
          </div>
        </section>
        <section
          id="gallery"
          class="sr-top-more-delayed"
          data-sr-id="12"
          style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -20, 0, 1);"
        >
          <section class="carousel" aria-label="Gallery">
            <div class="carousel__viewport">
              <ol
                class="carousel__track"
                style="transform: translateX(-1393px); transition: all 0ms ease 0s;"
              >
                <li class="carousel__slide" style="width: 50%; order: 8;">
                  <div class="carousel__item">
                    <img src="images/meka_01.jpg" alt="Meka Example 01"></img>
                  </div>
                </li>
                <li class="carousel__slide" style="width: 50%; order: 0;">
                  <div class="carousel__item">
                    <img src="images/meka_02.jpg" alt="Meka Example 02"></img>
                  </div>
                </li>
                <li class="carousel__slide" style="width: 50%; order: 1;">
                  <div class="carousel__item">
                    <img src="images/meka_03.jpg" alt="Meka Example 03"></img>
                  </div>
                </li>
                <li class="carousel__slide" style="width: 50%; order: 2;">
                  <div class="carousel__item">
                    <img src="images/meka_04.jpg" alt="Meka Example 04"></img>
                  </div>
                </li>
                <li
                  class="carousel__slide carousel__slide--prev"
                  style="width: 50%; order: 3;"
                >
                  <div class="carousel__item">
                    <img src="images/meka_05.jpg" alt="Meka Example 05"></img>
                  </div>
                </li>
                <li
                  class="carousel__slide carousel__slide--active carousel__slide--visible"
                  style="width: 50%; order: 4;"
                >
                  <div class="carousel__item">
                    <img src="images/meka_06.jpg" alt="Meka Example 06"></img>
                  </div>
                </li>
                <li
                  class="carousel__slide carousel__slide--next"
                  style="width: 50%; order: 5;"
                >
                  <div class="carousel__item">
                    <img src="images/meka_07.jpg" alt="Meka Example 07"></img>
                  </div>
                </li>
                <li class="carousel__slide" style="width: 50%; order: 6;">
                  <div class="carousel__item">
                    <img src="images/meka_08.jpg" alt="Meka Example 08"></img>
                  </div>
                </li>
                <li class="carousel__slide" style="width: 50%; order: 7;">
                  <div class="carousel__item">
                    <img src="images/meka_09.jpg" alt="Meka Example 09"></img>
                  </div>
                </li>
              </ol>
            </div>
            <ol class="carousel__pagination">
              <li class="carousel__pagination-item">
                <button
                  type="button"
                  class="carousel__pagination-button"
                ></button>
              </li>
              <li class="carousel__pagination-item">
                <button
                  type="button"
                  class="carousel__pagination-button"
                ></button>
              </li>
              <li class="carousel__pagination-item">
                <button
                  type="button"
                  class="carousel__pagination-button"
                ></button>
              </li>
              <li class="carousel__pagination-item">
                <button
                  type="button"
                  class="carousel__pagination-button"
                ></button>
              </li>
              <li class="carousel__pagination-item">
                <button
                  type="button"
                  class="carousel__pagination-button"
                ></button>
              </li>
              <li class="carousel__pagination-item">
                <button
                  type="button"
                  class="carousel__pagination-button carousel__pagination-button--active"
                ></button>
              </li>
              <li class="carousel__pagination-item">
                <button
                  type="button"
                  class="carousel__pagination-button"
                ></button>
              </li>
              <li class="carousel__pagination-item">
                <button
                  type="button"
                  class="carousel__pagination-button"
                ></button>
              </li>
              <li class="carousel__pagination-item">
                <button
                  type="button"
                  class="carousel__pagination-button"
                ></button>
              </li>
            </ol>
          </section>
        </section>
        <section id="airdrop">
          <div class="container column">
            <div class="top row">
              <img class="airdrop-preview" src="airdrop/LookUp.jpg"></img>
              <div class="infos">
                <h2>Claim your Airdrop</h2>
                <div class="countdown degrade">
                  <div class="countdown">
                    <div class="content">
                      <div class="time">
                        <div class="days">4 days, </div>
                        <div class="hours">03 hours, </div>
                        <div class="minutes">46 minutes, </div>
                        <div class="seconds">17 seconds left to claim</div>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  Congrats Meka Drivers!
                  <br />
                  You are qualified to receive our second Airdrop!
                  <br />
                  After you claim it, you will receive a special NFT created by
                  MekaVerse. You can claim 1 NFT for every Meka you own. If you
                  own 3 Meka, you can claim 3 NFTs. Don't worry if Gas Fees are
                  too high right now, you may return and try again later. After
                  you claim your NFT, it will appear on OpenSea.
                </p>
                <div class="check">
                  Confirm that your #Meka is qualified for the Airdrop.{' '}
                  <div class="input">
                    <input type="text" placeholder="Enter the ID #" />
                    <div class="cta">Check</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mymeka-list column">
              <h3>
                My Meka <span class="degrade">(0)</span>
              </h3>
              <div style="margin-top: 30px; margin-left: 15px;">
                You are not connected on Metamask.{' '}
              </div>

              <div class="list row"></div>
            </div>
          </div>
        </section>
        <section id="roadmap" class="column">
          <div class="decal container">
            <h2
              class="sr-top-fast"
              data-sr-id="3"
              style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -20, 0, 1);"
            >
              Roadmap
            </h2>
            <p
              class="intro sr-top-fast-delayed"
              data-sr-id="8"
              style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -20, 0, 1);"
            >
              This roadmap outlines our goals and where we want to take
              MekaVerse. We have a lot of ideas and concepts that we are working
              on. It may evolve over time and hopefully become even better!
            </p>
            <div class="middle row relative">
              <div class="timeline column">
                <div class="line">
                  <div class="progression"></div>
                </div>
                <div class="step row done">
                  <div class="dot">
                    <div class="shape"></div>
                  </div>
                  <div class="details">
                    <div
                      class="title row sr-right-fast"
                      data-sr-id="14"
                      style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 0, 0, 1);"
                    >
                      <div class="number degrade">.01</div>
                      <h3>Launch Roadmap</h3>
                    </div>
                    <p
                      class="sr-right-fast-delayed"
                      data-sr-id="19"
                      style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 0, 0, 1);"
                    >
                      <span class="bold">
                        Quality comes first. The goal is to make our first drop
                        as cool as possible
                      </span>
                      so we can have freedom to develop the universe. We're
                      still working on a number of rarity criteria, as well as a
                      lot of new Lore concepts.{' '}
                      <span class="bold">
                        The drop release date will be announced as soon as the
                        project's quality and technical aspects are fully
                        progressed.
                      </span>
                      We also need to work hard with our community to make
                      Discord and Twitter even cooler with new additions
                      throughout time.{' '}
                    </p>
                  </div>
                </div>
                <div class="step row">
                  <div class="dot">
                    <div class="shape"></div>
                  </div>
                  <div class="details">
                    <div
                      class="title row sr-right-fast"
                      data-sr-id="15"
                      style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 0, 0, 1);"
                    >
                      <div class="number degrade">.02</div>
                      <h3>Physical Part</h3>
                    </div>
                    <p
                      class="sr-right-fast-delayed"
                      data-sr-id="20"
                      style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 0, 0, 1);"
                    >
                      <span class="bold">
                        Mekas have a huge potential as physical creations.
                      </span>
                      We are passionate about 3D printing and want to bring our
                      concept to life with high-quality materials. After several
                      talks with famous art toys makers, we are currently
                      working on some concepts but wait, let’s keep a little
                      mystery for the moment!{' '}
                      <span class="bold">
                        We also aim to create clothing and merchandise using
                        high-quality materials and textiles with eco-friendly
                        fabrics.
                      </span>
                      Also, Matt. B would love to explore a new and ambitious 3D
                      Art Direction about streetwear and fashion in general. By
                      following our design principles, we will do everything
                      possible to create something amazing before, during, and
                      after the launch of the first Drop!{' '}
                    </p>
                  </div>
                </div>
                <div class="step row">
                  <div class="dot">
                    <div class="shape"></div>
                  </div>
                  <div class="details">
                    <div
                      class="title row sr-right-fast"
                      data-sr-id="16"
                      style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 0, 0, 1);"
                    >
                      <div class="number degrade">.03</div>
                      <h3>MekaVerse x Artists </h3>
                    </div>
                    <p
                      class="sr-right-fast-delayed"
                      data-sr-id="21"
                      style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 0, 0, 1);"
                    >
                      We know a lot of artists in the NFT community and beyond!{' '}
                      <span class="bold">
                        We'd like to develop a series in which each Meka is made
                        in collaboration with artists we like and under their
                        artistic direction.
                      </span>
                      We would create a small collection of 1/1 unique Mekas by
                      artists, with all proceeds going to them! This collection
                      is incredibly important to us, and we are excited to see
                      what we can accomplish together!{' '}
                    </p>
                  </div>
                </div>
                <div class="step row">
                  <div class="dot">
                    <div class="shape"></div>
                  </div>
                  <div class="details">
                    <div
                      class="title row sr-right-fast"
                      data-sr-id="17"
                      style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 0, 0, 1);"
                    >
                      <div class="number degrade">.04</div>
                      <h3>Meka Multiverse</h3>
                    </div>
                    <p
                      class="sr-right-fast-delayed"
                      data-sr-id="22"
                      style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 0, 0, 1);"
                    >
                      After presenting our original Mekas, we want to explore{' '}
                      <span class="bold">
                        more abstract subjects in order to present a second,
                        very distinct drop.
                      </span>
                      Our aim is simply to aesthetically enlarge the universe,
                      and each relationship between the Meka Dimensions will be
                      described and explained. We truly want to blend artistic
                      disciplines, as well as move beyond our graphic style and
                      look outside our comfort zone. We also want to see if it
                      would be possible to{' '}
                      <span class="bold">
                        collaborate with famous mecha licenses
                      </span>
                      on future releases. That would be incredible!{' '}
                    </p>
                  </div>
                </div>
                <div class="step row">
                  <div class="dot">
                    <div class="shape"></div>
                  </div>
                  <div class="details">
                    <div
                      class="title row sr-right-fast"
                      data-sr-id="18"
                      style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 0, 0, 1);"
                    >
                      <div class="number degrade">.05</div>
                      <h3>Future of Mekas</h3>
                    </div>
                    <p
                      class="sr-right-fast-delayed"
                      data-sr-id="23"
                      style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 0, 0, 1);"
                    >
                      When all of these stages are completed,{' '}
                      <span class="bold">
                        we’ll take care of maintaining the Meka Universe
                      </span>
                      . We both come from the design industry, and we are truly
                      passionate about Art, Short films, Physical and Digital
                      Exploration, and we would like to explore even more, with
                      the desire to always make events more impressive and
                      ambitious. We are counting on your support! We look
                      forward to seeing what happens in the future! Love from
                      Mekas <span class="bold">♥</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="box">
                <video
                  id="helmet"
                  tabindex="0"
                  preload=""
                  playsinline=""
                  style="transform: translateY(0px);"
                >
                  <source src="images/helmet.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
        <section id="team" class="container">
          <div class="intro row">
            <div class="title">
              <div
                class="question sr-top-fast"
                data-sr-id="4"
                style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -20, 0, 1);"
              >
                Who are we?
              </div>
              <div
                class="answer degrade sr-top-fast-delayed"
                data-sr-id="9"
                style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -20, 0, 1);"
              >
                Creative teams
              </div>
            </div>
            <div
              class="presentation sr-right-super-delayed"
              data-sr-id="26"
              style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 0, 0, 1);"
            >
              <p>
                Hi! Mattey &amp; Matt. B are two friends currently focusing on
                3D &amp; Art direction. We have been working hard to establish
                our own style, and we're continuously looking for new ways to
                push ourselves. We also worked with Apple, Microsoft, MTV,
                Adobe, Adidas, Nike and more!
              </p>
            </div>
          </div>
          <div class="member row">
            <div
              class="who column sr-left-fast"
              data-sr-id="27"
              style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -10, 0, 0, 1);"
            >
              <div class="top row">
                <h2>Mattey</h2>
                <div class="social row">
                  <div class="link">
                    <a
                      href="https://twitter.com/Matteyy_"
                      name="twitter-matteyy_"
                      rel="noopener"
                      target="_blank"
                      class="network twitter row"
                    ></a>
                  </div>
                  <div class="link">
                    <a
                      href="https://www.instagram.com/matteyyy_/?hl=fr"
                      name="instagram-matteyy_"
                      rel="noopener"
                      target="_blank"
                      class="network instagram row"
                    ></a>
                  </div>
                </div>
              </div>
              <img src="images/mattey.jpg" alt="Profil Picture Mattey" />
            </div>
            <div
              class="spacer sr-opacity-delayed"
              data-sr-id="29"
              style="visibility: visible; opacity: 0;"
            ></div>
            <div
              class="works column sr-right-fast-delayed"
              data-sr-id="24"
              style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 0, 0, 1);"
            >
              <div class="top row">
                <h4>NFTs Artworks</h4>
              </div>
              <section class="carousel examples" aria-label="Gallery">
                <div class="carousel__viewport">
                  <ol
                    class="carousel__track"
                    style="transform: translateX(0px); transition: all 0ms ease 0s;"
                  >
                    <li
                      class="carousel__slide carousel__slide--visible"
                      style="width: 100%; order: 0;"
                    >
                      <a
                        href="https://superrare.com/artwork-v2/mushroom-meditation-20525"
                        rel="noopener"
                        target="_blank"
                        class="ref"
                      >
                        <img
                          src="images/mattey_work_01.jpg"
                          alt="Mattey Artwork 01"
                        />
                      </a>
                      <a
                        href="https://superrare.com/artwork-v2/medusa-21620"
                        rel="noopener"
                        target="_blank"
                        class="ref"
                      >
                        <img
                          src="images/mattey_work_02.jpg"
                          alt="Mattey Artwork 02"
                        />
                      </a>
                    </li>
                    <li
                      class="carousel__slide carousel__slide--next"
                      style="width: 100%; order: 1;"
                    >
                      <a
                        href="https://www.instagram.com/p/CSE9BATNSS4/"
                        rel="noopener"
                        target="_blank"
                        class="ref"
                      >
                        <img
                          src="images/mattey_work_03.jpg"
                          alt="Mattey Artwork 01"
                        />
                      </a>
                      <a
                        href="https://foundation.app/@mattey/butterfly-eyes-23829"
                        rel="noopener"
                        target="_blank"
                        class="ref"
                      >
                        <img
                          src="images/mattey_work_04.jpg"
                          alt="Mattey Artwork 02"
                        />
                      </a>
                    </li>
                  </ol>
                </div>
                <ol class="carousel__pagination">
                  <li class="carousel__pagination-item">
                    <button
                      type="button"
                      class="carousel__pagination-button"
                    ></button>
                  </li>
                  <li class="carousel__pagination-item">
                    <button
                      type="button"
                      class="carousel__pagination-button"
                    ></button>
                  </li>
                </ol>
              </section>
            </div>
          </div>
          <div class="member row">
            <div
              class="who column sr-left-fast"
              data-sr-id="28"
              style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -10, 0, 0, 1);"
            >
              <div class="top row">
                <h2>Matt.B</h2>
                <div class="social row">
                  <div class="link">
                    <a
                      href="https://twitter.com/MattBraccini"
                      name="twitter-MattBraccini"
                      rel="noopener"
                      target="_blank"
                      class="network twitter"
                    ></a>
                  </div>
                  <div class="link">
                    <a
                      href="https://www.instagram.com/matthieubraccini"
                      name="twitter-MattBraccini"
                      rel="noopener"
                      target="_blank"
                      class="network instagram"
                    ></a>
                  </div>
                </div>
              </div>
              <img src="images/bracco.jpg" alt="Profil Picture Mattey" />
            </div>
            <div
              class="spacer sr-opacity-delayed"
              data-sr-id="30"
              style="visibility: visible; opacity: 0;"
            ></div>
            <div
              class="works column sr-right-fast-delayed"
              data-sr-id="25"
              style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 0, 0, 1);"
            >
              <div class="top row">
                <h4>NFTs Artworks</h4>
              </div>
              <section class="carousel examples" aria-label="Gallery">
                <div class="carousel__viewport">
                  <ol
                    class="carousel__track"
                    style="transform: translateX(0px); transition: all 0ms ease 0s;"
                  >
                    <li
                      class="carousel__slide carousel__slide--visible"
                      style="width: 100%; order: 0;"
                    >
                      <a
                        href="https://foundation.app/@matthieubraccini/another-world-ii-reinterpreted-26707"
                        rel="noopener"
                        target="_blank"
                        class="ref"
                      >
                        <img
                          src="images/bracco_work_01.jpg"
                          alt="Matt.B Artwork 01"
                        />
                      </a>
                      <a
                        href="https://foundation.app/@matthieubraccini/penrose-s-arch-12629"
                        rel="noopener"
                        target="_blank"
                        class="ref"
                      >
                        <img
                          src="images/bracco_work_02.jpg"
                          alt="Matt.B Artwork 02"
                        />
                      </a>
                    </li>
                    <li
                      class="carousel__slide carousel__slide--next"
                      style="width: 100%; order: 1;"
                    >
                      <a
                        href="https://foundation.app/@matthieubraccini/stellar-hiatus-22226"
                        rel="noopener"
                        target="_blank"
                        class="ref"
                      >
                        <img
                          src="images/bracco_work_03.jpg"
                          alt="Matt.B Artwork 01"
                        />
                      </a>
                      <a
                        href="https://foundation.app/@matthieubraccini/indoor-outdoor-76610"
                        rel="noopener"
                        target="_blank"
                        class="ref"
                      >
                        <img
                          src="images/bracco_work_04.jpg"
                          alt="Matt.B Artwork 02"
                        />
                      </a>
                    </li>
                  </ol>
                </div>
                <ol class="carousel__pagination">
                  <li class="carousel__pagination-item">
                    <button
                      type="button"
                      class="carousel__pagination-button"
                    ></button>
                  </li>
                  <li class="carousel__pagination-item">
                    <button
                      type="button"
                      class="carousel__pagination-button"
                    ></button>
                  </li>
                </ol>
              </section>
            </div>
          </div>
        </section>
        <section id="discord">
          <div class="container">
            <h2
              class="sr-top-fast"
              data-sr-id="5"
              style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -20, 0, 1);"
            >
              Join the community
            </h2>
            <p
              class="sr-top-fast-delayed"
              data-sr-id="10"
              style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -20, 0, 1);"
            >
              MekaVerse Discord already has over 200,000 members! If you want to
              join the #MEKAGANG it’s here. Join us to get the news as soon as
              possible and follow our latest announcements.
            </p>
            <div
              class="sr-top-more-delayed"
              data-sr-id="13"
              style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -20, 0, 1);"
            >
              <a
                href="https://discord.com/invite/mekaverse"
                rel="noopener"
                target="_blank"
                class="cta"
              >
                Join our Discord
              </a>
            </div>
            <div
              class="meka sr-bottom-more-delayed"
              data-sr-id="31"
              style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 10, 0, 1);"
            ></div>
          </div>
        </section>
        <footer>
          <div class="container row">
            <div
              class="infos column sr-top-fast"
              data-sr-id="6"
              style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -20, 0, 1);"
            >
              <div class="blockmark column">
                <div class="logo row">
                  <div class="picto"></div>
                  <div class="typo">MekaVerse</div>
                </div>
                <p class="baseline">8,888 unique mekas who need drivers.</p>
              </div>
              <p class="copyright">©2021 MekaVerse. All rights reserved.</p>
            </div>
            <div
              class="right column sr-top-fast-delayed"
              data-sr-id="11"
              style="visibility: visible; opacity: 0; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -20, 0, 1);"
            >
              <div class="nav column">
                <a
                  aria-current="page"
                  href="/"
                  class="router-link-active router-link-exact-active"
                >
                  Home
                </a>
                <a href="/team" class="">
                  Team
                </a>
                <a href="/terms" class="">
                  Terms &amp; Conditions
                </a>
              </div>
              <div class="social row">
                <div class="link">
                  <a
                    href="https://twitter.com/MekaVerse"
                    name="twitter"
                    rel="noopener"
                    target="_blank"
                    class="twitter row"
                  ></a>
                </div>

                <div class="link">
                  <a
                    href="https://discord.com/invite/mekaverse"
                    name="discord"
                    rel="noopener"
                    target="_blank"
                    class="discord row"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <section id="cookies">
          <div class="container row">
            <div class="infos column">
              <div class="privacy">Your privacy</div>
              <p>
                We use cookies to improve your experience on our website. To
                find out more, read our{' '}
                <a href="/terms" class="" alt="Cookie Policy Link">
                  cookie policy
                </a>
                .
              </p>
            </div>
            <div class="cta">Ok</div>
          </div>
        </section>
      </div>

      <svg style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
        <defs>
          <symbol id="meltedice" viewBox="0 0 345 424">
            <title>meltedice</title>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M307.875 6.9999C304.069 5.51788 298.664 3.3091 295.5 2.00001C284 2.66668 260.6 4.10001 259 4.50001C257.4 4.90001 242.667 1.66667 235.5 6.99382e-06L223.971 6.9999H219.294L209 5.83547e-06L200.5 4.50001L172 4.21815e-06L159.4 6.9999H144.625L129 2L104.5 6.5L75.5 0L35 6.5L36.0998 6.9999H31C17.1929 6.9999 6 18.1928 6 31.9999V42.661C4.64154 46.0735 3.03796 49.9915 2 52.4999C2.66667 63.9999 4.1 87.3999 4.5 88.9999C4.9 90.5999 1.66667 105.333 0 112.5L6 122.382V130.176L0 139L4.5 147.5L0 176L6 186.8V206.5L2 219L6 240.778V245.731L0 272.5L6 309.885V314C6 325.637 13.951 335.417 24.7167 338.204L34.5 378L39.2485 339.153H40.044C43.0455 340.35 46.3762 341.711 48.7721 342.699L55.5 356.847L58.0433 342.493C69.8967 341.775 84.7372 340.816 85.9999 340.5C87.5999 340.1 102.333 343.333 109.5 345L116.652 340.657L126.662 353.186L132.836 342.848L136 345L144.5 340.5L173 345L183.8 339H203.5L216 343L220.226 342.224L232.764 356.847L243.012 340.373H248.856L269.5 345L289.043 341.863L304.957 370.881L307.971 410.542L312.191 423.5L314 366L325.582 336.161C333.558 331.984 339 323.627 339 314V302.339C340.358 298.926 341.962 295.008 343 292.5C342.333 281 340.9 257.6 340.5 256C340.1 254.4 343.333 239.667 345 232.5L339 222.618V214.823L345 206L340.5 197.5L345 169L339 158.2V138.5L343 126L339 104.223V99.2688L345 72.5L339 35.116V31.9999C339 18.1928 327.807 6.9999 314 6.9999H307.875ZM73.5 324L95.8073 329H110.667L127 326L136.375 329H161L170 324L198.5 328.5L207 324L214.353 329H225.265L233.5 324C240.667 325.667 255.4 328.9 257 328.5C258.6 328.1 282 326.667 293.5 326C295.412 326.791 298.142 327.911 300.844 329H314C322.284 329 329 322.284 329 314V305.886L323 268.5L329 241.73V236.779L325 215L329 202.5V182.8L323 172L327.5 143.5L323 135L329 126.176V118.383L323 108.5C324.667 101.333 327.9 86.6 327.5 85C327.1 83.4 325.667 60 325 48.5C326.038 45.9915 327.642 42.0734 329 38.6608V31.9999C329 23.7156 322.284 16.9999 314 16.9999H306.885L269.5 23L242.73 16.9999H237.778L216 21L203.5 16.9999H183.8L173 23L144.5 18.5L136 23L127.176 16.9999H119.382L109.5 23C102.333 21.3333 87.6 18.1 86 18.5C84.4 18.9 61 20.3333 49.5 21C46.9915 19.962 43.0734 18.3584 39.6609 16.9999H31C22.7157 16.9999 16 23.7156 16 31.9999V36.116L21.9999 73.5L16 100.269V105.223L19.9999 127L16 139.5V159.2L21.9999 170L17.4999 198.5L21.9999 207L16 215.823V223.618L21.9999 233.5C20.3332 240.667 17.0999 255.4 17.4999 257C17.8999 258.6 19.3332 282 19.9999 293.5C18.9619 296.008 17.3584 299.926 16 303.339V314C16 322.284 22.7157 329 31 329H42.3467L73.5 324Z"
              fill="#BEEDFD"
            ></path>
          </symbol>
          <symbol id="twitter" viewBox="0 0 25 22">
            <title>twitter</title>
            <path
              d="M25 2.52418C24.2806 3.68116 23.3813 4.64531 22.482 5.41663C22.482 5.60946 22.482 5.80229 22.482 6.18795C22.482 7.73059 22.3022 9.27322 21.9424 10.623C21.5827 12.1657 20.8633 13.5155 20.1439 14.8653C19.2446 16.2151 18.3453 17.3721 17.2662 18.5291C16.0072 19.686 14.5683 20.4574 13.1295 21.0359C11.5108 21.6143 9.71223 22 7.91367 22C5.03597 22 2.33813 21.0359 0 19.4932C0.359712 19.4932 0.719426 19.4932 1.25899 19.4932C3.59712 19.4932 5.93525 18.7219 7.73381 17.1793C6.65467 17.1793 5.57554 16.7936 4.67626 16.0223C3.77698 15.251 3.23741 14.4796 2.87769 13.3227C3.23741 13.3227 3.59712 13.3227 3.77698 13.3227C4.31654 13.3227 4.67626 13.3227 5.21583 13.1298C4.13669 12.937 3.05755 12.1657 2.33813 11.2015C1.25899 10.2374 0.89928 9.08039 0.89928 7.73058C1.6187 8.11624 2.51798 8.30908 3.23741 8.50191C2.51798 7.92342 1.97842 7.34493 1.43885 6.57361C1.07914 5.80229 0.719424 4.83813 0.719424 3.87399C0.719424 2.90984 0.899279 1.94569 1.43885 1.17437C2.69784 2.90984 4.31655 4.25965 6.11511 5.2238C7.91367 6.18795 9.89209 6.76643 12.0504 6.95926C12.0504 6.57361 11.8705 6.18795 11.8705 5.60946C11.8705 4.45248 12.2302 3.48833 12.7698 2.52418C13.3093 1.56003 14.2086 0.981538 15.1079 0.403048C16.0072 0.0173879 17.0863 -0.175443 18.1655 0.210217C19.2446 0.403047 20.1439 0.981539 20.8633 1.75286C21.9424 1.56003 23.2014 1.17437 24.1007 0.403048C23.741 1.75286 22.8417 2.71701 21.7626 3.48833C23.0216 3.2955 24.1007 3.10267 25 2.52418Z"
              fill="#FA5C7E"
            ></path>
          </symbol>
        </defs>
      </svg>
    </div>
  );
}

export default App;
