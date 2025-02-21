<script>
  import IntersectionObserver from 'svelte-intersection-observer';

  import { gsap } from 'gsap/dist/gsap';

  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import { onMount } from 'svelte';
  import { urlFor } from '$lib/sanity';

  import { getFile } from '@sanity/asset-utils';
  import { client } from '$lib/sanity';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  let skewThis;

  let intersecting;
  let element;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(skewThis, 'skewY', 'deg'), // fast
      clamp = gsap.utils.clamp(-5, 5); // don't let the skew go beyond 20 degrees.

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: 'power3',
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    // make the right edge "stick" to the scroll bar. force3D: true improves performance
    gsap.set(skewThis, { transformOrigin: 'right center', force3D: true });
  });

  export let data;
  // export let overviewData;
  // console.log(data);

  // console.log($page);

  let visitedPage = '';

  let nextPage;
  let prevPage;

  let prevSlug;
  let nextSlug;

  $: {
    const currentPage = $page.url.pathname;
    if (currentPage !== visitedPage) {
      // console.log('Page changed');
      const currentItemSlug = data.items.slug.current;
      let currentIndex = allItems.findIndex((item) => item.slug.current === currentItemSlug);
      // Calculate indices of previous and next items
      prevPage = currentIndex - 1;
      nextPage = currentIndex + 1;

      // console.log('Current index:', currentIndex);
      // console.log('Previous index:', prevPage);
      // console.log('Next index:', nextPage);

      // Get slugs of previous and next items, if they exist
      prevSlug = prevPage >= 0 ? allItems[prevPage].slug.current : null;
      nextSlug = nextPage < allItems.length ? allItems[nextPage].slug.current : null;

      // console.log('Previous slug:', prevSlug);
      // console.log('Next slug:', nextSlug);
    }
  }

  const goToPrevious = () => {
    const url = `/portfolio/${prevSlug}`;
    goto(url);
  };

  const goToNext = () => {
    const url = `/portfolio/${nextSlug}`;
    goto(url);
  };

  const allItems = data.allItems;

  // // Find index of current item in allItems array
  // currentIndex = allItems.findIndex((item) => item.slug.current === currentItemSlug);

  // // Calculate indices of previous and next items
  // const prevIndex = currentIndex - 1;
  // const nextIndex = currentIndex + 1;

  // // Get slugs of previous and next items, if they exist
  // const prevSlug = prevIndex >= 0 ? allItems[prevIndex].slug.current : null;
  // const nextSlug = nextIndex < allItems.length ? allItems[nextIndex].slug.current : null;

  // Add a key that updates with the current item slug
  $: key = data.items.slug.current;
</script>

<svelte:head>
  <title>
    {data.items.title} - flavoredandbranded
  </title>
  <meta
    name="description"
    content="Complete packages in branding, concept and design as well as standalone services in visual design, social media templates, menu cards, packaging, animations, web design, prints, interior, shop design, merchandise, and photography. We aim to meet all your creation needs that align with our spectrum, so feel free to share your thoughts with us anytime and let's rendezvous!" />
</svelte:head>

<div class="portfolio-wrapper">
  <div class="portfolio-title">
    <div class="inner">
      <IntersectionObserver {element} bind:intersecting>
        {#if data.items.logo}
          <!-- fadein -->
          <img
            src={urlFor(data.items.logo.asset._ref).width(1920).quality(90).url()}
            alt="Logo"
            class="logo"
            class:intersecting
            bind:this={element} />
        {:else}
          <h1 class="title" class:intersecting>
            {#if data.items.title}
              {data.items.title}
            {/if}
          </h1>
        {/if}
        <svg viewBox="0 0 68 33" class="chevron-down">
          <path
            d="M.58 3.414l27.432 27.433c2.715 2.715 7.167 2.787 9.964.164L67.356 3.46 64.62.54 35.24 28.093c-1.222 1.146-3.212 1.114-4.4-.075L3.408.586.579 3.414z">
          </path>
        </svg>
      </IntersectionObserver>
    </div>
  </div>

  <div class="portfolio-details">
    <div class="description">
      {#if data.items.concept[0].children[0].text}
        <h2>Concept</h2>
        <p>
          {data.items.concept[0].children[0].text}
        </p>
      {/if}
    </div>
    <div class="services">
      {#if data.items.work}
        <h2>Work</h2>
        <ul>
          {#each data.items.work as item}
            <li>{item}</li>
          {/each}
        </ul>
      {/if}
    </div>
    <div class="links">
      {#if data.items.visits}
        <h2>Visits</h2>
        <ul>
          {#each data.items.visits as visit}
            <li><a href={visit.href}>{visit.title}</a></li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>
  <div class="portfolio-content" bind:this={skewThis}>
    {#key data.items.portfolioarray}
      {#each data.items.portfolioarray as item}
        {#if item.portfolioImage}
          <figure>
            <img src={urlFor(item.portfolioImage.asset._ref)} alt="Portfolio Image" />
          </figure>
        {/if}
        {#if item.portfolioVideo}
          <div class="video">
            <video autoplay loop muted playsinline>
              <source
                src={getFile(item.portfolioVideo, client.config()).asset.url}
                type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        {/if}
      {/each}
    {/key}
  </div>
  {#if data.allItems}
    <div class="portfolio-navigation">
      {#if prevSlug !== null}
        <button class="previous-item" on:click={goToPrevious}>Previous</button>
      {/if}
      {#if nextSlug !== null}
        <button class="next-item" on:click={goToNext}>Next</button>
      {/if}
    </div>
  {/if}
</div>

<style lang="scss">
  @import 'src/scss/app.scss'; // Adjust the path as necessary
  @keyframes hover-me {
    100% {
      transform: translate3d(-50%, 15px, 0);
    }
  }
  .chevron-down {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
    animation: hover-me 0.5s infinite ease-in-out alternate;
    @include mobile {
      bottom: 30px;
    }
  }
  .portfolio-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .logo {
    max-width: 150px;
    opacity: 0;
    transition: 1500ms ease-in-out opacity;
    &.intersecting {
      opacity: 1;
    }
  }
  .portfolio-title {
    min-height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem 2rem 2rem;
    .inner {
      text-align: center;
      padding-bottom: 8rem;
    }
    .title {
      font-size: 4rem;
      font-weight: 100;
      margin-bottom: 1rem;
    }
  }
  .portfolio-details {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    @include small {
      flex-direction: column;
      align-items: flex-start;
    }
    .inner {
      text-align: center;
    }
    h2 {
      font-size: 2rem;
      font-weight: 100;
      margin-bottom: 1rem;
    }
    .description {
      max-width: 500px;

      p {
        font-size: 1rem;
        font-weight: 100;
        line-height: 1.5rem;
      }
    }
    .services {
      ul {
        list-style: none;
        li {
          font-size: 1rem;
          font-weight: 100;
          padding: 0.5rem 0;
        }
      }
    }
    .links {
      ul {
        list-style: none;
        li {
          font-size: 1rem;
          font-weight: 100;
          padding: 0.5rem 0;
          a {
            text-decoration: none;
            color: $purple;
            font-weight: 100;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
  .portfolio-content {
    .boxed {
      max-width: 1200px;
      margin: 0 auto;
    }
    .padding {
      padding: 2rem;
    }

    figure {
      margin: 0;
      padding: 1.5rem 3rem;
      @include mobile {
        padding: 0.5rem 1rem;
      }
    }
    .video {
      margin: 0;
      padding: 1.5rem 3rem;
      @include mobile {
        padding: 0.5rem 1rem;
      }
      video {
        width: 100%;
        height: auto;
      }
    }
    video,
    img {
      width: 100%;
      height: auto;
    }
    .parallax {
      /* Set a specific height */
      min-height: 500px;

      /* Create the parallax scrolling effect */
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  .portfolio-navigation {
    display: flex;
    justify-content: space-evenly;
    padding: 2rem 2rem 6rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    gap: 2rem;
    width: 100%;
    button {
      text-decoration: none;
      color: $purple;
      font-weight: 100;
      padding: 0;
      font-size: 2rem;
      border: none;
      cursor: pointer;
      appearance: none;
      position: relative;
      background: none;
      font-family: inherit;
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background: $purple;
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
</style>
