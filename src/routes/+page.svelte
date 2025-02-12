<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';
  import { onMount } from 'svelte';

  import SplitType from 'split-type';
  import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

  let isClient = false;

  let intersecting;
  let element;
  let splitInstance;
  let lines = [];

  const initializeSplitType = () => {
    if (element) {
      // Initialize SplitType on the element
      splitInstance = new SplitType(element, { types: 'words' });
    } else {
      // Retry after a short delay if the element is not available yet
      setTimeout(initializeSplitType, 100);
    }
  };

  export let data;

  onMount(() => {
    console.log('onMount');
    console.log(data);
    isClient = true;

    initializeSplitType();
  });
</script>

<svelte:head>
  <title>flavoredandbranded</title>
  <meta name="description" content="{data.items.h1} {data.items.h2}" />
</svelte:head>

<div class="home-wrapper">
  <IntersectionObserver once {element} bind:intersecting>
    <h1 class:intersecting>
      <span bind:this={element}>
        We create concepts and branding for
        {#if isClient}
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
        {/if}
      </span>
    </h1>
    <p class:intersecting>
      Concepts for the spirit, branded for the crowd.
      <br />
      Flavored for the eye, to feed the word-of-mouth.
    </p>
  </IntersectionObserver>

  <ul class:intersecting>
    <li>
      <a href="/about">About</a>
    </li>
    <li>
      <a href="/portfolio">Work</a>
    </li>
  </ul>
</div>

<style lang="scss">
  @keyframes reveal {
    0% {
      transform: translate(0, 100%);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  :global(#floating-circle) {
    display: none !important;
  }

  p {
    opacity: 0;
    transition: 1000ms ease-in-out opacity;
    transition-delay: 500ms;
    &.intersecting {
      opacity: 1;
    }
  }
  h1 {
    margin: 0;
    text-align: left;
    line-height: 1;
    opacity: 0;
    transition: 1000ms ease-in-out opacity;

    :global(.line) {
      overflow: hidden;
      opacity: 0;
    }
    // :global(.line .word) {
    //   transform: translate(0, 100%);
    // }
  }
  h1.intersecting {
    opacity: 1;

    :global(.line) {
      opacity: 1;
    }

    // :global(.line .word) {
    //   animation: reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s;
    //   animation-fill-mode: forwards;
    // }
  }

  .home-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
    min-height: calc(100vh - 200px);
    max-width: 720px;
    margin: 0 auto;
    align-items: center;
    .welcome {
      transform: translateX(-30px);
      opacity: 0;
      transition: 1000ms ease-in-out opacity;
      transition-delay: 300ms;
      &:global(.intersecting) {
        opacity: 1;
      }
    }
    h1 {
      max-width: 550px;
      font-size: 3rem;
      line-height: 1.15;
      text-align: center;
      @media screen and (max-width: 768px) {
        font-size: 2rem;
      }

      :global(span) {
        display: flex;
        flex-wrap: wrap;
        margin-right: 5px;
        align-items: center;
        place-content: center;
        :global(.word) {
          margin-right: 10px;
        }
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
    ul {
      display: flex;
      gap: 2rem;
      flex-direction: row;
      list-style: none;
      padding: 0;
      margin: 1rem 0 0 0;
      opacity: 0;
      transition: 1000ms ease-in-out opacity;
      transition-delay: 1000ms;
      &:global(.intersecting) {
        opacity: 1;
      }
      li {
        a {
          color: #191919;
          text-decoration: none;
          font-weight: 100;
          font-size: 1.3rem;
          position: relative;
          display: inline-flex;
          align-items: center;
          border: 0.5px solid #191919;
          height: 36px;
          padding: 0 1rem;

          &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            background: #191919;
            bottom: -1px;
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
    }
  }
</style>
