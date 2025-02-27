<script lang="ts">
  import './../scss/app.scss';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import { onMount, onDestroy, afterUpdate } from 'svelte';
  import { gsap, ScrollSmoother, ScrollTrigger } from '$lib/scripts/gsap';
  import { page } from '$app/stores';

  let smoother: ScrollSmoother;
  let gsapElement: HTMLElement | null = null;
  let triggers: ScrollTrigger[] = [];
  let prevPath = '';

  function updateTheme(path) {
    if (typeof document !== 'undefined') {
      document.body.setAttribute('data-theme', path);
    }
  }

  function createScrollTriggers() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Remove previous triggers

    triggers = gsap.utils.toArray<HTMLElement>('section.trigger').map((elem) => {
      return ScrollTrigger.create({
        trigger: elem,
        start: 'top 95%',
        end: 'bottom 5%',
        scrub: true,
        markers: true,
        onEnter: () => elem.classList.add('active'),
        // onLeave: () => elem.classList.remove('active'),
        // onEnterBack: () => elem.classList.add('active'),
        // onLeaveBack: () => elem.classList.remove('active'),
      });
    });

    ScrollTrigger.refresh(); // Ensure new triggers are properly set up
  }

  onMount(() => {
    updateTheme($page.url.pathname);
    prevPath = $page.url.pathname;

    if (gsapElement) {
      gsap.set(gsapElement, {});
    }

    smoother = ScrollSmoother.create({
      smooth: 1,
      effects: false,
    });

    createScrollTriggers();
  });

  afterUpdate(() => {
    if ($page.url.pathname !== prevPath) {
      prevPath = $page.url.pathname;
      createScrollTriggers(); // Recreate ScrollTriggers only when navigating
    }
  });

  onDestroy(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup on app exit
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
