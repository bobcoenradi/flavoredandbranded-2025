<script lang="ts">
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/dist/ScrollTrigger';
  //   export let data;

  onMount(() => {
    // console.log(data);

    gsap.utils.toArray<HTMLElement>('section.trigger').forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        start: 'top 90%',
        end: 'bottom 10%',
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
  <section class="hero trigger">
    <div class="inner">
      <h1>
        We are a concept development and branding agency specializing in hospitality and the F&B
        sector. Read more about us and our approach below, and let's rendez-vous!
      </h1>
    </div>
  </section>

  <section class="even trigger">
    <div class="inner">
      <div class="block">
        <h2>Our approach</h2>
        <p>
          We believe that every brand has a unique story to tell. Our approach is to uncover that
          story and bring it to life through a combination of strategy, design, and creativity.
        </p>
        <p>
          We work closely with our clients to understand their vision and goals, and then develop a
          customized plan to help them achieve success. Whether you are launching a new brand or
          rebranding an existing one, we can help you create a brand that stands out from the
          competition and resonates with your target audience.
        </p>
      </div>
      <div class="block">
        <img src="/img/branding.png" alt="Branding" />
      </div>
    </div>
  </section>

  <section class="even purple trigger">
    <div class="inner">
      <div class="block">
        <h2>Background in Hospitality</h2>
        <p>
          We believe that every brand has a unique story to tell. Our approach is to uncover that
          story and bring it to life through a combination of strategy, design, and creativity.
        </p>
        <p>
          We work closely with our clients to understand their vision and goals, and then develop a
          customized plan to help them achieve success. Whether you are launching a new brand or
          rebranding an existing one, we can help you create a brand that stands out from the
          competition and resonates with your target audience.
        </p>
      </div>
      <div class="block">
        <img src="/img/branding.png" alt="Branding" />
      </div>
    </div>
  </section>

  <section class="even trigger">
    <div class="inner">
      <div class="block">
        <h2>How it all started</h2>
        <p>
          We believe that every brand has a unique story to tell. Our approach is to uncover that
          story and bring it to life through a combination of strategy, design, and creativity.
        </p>
        <p>
          We work closely with our clients to understand their vision and goals, and then develop a
          customized plan to help them achieve success. Whether you are launching a new brand or
          rebranding an existing one, we can help you create a brand that stands out from the
          competition and resonates with your target audience.
        </p>
      </div>
      <div class="block">
        <img src="/img/branding.png" alt="Branding" />
      </div>
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

    min-height: calc(100vh - 200px);

    margin: 0 auto;
    align-items: center;
    background: $purple;

    .inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
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

  section.even {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5rem 0;

    .inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      transform: scale(0.9);
      opacity: 0;
      transition: all 1000ms ease-in-out;
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
      img {
        width: 100%;
        max-width: 600px;
        height: auto;
        border-radius: 1rem;
      }
    }
    h2 {
      font-size: 4rem;
      color: $purple;
      max-width: 500px;
      text-align: left;
    }
    &.purple {
      background: $purple;
      color: white;
      h2 {
        color: white;
      }
    }
  }
</style>
