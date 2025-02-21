<script lang="ts">
  import { onMount } from 'svelte';
  import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/dist/ScrollTrigger';
  import Glide from '@glidejs/glide';
  import '@glidejs/glide/dist/css/glide.core.min.css';
  import '@glidejs/glide/dist/css/glide.theme.min.css';

  import Marquee from '$lib/components/Marquee.svelte';

  let isClient = false;

  let element;

  export let data;

  onMount(() => {
    console.log('onMount');
    console.log(data);
    isClient = true;

    new Glide('.glide', {
      type: 'carousel',
      focusAt: 'left',
      gap: '1rem',
      hoverpause: true,
      animationDuration: 600,
      animationTimingFunc: 'ease-out',
      perView: 9,
      breakpoints: {
        1280: { perView: 7 },
        1024: { perView: 5 },
        768: { perView: 3 },
        544: { perView: 2 },
      },
      swipeThreshold: 1,
      dragThreshold: 1,
      autoplay: 6000,
    }).mount();

    gsap.utils.toArray<HTMLElement>('section.trigger').forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
        markers: true,
        onEnter: () => {
          elem.classList.add('active'); // Add class for scaling effect
        },

        onLeave: () => {
          elem.classList.remove('active'); // Add class for scaling effect
        },
        onEnterBack: () => {
          elem.classList.add('active'); // Add class for scaling effect
        },

        onLeaveBack: () => {
          elem.classList.remove('active'); // Add class for scaling effect
        },
      });
    });
  });
</script>

<svelte:head>
  <title>flavoredandbranded</title>
  <meta name="description" content="" />
</svelte:head>

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
      <h2>Specialties</h2>
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
          <h3>Concepts</h3>
          <p>
            We create unique concepts for your hospitality business. We make sure your guests have
            an unforgettable experience.
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
            We make sure your brand stands out in the crowd. We create a unique identity that your
            guests will remember.
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
          <h3>Marketing</h3>
          <p>
            We help you reach your target audience. We create marketing strategies that will help
            you grow your business.
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
          <h3>Consulting</h3>
          <p>
            We offer consulting services to help you grow your business. We help you develop a
            strategy that will help you reach your goals.
          </p>
        </div>
      </div>
      <a href="/services" class="cta">Services</a>
    </div>
  </section>
  <section class="cooking" data-color="#fff">
    <div class="inner">
      <div class="block"><img src="/img/pan.png" alt="Cooking" /></div>
      <div class="block">
        <h2>Tap the lid to see the flavors we've cooked</h2>
      </div>
    </div>
  </section>
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

    .lottie {
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
        font-size: 2rem;
      }
      :global(div:not(.word)) {
        display: inline-block;
        max-width: 400px;
        transform: translateY(-5px);
        width: 100%;
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
  .marquee-item {
    font-size: calc(32em / 16);
    flex-shrink: 0;
    width: 300px;
    height: 800px;
    position: relative;
    z-index: 1;
    padding: 1rem;
    animation: float 6s ease-in-out infinite;

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
    padding: 5rem 0;

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
        max-width: 910px;
        margin: 0 auto;
        display: inline-block;
      }
    }
  }

  .cooking {
    min-height: 100vh;
    padding: 5rem 0;
    .inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;

      .block {
        flex: 1;
        display: flex;
        align-items: center;
      }
      h2 {
        font-size: 4rem;
        color: $purple;
        max-width: 500px;
      }
      img {
        width: 100%;
        max-width: 600px;
        height: auto;
        border-radius: 1rem;
      }
    }
  }
  .specialties {
    min-height: 100vh;
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
        margin-bottom: 2rem;
        font-family: 'ED Lavonia';
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
              fill: white;
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
</style>
