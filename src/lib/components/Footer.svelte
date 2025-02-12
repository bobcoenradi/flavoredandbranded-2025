<script>
  import { onMount } from 'svelte';
  import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

  let currentYear;
  let isClient = false;
  let controlsLayout = [];

  let fixedElement;
  let footer;
  let sticking = false;
  let lastScrollY = 0;
  let scrollTimer;

  // Function to check if the fixed element hits the footer
  function checkPosition() {
    const fixedRect = fixedElement.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();

    if (fixedRect.bottom >= footerRect.top) {
      // Fixed element hits the footer, make it stick
      sticking = true;
    } else {
      // Fixed element is above the footer, reset sticking
      sticking = false;
    }

    // Update the position of the fixed element
    updatePosition();
  }

  // Function to update the position of the fixed element
  function updatePosition() {
    if (sticking) {
      const footerRect = footer.getBoundingClientRect();
      fixedElement.style.bottom = `${window.innerHeight - footerRect.top}px`;
    } else {
      fixedElement.style.bottom = ''; // Reset the bottom value when not sticking
      // Calculate translateY based on scroll velocity
      const deltaY = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
      const translateAmount = deltaY * 2;
      moveFloatingElement(translateAmount);
      // Reset timer for smooth return to original position
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        moveFloatingElement(0);
      }, 100); // Adjust this value for smoother or quicker return
    }
  }

  // Function to apply translateY to the fixed element
  function moveFloatingElement(translateAmount) {
    fixedElement.style.transform = `translateY(${translateAmount}px)`;
  }

  // Function to scroll to the top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onMount(() => {
    isClient = true;
    currentYear = new Date().getFullYear();

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', updatePosition);
    return () => {
      window.removeEventListener('scroll', checkPosition);
      window.removeEventListener('resize', updatePosition);
    };
  });
</script>

<div id="floating-circle" bind:this={fixedElement} on:click={scrollToTop}>
  {#if isClient}
    <LottiePlayer
      src="/lottie/cirkel.json"
      autoplay={true}
      loop={true}
      controls={false}
      renderer="svg"
      background="transparent"
      height={100}
      width={100}
      controlsLayout>
    </LottiePlayer>
    <div class="scroll-to-top">Scroll to the top</div>
  {/if}
</div>

<footer bind:this={footer}>
  <div class="footer-wrapper">
    <div class="footer-inner">
      <div class="left">
        <h2>
          Let's <br />
          connect! {#if isClient}
            <div class="arrow">
              <LottiePlayer
                src="/lottie/arrow_footer_white.json"
                autoplay={true}
                loop={true}
                controls={false}
                renderer="svg"
                background="transparent"
                height={100}
                width={100}
                controlsLayout>
              </LottiePlayer>
            </div>
          {/if}
        </h2>
        <!-- <a class="social" href="https://linkedin.com">
          <img src="/img/linkedin-white.svg" alt="LinkedIn" />
        </a> -->
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/sjo-baggen-2b131626/">LinkedIn</a>
          </li>
          <li>
            <a href="mailto:hello@flavoredandbranded.com">hello@flavoredandbranded.com</a>
          </li>
          <li>
            <a href="tel:+31615058040">+31 (0)6 15058040</a>
          </li>
        </ul>
      </div>
      <div class="right">
        <p>
          KVK 94045127
          <br />
          Brandslangstraat 101
          <br />
          Amsterdam
        </p>
      </div>
    </div>
  </div>

  <div class="copyright">
    <p>
      &copy; <span id="current-year">{currentYear}</span>
      flavoredandbranded.com
    </p>
  </div>
</footer>

<style lang="scss">
  @import 'src/scss/app.scss'; // Adjust the path as necessary

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  #floating-circle {
    position: fixed;
    bottom: 30px;
    right: 30px;
    transition: ease-in-out 0.5s;
    // animation: float 6s ease-in-out infinite;
    cursor: pointer;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    .scroll-to-top {
      display: none;
      font-size: 1rem;
      color: white;
      text-align: center;

      justify-content: center;
      align-items: center;
      padding: 1rem;
    }

    &:hover {
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA2MDAgNjAwIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBjbGlwLXBhdGg6IHVybCgjY2xpcHBhdGgpOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KCiAgICAgIC5jbHMtMiwgLmNscy0zLCAuY2xzLTQgewogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGw6ICNlNjY4NTI7CiAgICAgIH0KCiAgICAgIC5jbHMtNSB7CiAgICAgICAgZmlsbDogIzAwMDsKICAgICAgICBmaWxsLW9wYWNpdHk6IDA7CiAgICAgICAgc3Ryb2tlOiAjZmZmOwogICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgICBzdHJva2Utd2lkdGg6IDZweDsKICAgICAgfQoKICAgICAgLmNscy00IHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuY2xzLTYgewogICAgICAgIGRpc3BsYXk6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXBwYXRoIj4KICAgICAgPHJlY3QgY2xhc3M9ImNscy0yIiB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgY2xhc3M9ImNscy0xIj4KICAgIDxnPgogICAgICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik00OS4zLDMxMC45Yy4yLTM2LjIsNS40LTcxLjUsMTcuOS0xMDUuNiwxNC41LTM5LjYsMzguMy03Mi40LDcyLjMtOTcuNSwzMS45LTIzLjUsNjYuNC00MiwxMDQuNC01My44LDQ2LjctMTQuNCw5My0xMS4xLDEzNy44LDYuNiw4OS42LDM1LjQsMTQ0LDEwMC45LDE2Mi40LDE5NS42LDYuNCwzMy4xLDYsNjYuMy0zLjEsOTktNi4zLDIyLjUtMTcuOCw0Mi40LTMyLjEsNjAuNi0yMy4xLDI5LjYtNDcuNyw1Ny44LTc2LjksODEuNy0zMC43LDI1LjEtNjQuNiw0NC4xLTEwMy44LDUyLjYtNDEuNyw5LTgyLjUsNC4xLTEyMi0xMC40LTYwLjYtMjIuMy0xMDcuMS02MC45LTEzNC42LTEyMC4zLTE2LTM0LjQtMjIuNS03MC44LTIyLjItMTA4LjZaIi8+CiAgICAgIDxnIGNsYXNzPSJjbHMtNiI+CiAgICAgICAgPGc+CiAgICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0zOTcuOSwzMTAuNGMtMi41LS42LTQuNC0yLjMtMy41LTQuOS43LTIuMSwxLjktMy45LDIuMi02LjEuMy0yLDAtMy45LS45LTUuNy0xLjktMy41LTUuOS01LjctOS45LTUuOC01LjEsMC05LjgsMy0xMy45LDUuNi0yLDEuMi0zLjYsMy4yLTUuMiw0LjgtLjUuNS0xLDEtMS41LDEuNWgwYzAsLjEtLjIuMi0uMi4zLTMuOSwzLjgtOC40LDcuMy0xMy43LDkuMS00LjYsMS42LTEwLjYsMi40LTE1LjIuNS04LjgtMy44LTE1LTEyLjktMTQuMS0yMi41LjQtMy42LDIuNS05LjEsNi40LTEwLjQsMS45LS42LDQuNC4xLDUuNywxLjYsMS44LDIsMCw0LjUtLjksNi41LTEuNiwzLjktMS4yLDgsMS45LDExLDMuMSwzLDcuMywzLjksMTEuNSwzLDYuOS0xLjUsMTIuMS02LjYsMTcuMi0xMSwzLjQtMi45LDYuMy02LjIsMTAuMy04LjMsNC41LTIuNCwxMC4yLTMuNiwxNS4zLTMsNC42LjYsOSwzLjgsMTIuMSw3LjEsMy40LDMuNiw1LjIsOC4zLDUuNSwxMy4yLjMsNC4zLS45LDguMy0zLjgsMTEuNi0xLjQsMS42LTMuMiwyLjYtNS40LDJaIi8+CiAgICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik0zOTcuOSwzMTAuNGMtMi41LS42LTQuNC0yLjMtMy41LTQuOS43LTIuMSwxLjktMy45LDIuMi02LjEuMy0yLDAtMy45LS45LTUuNy0xLjktMy41LTUuOS01LjctOS45LTUuOC01LjEsMC05LjgsMy0xMy45LDUuNi0yLDEuMi0zLjYsMy4yLTUuMiw0LjgtLjUuNS0xLDEtMS41LDEuNWgwYzAsLjEtLjIuMi0uMi4zLTMuOSwzLjgtOC40LDcuMy0xMy43LDkuMS00LjYsMS42LTEwLjYsMi40LTE1LjIuNS04LjgtMy44LTE1LTEyLjktMTQuMS0yMi41LjQtMy42LDIuNS05LjEsNi40LTEwLjQsMS45LS42LDQuNC4xLDUuNywxLjYsMS44LDIsMCw0LjUtLjksNi41LTEuNiwzLjktMS4yLDgsMS45LDExLDMuMSwzLDcuMywzLjksMTEuNSwzLDYuOS0xLjUsMTIuMS02LjYsMTcuMi0xMSwzLjQtMi45LDYuMy02LjIsMTAuMy04LjMsNC41LTIuNCwxMC4yLTMuNiwxNS4zLTMsNC42LjYsOSwzLjgsMTIuMSw3LjEsMy40LDMuNiw1LjIsOC4zLDUuNSwxMy4yLjMsNC4zLS45LDguMy0zLjgsMTEuNi0xLjQsMS42LTMuMiwyLjYtNS40LDJaIi8+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=');

      > :global(div:not(.scroll-to-top)) {
        display: none;
      }
      :global(.lottie-player) {
        display: none;
      }
      .scroll-to-top {
        display: flex;
      }
    }
    &.fade-out {
      opacity: 0;
    }
  }
  footer {
    padding: 2rem;
    background: black;
    color: white;

    .footer-wrapper {
      margin: 0 auto;
      max-width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }

    .footer-inner {
      display: flex;
      justify-content: space-between;
      width: 100%;

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
          font-size: 2rem;
          font-weight: 100;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          max-width: 500px;
          position: relative;
          img {
            margin-left: 1rem;
          }
          .arrow {
            display: inline;
            position: absolute;
            right: -50px;
            bottom: -60px;
            @include small {
              bottom: -60px;
            }
          }
        }
        ul {
          list-style: none;
          li {
            font-size: 1rem;
            font-weight: 100;
            line-height: 1.5rem;
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
        .footer-logo {
          width: 100px;
          height: auto;
          margin-bottom: 1rem;
          > div {
            width: 100px;
            @include small {
              width: 150px;
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
    }
    .copyright {
      text-align: center;
      font-size: 1rem;
      font-weight: 100;
      color: $black;
      padding: 1rem 1rem 0 1rem;
      margin-top: 2rem;
      p {
        color: rgb(76, 76, 76);
        font-size: 0.8rem;
      }
    }
  }
</style>
