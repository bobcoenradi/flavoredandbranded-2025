<script>
  import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
  import { onMount } from 'svelte';
  export let onAnimationEnd;

  let isClient = false;

  onMount(() => {
    isClient = true;
  });
</script>

<div class="loading-animation" on:animationend={onAnimationEnd}>
  {#if isClient}
    <!-- infaden -->
    <LottiePlayer
      src="/lottie/loading.json"
      autoplay={true}
      loop={false}
      controls={false}
      renderer="svg"
      background="transparent"
      height={300}
      width={300}
      controlsLayout>
    </LottiePlayer>
  {/if}
</div>

<style>
  .loading-animation {
    /* Define your animation here */
    animation: fadeOut 3.5s;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
