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
        Whether you're looking for a journey from scratch to craft, or just a little extra spice.
        Expanding into a culinary empire, or simply adding the finishing touch. We got you!
      </h1>
    </div>
  </section>

  <section class="even trigger">
    <div class="inner">
      <div class="block">
        <h2>Concepting</h2>
        <p>
          We call it the mise en place. Your concept is the foundation of your business. It all
          starts with a story that makes sense in every way. We begin with an intro meeting to get
          to the core of the idea, analyze the market, develop the name, create a positioning
          statement, tie up all loose ends, and ensure your concept is solid and ready to be
          translated into branding. Here, we define the framework for the next phase: branding.
        </p>
        <p>
          In short, we create and translate unique ideas into concepts, from the positioning
          statement to the perfect name that sets the stage for a hospitality venue's identity and
          vibe.
        </p>
        <div class="tags">
          <span>Positioning Statement</span>
          <span>Concept Description</span>
          <span>Key Message</span>
          <span>Tagline</span>
          <span>The Motto</span>
          <span>Brand Value</span>
        </div>
      </div>
      <div class="block">
        <img src="/img/branding.png" alt="Branding" />
      </div>
    </div>
  </section>

  <section class="even purple trigger">
    <div class="inner">
      <div class="block">
        <h2>Branding</h2>
        <p>
          This is the actual cooking. Here, we translate the foundation and story into a verbal and
          visual identity. Many people describe this as the fun part—things become concrete, and we
          add DNA to the concept.
        </p>
        <p>
          A visual and verbal translation of the concept into a brand identity. From brand values
          and tone of voice to logos, colors, patterns, and illustrations—all bundled into a brand
          guide, ready to make noise and stand out!
        </p>
        <div class="tags">
          <span>Positioning Statement</span>
          <span>Concept Description</span>
          <span>Key Message</span>
          <span>Tagline</span>
          <span>The Motto</span>
          <span>Brand Value</span>
        </div>
      </div>
      <div class="block">
        <img src="/img/branding.png" alt="Branding" />
      </div>
    </div>
  </section>

  <section class="even trigger">
    <div class="inner">
      <div class="block">
        <h2>Designing</h2>
        <p>
          This is the finishing touch. Here, we plate all the ingredients and flavors from the
          branding phase onto the right dish, add some extra spice, and implement it into your
          venue.
        </p>
        <p>
          We translate the branding into all desired forms of collateral and print materials and
          ensure it is seamlessly integrated into your venue. We design and build websites, create
          packaging, menus, merchandise, and all other branding elements to bring your concept to
          life.
        </p>
        <div class="tags">
          <span>Positioning Statement</span>
          <span>Concept Description</span>
          <span>Key Message</span>
          <span>Tagline</span>
          <span>The Motto</span>
          <span>Brand Value</span>
        </div>
      </div>
      <div class="block">
        <img src="/img/branding.png" alt="Branding" />
      </div>
    </div>
  </section>

  <section class="even purple trigger">
    <div class="inner">
      <div class="block">
        <h2>After Care</h2>
        <p>Think of it as the dessert, the cherry on top—essential to complete the experience.</p>
        <p>
          Concepts and branding evolve and sometimes need maintenance. We conduct brand and concept
          audits to ensure everything we do and communicate aligns with our original vision, making
          adjustments and providing ongoing upkeep.
        </p>
        <div class="tags">
          <span>Positioning Statement</span>
          <span>Concept Description</span>
          <span>Key Message</span>
          <span>Tagline</span>
          <span>The Motto</span>
          <span>Brand Value</span>
        </div>
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

    .tags {
      display: flex;
      gap: 0.5rem;
      span {
        color: white;
        text-wrap-mode: nowrap;
        font-weight: 400;
        background-color: $purple;
        display: flex;
        height: 25px;
        align-items: center;
        padding: 0 0.5rem;
        border-radius: 5px;
        font-size: 0.85rem;
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
      .tags {
        span {
          background: white;
          color: $purple;
        }
      }
    }
  }
</style>
