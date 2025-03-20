<script lang="ts">
  import { onMount } from 'svelte';
  import Cooking from '$lib/components/Cooking.svelte';

  import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

  let isClient = false;

  //   export let data;

  onMount(() => {
    isClient = true;
    // console.log(data);

    let ocean = document.getElementsByClassName('ocean')[0],
      waveWidth = 10,
      waveCount = Math.floor(window.innerWidth / waveWidth),
      docFrag = document.createDocumentFragment();

    for (var i = 0; i < waveCount; i++) {
      var wave = document.createElement('div');
      wave.className += ' wave';
      docFrag.appendChild(wave);
      wave.style.left = i * waveWidth + 'px';
      wave.style.webkitAnimationDelay = i / 100 + 's';
    }

    ocean.appendChild(docFrag);
  });
</script>

<svelte:head>
  <title>flavoredandbranded</title>
  <meta name="description" content="" />
</svelte:head>

<div class="container">
  <section class="hero trigger">
    <div class="inner">
      <h1>
        We develop concepts and branding, specializing in hospitality and the F&B sector, helping
        you translate your vision into a brand. Read more about us and our approach below, and let's
        rendezvous!
      </h1>
      <svg viewBox="0 0 68 33" class="chevron-down">
        <path
          d="M.58 3.414l27.432 27.433c2.715 2.715 7.167 2.787 9.964.164L67.356 3.46 64.62.54 35.24 28.093c-1.222 1.146-3.212 1.114-4.4-.075L3.408.586.579 3.414z">
        </path>
      </svg>
      {#if isClient}
        <div class="lottie drip">
          <LottiePlayer
            src="/lottie/druppel.json"
            autoplay={true}
            loop={true}
            controls={false}
            renderer="svg"
            background="transparent"
            height={90}
            width={270}
            controlsLayout />
        </div>
      {/if}
    </div>
  </section>

  <section class="even trigger">
    <div class="inner">
      <div class="block">
        <h2>Our approach</h2>
        <p>
          We believe every brand has a unique story to tell. Our goal is to uncover that story and
          bring it to life through a mix of strategy, design, and creativity. We create a tailored
          plan to help your brand stand out and forge strong connections with your audience.
        </p>
        <p>
          Hospitality is at the heart of everything we do. It shapes the concepts, branding, and
          design that meet the needs of your guests. It's not just about a warm welcome or a clean
          table; it's about consistency, meaningful connections, and attention to detail.
        </p>
      </div>
      <div class="block with-image">
        {#if isClient}
          <div class="lottie">
            <LottiePlayer
              src="/lottie/story.json"
              autoplay={true}
              loop={true}
              controls={false}
              renderer="svg"
              background="transparent"
              controlsLayout />
          </div>
        {/if}
      </div>
    </div>
  </section>

  <section class="even purple ocean-wrapper trigger">
    <div class="ocean"></div>
    <div class="inner">
      <div class="block with-image">
        {#if isClient}
          <div class="lottie">
            <LottiePlayer
              src="/lottie/wine.json"
              autoplay={true}
              loop={true}
              controls={false}
              renderer="svg"
              background="transparent"
              controlsLayout />
          </div>
        {/if}
      </div>
      <div class="block">
        <h2>Roots in Hospitality</h2>
        <p>
          With a background in hospitality and co-founding several F&B concepts, we don't just think
          big; we think real. We know the industry inside out, from the creative spark to the
          operational and commercial side of things.
        </p>
        <p>
          That's why we craft concepts that aren't just inspiring but actually work. Concepts that
          excite guests, make business sense, and set the stage for branding that feels just right.
        </p>
      </div>
    </div>
  </section>

  <section class="even trigger">
    <div class="inner">
      <div class="block">
        <h2>How it all started</h2>
        <p>
          My name is Sjo. I started as a creative graduate in art direction and concept, became a
          hospitality entrepreneur a few years later, and eventually returned to my roots, driven by
          a passion for branding, concept, and design.
        </p>
        <p>
          The experience of co-founding several F&B concepts and the need to create is what led me
          to start Flavored and Branded.
        </p>
        <p>
          Together with our trusted partners, each an expert in their field, we create concepts and
          build flavorful branding.
        </p>
      </div>
      <div class="block with-image">
        <img src="/img/sjo.jpg" alt="Sjo Baggen" class="sjo" />
      </div>
    </div>
  </section>

  <Cooking />
</div>

<style lang="scss">
  @import 'src/scss/app.scss'; // Adjust the path as necessary
  @keyframes reveal {
    0% {
      transform: translate(0, 100%);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  .container {
  }

  section {
  }

  p {
    transition: 1000ms ease-in-out opacity;
    transition-delay: 500ms;
  }
  h1 {
    margin: 0;
    text-align: left;
    line-height: 1;
    transition: 1000ms ease-in-out opacity;
    color: $purple;
    font-size: 4.5rem;
  }

  .cta {
    display: inline-block;
    text-align: center;
    color: $purple;
    margin: 2rem auto;
    background: transparent;
    padding: 1rem 2rem;
    border-radius: 1rem;
    border: 1px solid $purple;
    text-decoration: none;
    transition: 300ms ease-in-out background-color;
    font-weight: 600;
    &:hover {
      background: darken($purple, 10%);
    }
  }

  section.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 0 auto;
    align-items: center;
    background: $purple;
    @include mobile {
      padding-top: 100px;
    }

    .inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      min-height: calc(100vh - 200px);
      justify-content: center;
      position: relative;
      @include small {
        padding: 0 2rem;
      }

      @keyframes hover-me {
        100% {
          transform: translate3d(-50%, 15px, 0);
        }
      }

      .chevron-down {
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 30px;
        animation: hover-me 0.5s infinite ease-in-out alternate;
        @include mobile {
          bottom: 30px;
        }
        path {
          fill: white;
        }
      }

      > .drip {
        position: absolute;
        bottom: -89px;
        left: 0;
        transform: scaleY(0);
        transition: all 1000ms ease-in-out;
        transform-origin: top center;
        transition-delay: 2500ms;
      }
    }

    h1 {
      font-size: 3rem;
      line-height: 1.15;
      text-align: center;
      opacity: 0;
      transform: scale(0.7);
      transition: all 1000ms ease-in-out;

      color: white;
      @media screen and (max-width: 768px) {
        font-size: 2rem;
      }
      :global(div:not(.word)) {
        display: inline-block;
        max-width: 270px;
        @media screen and (max-width: 768px) {
          max-width: 240px;
          max-height: 75px;
        }
      }
    }
    &:global(.active) {
      :global(h1) {
        opacity: 1 !important;
        transform: scale(1) !important;
      }

      :global(.drip) {
        transform: scaleY(1) !important;
      }
    }
    p {
      text-align: center;
      font-size: 1.6rem;
      line-height: 1.3;
      @media screen and (max-width: 768px) {
        font-size: 1.3rem;
      }
      > br {
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }
  }

  section.even {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5rem 0;

    .inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 10rem 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      transform: scale(0.9);
      opacity: 0;
      transition: all 1000ms ease-in-out;
      @include small {
        flex-direction: column;
        padding: 0 2rem;
      }
    }

    &:global(.active) {
      :global(.inner) {
        transform: scale(1) !important;
        opacity: 1 !important;
      }
    }
    .block {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      flex: 1;
      order: 0;

      h2 {
        width: 100%;
      }

      p {
        max-width: 600px;
      }

      &.with-image {
        align-items: center;
        justify-content: center;

        @include mobile {
          order: 99;
          .sjo {
            margin-top: 2rem;
          }
        }
      }
      img {
        width: 100%;
        max-width: 600px;
        height: auto;
        border-radius: 1rem;
        &.sjo {
          max-width: 400px;
          border-radius: 0;
          transform: rotate(0);
          //saturate black white
          filter: grayscale(100%) contrast(0.8);
        }
      }
      :global(.lottie) {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        :global(.lottie-player) {
          height: auto;
          max-width: 270px;
        }
      }
    }
    h2 {
      font-size: 4rem;
      color: $purple;
      max-width: 500px;
      text-align: left;
      @include mobile {
        font-size: 3rem;
      }
    }
    &.purple {
      background: $purple;
      color: white;
      h2 {
        color: white;
      }
      p {
        color: white;
      }
    }
  }

  .ocean-wrapper {
    position: relative;
  }

  .ocean {
    position: absolute;
    width: 100%;
    min-height: 100px;
    background: $purple;
    top: -5px;
  }

  :global(.wave) {
    background: #ffffff;
    display: inline-block;
    height: 60%;
    width: 10px;
    position: absolute;
    -webkit-animation-name: dostuff;
    -webkit-animation-duration: 3s;
    -webkit-animation-iteration-count: infinite;
    -webkit-transition-timing-function: ease-in-out;
  }

  @-webkit-keyframes dostuff {
    0% {
      height: 60%;
    }
    50% {
      height: 40%;
    }
    100% {
      height: 60%;
    }
  }
</style>
