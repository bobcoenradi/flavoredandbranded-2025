<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap/dist/gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import MarqueeContent from 'marquee-content';
  import { PortableText } from '@portabletext/svelte';
  import { urlFor } from '$lib/sanity';

  let intersecting;
  let element;

  // Debugging step: ensure MarqueeContent is correctly imported
  // console.log('MarqueeContent:', MarqueeContent);

  gsap.registerPlugin(ScrollTrigger);

  // Check if registerGSAP exists on MarqueeContent
  if (MarqueeContent && typeof MarqueeContent.registerGSAP === 'function') {
    MarqueeContent.registerGSAP(gsap, ScrollTrigger);
  } else {
    console.error('MarqueeContent.registerGSAP is not available.');
  }

  let marqueeElement;

  // function that adds class intersecting to element
  const handleIntersect = (entry) => {
    if (entry.isIntersecting) {
      intersecting = true;
    }
  };

  export let data;

  onMount(() => {
    console.log(data);
    handleIntersect({
      isIntersecting: true,
    });

    try {
      if (MarqueeContent) {
        const marquee = new MarqueeContent({
          element: marqueeElement,
        });

        marquee.init();
      }
    } catch (error) {
      console.error('Error initializing MarqueeContent:', error);
    }
  });
</script>

<svelte:head>
  <title>{data.items.name}</title>
  <meta name="description" content={data.items.bio[0].children[0].text} />
</svelte:head>

<div class="about-wrapper">
  <section>
    <div class="half" class:intersecting bind:this={element}>
      {#if data.items.bio}
        <PortableText value={data.items.bio} />
      {/if}
      {#if data.items.image}
        <img
          src={urlFor(data.items.image.asset._ref).width(1920).quality(90).url()}
          alt="Flavored and Branded"
          class="mobile" />
      {/if}
      {#if data.items.about}
        <PortableText value={data.items.about} />
      {/if}
    </div>
    <div class="half" class:intersecting bind:this={element}>
      <img
        src={urlFor(data.items.image.asset._ref).width(1920).quality(90).url()}
        alt="Flavored and Branded"
        class="desktop" />
    </div>
  </section>
  <!-- <section class="marquee-wrapper">
    <div
      bind:this={marqueeElement}
      class="marquee"
      data-mc-skew="0"
      data-mc-speed="20"
      data-mc-direction="ltr"
      role="marquee">
      <ul>
        <li>Sjo</li>
        <li>Baggen</li>
      </ul>
    </div>
  </section> -->

  <!-- <section class="reverse">
    <div class="half">
      <img src="/content/thejoint/TJPB_04.jpg" />
    </div>
    <div class="half">
      <h1>'Hospitality state of mind'</h1>
      <p>
        Having a hospitality state of mind is all about making people feel right at home, being
        friendly. It's about being genuine and respectful, making sure everyone feels seen and
        appreciated. Knowing how to vibe with them and what they're all about. Translate this into a
        concept and it's branding with inviting design is what we stand do and stand for.
      </p>
    </div>
  </section> -->
</div>

<style lang="scss">
  @import 'src/scss/app.scss';
  .about-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    min-height: 100vh;

    img {
      width: 100%;
      height: auto;
    }
    section {
      display: flex;
      gap: 6rem;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
      padding: 6rem 2rem;

      @include small {
        flex-direction: column;
        gap: 2rem;
        padding-bottom: 0;
        padding-top: 2rem;
      }

      .desktop {
        display: block;
        @include small {
          display: none;
        }
      }

      .mobile {
        display: none;
        @include small {
          display: block;
          margin-bottom: 2rem;
        }
      }
      &:last-child {
        padding-bottom: 6rem;
      }
      @include small {
        flex-direction: column;
        &.reverse {
          flex-direction: column-reverse;
          padding-bottom: 6rem;
        }
      }
      .half {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        opacity: 0;
        transition: 500ms ease-in-out opacity;
        transition-delay: 500ms;
        &.intersecting {
          opacity: 1;
        }
        :global(a) {
          color: black;
          position: relative;
          text-decoration: none;
          &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            background: black;
            bottom: -2px;
            left: 0;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.3s ease-in-out;
          }
          &:hover {
            &:before {
              transform: scaleX(1);
            }
          }
        }
      }

      :global(h1) {
        font-size: 2rem;
        font-weight: 100;
        margin-bottom: 1rem;
      }
      :global(h2) {
        font-size: 2rem;
        font-weight: 100;
        margin-bottom: 1rem;
      }
      :global(p) {
        max-width: 500px;
        font-weight: 100;
        line-height: 1.5rem;
        margin-bottom: 1rem;
      }
    }
    .marquee-wrapper {
      width: 100%;
      max-width: 100%;
      padding: 0;
      background: #e76852;
      color: white;
      .marquee {
        overflow: hidden;
        width: 100vw;
        display: flex;
        align-items: center;
        pointer-events: none;
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          white-space: nowrap;
          font-size: 3rem;

          li {
            padding: 0 10px;
            text-align: center;
          }
        }
      }
    }
  }
</style>
