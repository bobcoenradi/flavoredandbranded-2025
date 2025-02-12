<script>
  import IntersectionObserver from 'svelte-intersection-observer';
  import { onMount } from 'svelte';

  // Store the index of the currently hovered list item
  let hoverIndex = -1;

  let intersecting;
  let element;
  let splitInstance;
  let lines = [];

  const handleMouseEnter = (index) => {
    hoverIndex = index;
  };

  const handleMouseLeave = () => {
    hoverIndex = -1;
  };

  export let data;

  onMount(() => {
    console.log(data);
  });
</script>

<svelte:head>
  <title>Work - flavoredandbranded</title>
</svelte:head>

<div class="padding">
  <div class="portfolio-overview">
    <IntersectionObserver once {element} bind:intersecting>
      <ul class="work">
        {#each data.items as item, index}
          <li
            on:mouseenter={() => handleMouseEnter(index)}
            on:mouseleave={handleMouseLeave}
            class:grey={hoverIndex !== -1 && hoverIndex !== index}
            class:intersecting>
            <a
              href="/portfolio/{item.slug.current}"
              bind:this={element}
              data-sveltekit-preload-data>
              {item.title}
              {#if item.subtitle}
                <span>{item.subtitle}</span>
              {/if}
            </a>
          </li>
        {/each}
      </ul>
    </IntersectionObserver>
  </div>
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
  .padding {
    padding: 2rem;
  }

  .portfolio-overview {
    min-height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    max-width: 720px;
    margin: 0 auto;
    @include small {
      justify-content: flex-start;
    }
  }

  .page-title {
    font-weight: 100;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  ul.work {
    @include small {
      padding-top: 4rem;
    }
    li {
      padding: 0.3rem 0;
      list-style: none;
      color: $black;
      width: fit-content;
      visibility: hidden;
      &.intersecting {
        visibility: visible;
        overflow: hidden;

        a {
          opacity: 1;
        }
      }
      @include small {
        width: 100%;
      }
      a {
        text-decoration: none;
        font-size: 3rem;
        font-weight: 100;
        color: inherit;
        display: inline-block;
        opacity: 0;
        transition: 500ms ease-in-out opacity;
        transition-delay: 500ms;
        @include small {
          font-size: 2rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          max-width: 100%;
        }
        span {
          font-size: 1rem;
          font-weight: 100;
          @include small {
            display: none;
          }
        }
      }
      &.grey {
        filter: blur(1px);
        color: $darkgrey;
      }
    }
  }
</style>
