<script>
  import './../scss/app.scss';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import { onMount } from 'svelte';
  import Lenis from 'lenis'; // Ensure the import is correct

  let lenis;

  onMount(() => {
    lenis = new Lenis();

    // console.log('Lenis initialized');

    // lenis.on('scroll', (e) => {
    //   console.log(e);
    // });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
</script>

<div id="content-loaded" class=""></div>
<Header />

<div class="container">
  <main>
    <slot />
  </main>
</div>

<Footer />
