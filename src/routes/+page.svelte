<script lang="ts">
  import { onMount } from 'svelte';
  import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

  import Glide from '@glidejs/glide';
  import '@glidejs/glide/dist/css/glide.core.min.css';
  import '@glidejs/glide/dist/css/glide.theme.min.css';

  import Cooking from '$lib/components/Cooking.svelte';

  import Marquee from '$lib/components/Marquee.svelte';

  let isClient = false;

  let element;

  let showPreloader = true;
  let fadeOut = false;

  let lottieRef: LottiePlayer | null = null;

  function startFadeOut() {
    // Wait 3 seconds after Lottie starts playing, then fade out
    setTimeout(() => {
      fadeOut = true;
    }, 4000);

    // After another 1 second, hide the preloader completely
    setTimeout(() => {
      showPreloader = false;
    }, 5000);
  }

  onMount(() => {
    isClient = true;

    // Ensure Lottie has loaded and started playing
    const checkLottieLoaded = () => {
      if (lottieRef && lottieRef.getLottie()) {
        console.log('Lottie animation has loaded!');
        startFadeOut();
      } else {
        console.log('Lottie not ready, retrying...');
        setTimeout(checkLottieLoaded, 100); // Retry every 100ms until it loads
      }
    };

    checkLottieLoaded(); // Start checking immediately

    new Glide('.glide', {
      type: 'carousel',
      focusAt: '1',
      gap: '1rem',
      hoverpause: true,
      autoplay: 500,
      animationDuration: 600,
      animationTimingFunc: 'ease-out',
      perView: 9,
      breakpoints: {
        1280: { perView: 7 },
        1024: { perView: 5 },
        768: { perView: 3 },
        544: { perView: 3 },
      },
      swipeThreshold: 1,
      dragThreshold: 1,
      autoplay: 6000,
    }).mount();
  });
</script>

<svelte:head>
  <title>Flavored and Branded</title>
  <meta name="description" content="" />
</svelte:head>

{#if showPreloader}
  <div class="preloader" class:fade-out={fadeOut}>
    {#if isClient}
      <div class="lottie">
        <LottiePlayer
          bind:this={lottieRef}
          src="/lottie/logo.json"
          autoplay={true}
          loop={false}
          controls={false}
          renderer="svg"
          background="transparent"
          height={270}
          width={450}
          controlsLayout />
      </div>
    {/if}
  </div>
{/if}

<div class="container">
  <section class="hero trigger" data-color-from="#fff">
    <h1>
      <span bind:this={element}>
        Concepts and branding for
        {#if isClient}
          <div class="lottie">
            <LottiePlayer
              src="/lottie/hospitality.json"
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
      </span>
    </h1>
    <svg viewBox="0 0 68 33" class="chevron-down">
      <path
        d="M.58 3.414l27.432 27.433c2.715 2.715 7.167 2.787 9.964.164L67.356 3.46 64.62.54 35.24 28.093c-1.222 1.146-3.212 1.114-4.4-.075L3.408.586.579 3.414z">
      </path>
    </svg>
  </section>

  <section class="carousel" data-color="#fff">
    <Marquee speed={1.5} repeat={-1} paddingRight={0} scrollSensitivity={0.0005}>
      <div class="marquee-item"><img src="/img/1.jpg" /></div>
      <div class="marquee-item"><img src="/img/2.jpg" /></div>
      <div class="marquee-item"><img src="/img/3.png" /></div>
      <div class="marquee-item"><img src="/img/4.jpg" /></div>
      <div class="marquee-item"><img src="/img/5.jpg" /></div>
      <div class="marquee-item"><img src="/img/6.jpg" /></div>
      <div class="marquee-item"><img src="/img/7.jpg" /></div>
      <div class="marquee-item"><img src="/img/8.jpg" /></div>
      <div class="marquee-item"><img src="/img/9.jpg" /></div>
      <div class="marquee-item"><img src="/img/10.jpg" /></div>
      <div class="marquee-item"><img src="/img/11.jpg" /></div>
      <div class="marquee-item"><img src="/img/12.jpg" /></div>
      <div class="marquee-item"><img src="/img/13.jpg" /></div>
      <div class="marquee-item"><img src="/img/14.jpg" /></div>
    </Marquee>
  </section>

  <section class="brands trigger" data-color-from="white" data-color-to="#640af7" data-snap="1">
    <div class="inner">
      <div class="brand-images">
        <div class="glide">
          <div data-glide-el="track" class="glide__track">
            <ul class="glide__slides">
              <li class="glide__slide"><img src="/img/logotrail-01.svg" alt="Brand 1" /></li>
              <li class="glide__slide"><img src="/img/logotrail-02.svg" alt="Brand 1" /></li>
              <li class="glide__slide"><img src="/img/logotrail-03.svg" alt="Brand 1" /></li>
              <li class="glide__slide"><img src="/img/logotrail-04.svg" alt="Brand 1" /></li>
              <li class="glide__slide"><img src="/img/logotrail-05.svg" alt="Brand 1" /></li>
              <li class="glide__slide"><img src="/img/logotrail-06.svg" alt="Brand 1" /></li>
              <li class="glide__slide"><img src="/img/logotrail-07.svg" alt="Brand 1" /></li>
              <li class="glide__slide"><img src="/img/logotrail-08.svg" alt="Brand 1" /></li>
              <li class="glide__slide"><img src="/img/logotrail-09.svg" alt="Brand 1" /></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="brand-quote">
        <h2>
          Concepts for the spirit, branded for the crowd. Flavored for the eye, to feed the
          word-of-mouth.
        </h2>
        <a href="/approach-about" class="cta">About & Approach</a>
      </div>
    </div>
  </section>

  <section class="specialties" data-color="#fff">
    <div class="inner">
      {#if isClient}
        <div class="lottie">
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
      <h2>Our Specialties</h2>
      <div class="blocks">
        <div class="block">
          {#if isClient}
            <div class="circle">
              <LottiePlayer
                src="/lottie/mes.json"
                autoplay={true}
                loop={true}
                controls={false}
                renderer="svg"
                background="transparent"
                height={120}
                width={120}
                controlsLayout />
            </div>
          {/if}
          <h3>Concepting</h3>
          <p>
            It all starts with a story, a concept. Think of it as your mise en place, where we set
            up every ingredient for a unique experience. It’s the very foundation of your business.
          </p>
        </div>
        <div class="block">
          {#if isClient}
            <div class="circle">
              <LottiePlayer
                src="/lottie/pan.json"
                autoplay={true}
                loop={true}
                controls={false}
                renderer="svg"
                background="transparent"
                height={120}
                width={120}
                controlsLayout />
            </div>
          {/if}
          <h3>Branding</h3>
          <p>
            We cook up all the ingredients to transform your concept into a visual and verbal brand
            identity. Ready to make some noise and stand out!
          </p>
        </div>
        <div class="block">
          {#if isClient}
            <div class="circle">
              <LottiePlayer
                src="/lottie/pepermolen.json"
                autoplay={true}
                loop={true}
                controls={false}
                renderer="svg"
                background="transparent"
                height={120}
                width={120}
                controlsLayout />
            </div>
          {/if}
          <h3>Designing</h3>
          <p>
            The finishing touch. We translate your branding into all the collateral and print
            materials you need, making sure it's perfectly implemented in your venue and online
            channels.
          </p>
        </div>
        <div class="block">
          {#if isClient}
            <div class="circle">
              <LottiePlayer
                src="/lottie/taart.json"
                autoplay={true}
                loop={true}
                controls={false}
                renderer="svg"
                background="transparent"
                height={120}
                width={120}
                controlsLayout />
            </div>
          {/if}
          <h3>After Care</h3>
          <p>
            Concepts and branding evolve and sometimes need a little maintenance. It’s the cherry on
            top to do so and maintain the quality of your brand.
          </p>
        </div>
      </div>
      <a href="/services" class="cta">More about our services</a>
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

  @keyframes float {
    0% {
      top: 0;
    }
    50% {
      top: 10px;
    }
    100% {
      top: 0;
    }
  }

  :root {
    --color: #640af7;
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
    margin: 3rem auto;
    background: transparent;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 1px solid $purple;
    text-decoration: none;
    transition: 300ms ease-in-out background-color;
    font-weight: 600;
    font-size: 1.3rem;
    &:hover {
      background: darken($purple, 10%);
      color: white;
    }
  }

  section.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
    min-height: calc(100vh - 200px);
    max-width: 1280px;
    margin: 0 auto;
    align-items: center;
    background: transparent !important;
    position: relative;

    @include small {
      min-height: 450px;
      padding-top: 6rem;
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
        fill: $purple;
      }
    }

    .lottie {
      height: 90px;
      :global(> div) {
        width: 100% !important;
      }
    }

    :global(svg) {
      :global(path) {
        fill: $purple;
      }
    }

    h1 {
      max-width: 550px;
      font-size: 4.5rem;

      text-align: center;
      opacity: 0;
      transform: scale(0.7);
      transition: all 1000ms ease-in-out;
      @media screen and (max-width: 768px) {
        font-size: 2.5rem;
      }
      span {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      :global(div:not(.word)) {
        display: inline-block;
        max-width: 400px;
        transform: translateY(-5px);
        width: 100%;
        @media screen and (max-width: 768px) {
          max-width: 240px;
          max-height: 75px;
          transform: translateY(-3px);
        }
      }
    }
    &:global(.active) {
      :global(h1) {
        opacity: 1 !important;
        transform: scale(1) !important;
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

  .carousel {
    :global(.marquee-container) {
      @include small {
        padding-bottom: 4rem;
      }
    }
  }
  .marquee-item {
    font-size: calc(32em / 16);
    flex-shrink: 0;
    width: 300px;
    height: 800px;
    position: relative;
    z-index: 1;
    padding: 1rem;
    animation: float 6s ease-in-out infinite;
    @include small {
      width: 150px;
      height: 400px;
    }

    &:nth-child(even) {
      animation-delay: 1s;
      img {
        transform: rotate(4deg);
      }
    }
    &:nth-child(odd) {
      animation-delay: 3s;
      img {
        transform: rotate(-5deg);
        z-index: 99;
        top: 200px;
      }
    }
    &:nth-child(3n) {
      animation-delay: 2s;
      img {
        transform: rotate(2deg);
      }
    }
    &:nth-child(4n) {
      animation-delay: 1.5s;
      img {
        transform: rotate(-2deg);
      }
    }
    &:nth-child(5n) {
      animation-delay: 4s;
      img {
        transform: rotate(3deg);
      }
    }
    img {
      position: absolute;
      width: 160%;
      right: 0;
      aspect-ratio: 1/1;
      object-fit: cover;
    }
  }

  .brands {
    background: $purple;
    padding: 5rem 0 2rem;
    margin-top: -400px;
    padding-top: 300px;
    @include small {
      margin-top: -240px;
    }

    .inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      transition: 300ms ease-in-out transform;
      transform: scale(0.9);
    }
    &:global(.active) {
      :global(.inner) {
        transform: scale(1) !important;
      }
    }
    .brand-images {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
      .glide {
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        .glide__track {
          .glide__slides {
            gap: 2rem;
            .glide__slide {
              display: flex;
              flex: 1;
              align-self: center;

              img {
                width: 100%;
                max-width: 100px;
                border-radius: 1rem;
                display: block;
                margin: 0 auto;
              }
            }
          }
        }
      }
    }

    .cta {
      border-color: $white;
      color: white;
      font-size: 1.2rem;
    }
    .brand-quote {
      color: white;
      text-align: center;
      font-size: 2rem;
      display: flex;
      flex-direction: column;
      margin-top: 4rem;

      h2 {
        max-width: 1060px;
        margin: 4rem auto;
        display: inline-block;
      }
    }
  }

  .specialties {
    .inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 5rem 1rem;
      display: flex;
      flex-direction: column;
      position: relative;
      .lottie {
        position: absolute;
        top: -5px;
        left: 0;
        :global(svg path) {
          fill: $purple;
        }
      }
      h2 {
        text-align: center;
        font-size: 5rem;
        color: $purple;
        margin-bottom: 4rem;
        font-family: 'ED Lavonia';
        font-weight: 500;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: rgb(111, 0, 253);
      }
      .blocks {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        .block {
          flex: 1;
          min-width: calc(25% - 1rem);
          padding: 1rem;
          border-radius: 1rem;
          text-align: center;
          @include small {
            min-width: calc(50% - 1rem);
          }

          :global(.circle) {
            width: 120px;
            height: 120px;
            margin: 0 auto 1rem;
            background: $purple;
            border-radius: 110px;
            display: flex;
            align-items: center;
            justify-content: center;
            :global(svg path) {
              // fill: white;
            }
          }

          video {
            width: 100%;
            height: auto;
            border-radius: 1rem;
            max-width: 200px;
          }
          h3 {
            color: $purple;
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          p {
            color: $black;
            font-size: 1rem;
            max-width: 300px;
            margin: inline-block;
            margin: 0 auto;
          }
        }
      }
      .cta {
        margin: 2rem auto;
        display: inline-block;
      }
    }
  }

  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: $purple;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    z-index: 9999;
    transition: 1000ms ease-in-out opacity;
    opacity: 1;
    &.fade-out {
      opacity: 0;
    }
  }
</style>
