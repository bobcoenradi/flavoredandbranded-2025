<script>
  import { onMount } from 'svelte';
  import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

  let isClient = false;

  let footer;

  onMount(() => {
    isClient = true;
  });
</script>

<footer bind:this={footer}>
  <div class="footer-wrapper">
    {#if isClient}
      <div class="lottie">
        <LottiePlayer
          src="/lottie/druppel.json"
          autoplay={true}
          loop={true}
          controls={false}
          renderer="svg"
          background="transparent"
          height={90}
          width={270}
          controlsLayout />
      </div>
    {/if}

    <div class="left">
      <h2>Ready to spice things up?</h2>
      <h3>Let's add some flavor together!</h3>
      <!-- <a class="social" href="https://linkedin.com">
          <img src="/img/linkedin-white.svg" alt="LinkedIn" />
        </a> -->
    </div>
    <div class="right">
      <ul>
        <li>
          <a href="mailto:hello@flavoredandbranded.com">Email</a>
        </li>
        <li>
          <a href="tel:+31615058040">Phone</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sjo-baggen-2b131626/">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sjo-baggen-2b131626/">Instagram</a>
        </li>
      </ul>
    </div>
  </div>

  <div class="copyright">
    <a href="/terms-and-condition">Terms and Conditions</a>
    <img src="/img/flavoredandbranded-white.svg" alt="flavoredandbranded" />
    <p>Hellingbaan 424 Amsterdam</p>
  </div>
</footer>

<style lang="scss">
  @import 'src/scss/app.scss'; // Adjust the path as necessary

  footer {
    padding: 0 2rem;
    background-color: $purple;
    color: white;

    .footer-wrapper {
      // background-image: url('/img/drip.svg');
      // background-repeat: no-repeat;
      // background-position: top right;
      margin: 0 auto;
      max-width: 1280px;
      display: flex;
      justify-content: space-between;
      padding-top: 6rem;
      position: relative;
      @include small {
        flex-direction: column;
      }
      .lottie {
        position: absolute;
        top: -2px;
        right: 0;
        :global(svg path) {
          fill: white;
        }
      }
    }

    @include small {
      flex-direction: column;
    }
    .left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      .social {
        margin-bottom: 1rem;
        margin-top: 1rem;
        display: block;
        width: 15px;
        height: 15px;
        img {
          width: 100%;
          height: auto;
          margin-top: 0;
        }
      }
      h2 {
        font-size: 4.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        max-width: 500px;
        position: relative;
        @include small {
          font-size: 3rem;
        }
      }
      h3 {
        font-size: 2rem;
        font-weight: 200;
      }

      a {
        img {
          width: 2rem;
          height: 2rem;
          margin-top: 1rem;
        }
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      @include small {
        align-items: flex-start;
        padding-top: 1rem;
      }
      ul {
        list-style: none;
        li {
          font-size: 3rem;
          font-weight: 700;
          line-height: 3.5rem;
          a {
            text-decoration: none;
            color: white;
            position: relative;
            &:before {
              content: '';
              position: absolute;
              width: 100%;
              height: 1px;
              background: white;
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
      }
      p {
        text-align: right;
        line-height: 1.5rem;
        @include small {
          text-align: left;
        }
      }
    }

    .copyright {
      text-align: center;
      font-size: 1rem;
      font-weight: 100;
      color: $purple;
      padding: 1rem 0 2rem 0;
      margin: 2rem auto 0;
      display: flex;
      justify-content: space-between;
      max-width: 1280px;
      gap: 1rem;
      @include small {
        flex-direction: column;
        align-items: flex-start;
      }
      p {
        color: white;
        font-size: 0.8rem;
      }
      a {
        color: white;
      }
      img {
        width: 100px;
        height: auto;
        max-width: 120px;
      }
    }
  }
</style>
