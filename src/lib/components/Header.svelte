<script>
  import bodyClass from '$lib/actions/bodyClass';
  let menuOpen = false;

  const toggleMenu = () => {
    menuOpen = !menuOpen;
  };
  const classOverflow = bodyClass('no-scroll');
</script>

<svelte:body use:classOverflow={menuOpen} />
<div id="overlay" on:click={toggleMenu}></div>
<header id="header" class="hidden">
  <div class="logo-wrapper" class:open={menuOpen}>
    <h1 class="logo">
      <a href="/"><img src="/img/flavoredandbranded-white.svg" alt="flavoredandbranded" /></a>
    </h1>
  </div>

  <div id="nav-icon" on:click={toggleMenu} class:open={menuOpen}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</header>
<nav id="main-navigation" class:open={menuOpen}>
  <ul class="main-menu">
    <li on:click={toggleMenu}><a href="/" data-sveltekit-preload-data>Home</a></li>
    <li on:click={toggleMenu}><a href="/about" data-sveltekit-preload-data>About</a></li>
    <li on:click={toggleMenu}><a href="/portfolio" data-sveltekit-preload-data>Work</a></li>
  </ul>

  <div class="contact">
    <!-- <a class="social" href="https://linkedin.com">
      <img src="/img/linkedin-black.svg" alt="LinkedIn" />
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
</nav>

<style lang="scss">
  @import 'src/scss/app.scss'; // Adjust the path as necessary
  @keyframes lightSpeedInRight {
    from {
      -webkit-transform: translate3d(100%, 0, 0) skewX(-4deg);
      transform: translate3d(100%, 0, 0) skewX(-4deg);
      opacity: 0;
    }

    60% {
      -webkit-transform: skewX(3deg);
      transform: skewX(3deg);
      opacity: 1;
    }

    80% {
      -webkit-transform: skewX(-1deg);
      transform: skewX(-1deg);
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  #header {
    position: sticky;
    top: 0;
    mix-blend-mode: exclusion;
    pointer-events: none;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem;
    z-index: 1000;
    height: 120px;
    align-items: center;

    .logo-wrapper {
      pointer-events: all;
      mix-blend-mode: exclusion;
      opacity: 1;
      transition: 300ms ease-in-out opacity;
      &.open {
        @include mobile {
          opacity: 0;
        }
      }
      h1.logo {
        position: relative;

        img {
          width: 100%;
          max-width: 200px;
          @include small {
            max-width: 200px;
          }
        }
      }
    }
  }
  #nav-icon {
    width: 45px;
    height: 45px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    mix-blend-mode: exclusion;
    pointer-events: all;

    span {
      display: block;
      position: absolute;
      height: 2px;
      width: 50%;
      background: white;
      opacity: 1;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;

      &:nth-child(even) {
        left: 50%;
        border-radius: 0 9px 9px 0;
      }
      &:nth-child(odd) {
        left: 0px;
        border-radius: 9px 0 0 9px;
      }
      &:nth-child(1),
      &:nth-child(2) {
        top: 0px;
      }
      &:nth-child(3),
      &:nth-child(4) {
        top: 15px;
      }
      &:nth-child(5),
      &:nth-child(6) {
        top: 30px;
      }
    }
    &.open {
      z-index: 1000;
      span {
        &:nth-child(1),
        &:nth-child(6) {
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          transform: rotate(45deg);
        }
        &:nth-child(2),
        &:nth-child(5) {
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
        &:nth-child(1) {
          left: 5px;
          top: 5px;
        }
        &:nth-child(2) {
          left: calc(50% - 5px);
          top: 5px;
        }
        &:nth-child(3) {
          left: -50%;
          opacity: 0;
        }
        &:nth-child(4) {
          left: 100%;
          opacity: 0;
        }
        &:nth-child(5) {
          left: 5px;
          top: 18px;
        }
        &:nth-child(6) {
          left: calc(50% - 5px);
          top: 18px;
        }
      }
    }
  }
  #main-navigation {
    position: fixed;
    top: 0;
    right: -50px;
    height: 100%;
    width: calc(100vw - 50px);
    max-width: 350px;
    padding-right: 50px;
    background: #fff;
    z-index: 999;
    transform: translateX(320px);
    transition: transform 0.3s ease-in-out;
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.05);
    overflow-y: auto;
    h2 {
      font-weight: 100;
      font-size: 1rem;
      text-align: left;
    }
    &.open {
      animation-name: lightSpeedInRight;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;

      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    ul.main-menu {
      list-style: none;
      margin-top: 1rem;
      li {
        padding: 0.3rem 0;
        a {
          color: #191919;
          font-size: 1.5rem;
          text-decoration: none;
          position: relative;
          &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            background: #191919;
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
    .contact {
      .social {
        margin-bottom: 1rem;
        display: block;
        width: 15px;
        height: 15px;
        img {
          width: 100%;
          height: auto;
          margin-top: 0;
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
            color: #191919;
            position: relative;
            &:before {
              content: '';
              position: absolute;
              width: 100%;
              height: 1px;
              background: #191919;
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
    }
  }
</style>
