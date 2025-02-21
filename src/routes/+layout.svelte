<script lang="ts">
  import './../scss/app.scss';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import { onMount } from 'svelte';
  // Instantiate GSAP
  import { gsap, ScrollSmoother, ScrollTrigger } from '$lib/scripts/gsap';

  import { page } from '$app/stores';

  let smoother: ScrollSmoother;

  let gsapElement: HTMLElement | null = null;

  function updateTheme(path) {
    if (typeof document !== 'undefined') {
      document.body.setAttribute('data-theme', path);
    }
  }
  onMount(() => {
    updateTheme($page.url.pathname);

    if (gsapElement) {
      gsap.set(gsapElement, {});
    }
    smoother = ScrollSmoother.create({
      smooth: 1,
      effects: false,
    });
  });

  $: updateTheme($page.url.pathname);
</script>

<Header />

<div id="smooth-wrapper">
  <div id="smooth-content">
    <div class="container">
      <main>
        <slot />
      </main>
    </div>
    <Footer />
  </div>
</div>
