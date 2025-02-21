<script>
  import bodyClass from '$lib/actions/bodyClass';
  let menuOpen = false;

  const toggleMenu = () => {
    // only for mobile
    if (window.innerWidth < 768) {
      menuOpen = !menuOpen;
    }
  };
  const classOverflow = bodyClass('no-scroll');
</script>

<svelte:body use:classOverflow={menuOpen} />
<div id="overlay" on:click={toggleMenu}></div>
<header id="header" class="hidden">
  <div class="inner">
    <div class="logo-wrapper" class:open={menuOpen}>
      <h1 class="logo">
        <a href="/">
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 428.7 166.1">
            <g>
              <path
                class="st0"
                d="M110.1,76.6c2.7-.9,4.4-2.4,5-4.4.4-1.6.2-3.3-.7-4.6-1.1-1.7-3.2-2.8-5.7-3.2-1.4-.2-4.8,0-9.9.2,0,0,.1-.2.2-.3,8.3-11.4,17.5-23.4,28.1-34.1,8.6.9,39.1.8,46.2-2.4,8.2-3.7,7-9.1,6.4-10.7-1.7-4.6-7.6-7.4-12.6-6-1.8.5-4.6,1.3-7.9,2.3-10.7,3.2-28.7,8.6-34.1,8.4-4.5-.1-11.3-2.1-19.3-4.3-20.5-5.7-48.5-13.6-71.1-1.8-13.6,7.1-21.2,16.3-21.2,25.9s2.3,10.9,6.6,15.1c5.5,5.2,13.7,8,22,7.7,13.3-.7,27.5-9.3,29.4-26.9.6-6.1-1.9-8.8-3.5-9.9-2.5-1.7-5.9-1.7-9-.1-3,1.6-4.7,4.3-4.7,7.3,0,22.6-7.6,22.8-10.1,22.9-4.1.2-8.5-1.6-11.9-4.6-3.2-3-5.1-6.9-5.2-11-.3-9.9,3.6-17.2,11.5-21,10.8-5.2,30.5-.8,49.6,3.4,10.4,2.3,20.3,4.5,28.8,5.2-1.1,1.2-2.3,2.3-3.4,3.5-2.4,2.5-4.8,5-7.2,7.5-7.7,8.2-15.2,16.5-22.5,24.8-6.4.4-12.4.8-14.5.6h-.2c-6.2,0-7.7,1.1-8.3,2.9-.3,1.1-.2,2.6,1.3,3.7,2.1,1.6,7.5,2.7,12.5,3.5-1.6,1.8-3.2,3.7-4.7,5.5-6.3,7.4-12.2,14.8-17.7,21.8-2.9,3.7-5.7,7.4-8.4,10.9l-.4.5c-.8,1.1-1.7,2.3-2.5,3.6-2.1,3.5-2.6,6.6-1.3,9.5,1.3,3,4.5,5,8,5s.6,0,.9,0c3-.3,6-2,8.3-4.7,1.8-2.1,3.2-4.6,4.5-7,.6-1.1,1.2-2.1,1.8-3.2,2-3.3,4-6.6,6.1-9.9,6.8-10.9,13.5-20.9,20-30.4,2.3.1,4.9.2,7.5.2,4.9,0,9.9-.4,13.3-1.5Z" />
              <path
                class="st0"
                d="M413.5,43.1c-.7-2.3-2.6-4-5-4.4-2.8-.5-5.6.9-7.7,3.7-2.1,2.6-5.5,7.7-9,13.1-3.9,5.9-8,12.1-10.7,15.5-.5.6-1.1,1.3-1.8,2.2-.5-.9-1.1-1.5-1.7-2-5.2-4.1-17.9.4-28.2,10.1-2.4,2.3-5.5,5.5-8.2,9-8.3,8.2-15.8,12.7-20.6,12.3-1.6-.1-2.8-.8-3.8-2.2-.7-1-1.1-2.2-1.2-3.4,1.7,1.6,4.1,2.1,6.7,1.3,10.3-3.2,17.1-11.7,18.5-18.4.7-3.5,0-6.3-2-8.1-1.9-1.7-4.6-2.4-7.8-2.2-6.7.6-15.1,5.7-20.9,12.8-1.2,1.4-2.3,2.9-3.2,4.3-12,12.7-17.5,14.6-19.7,14.6s0,0,0,0c-.7,0-1.2-.2-1.5-.5,0-1.1,3.1-4.1,5.2-6,4.6-4.4,10.2-9.9,10.6-16.2.3-3.9-2.8-6.3-5.1-8.1-.7-.6-1.9-1.4-2.1-1.8.1-1.3.5-2.1.9-3,.5-1.2,1.1-2.6.8-4.4-.5-3.7-3.5-6.2-7.1-5.9-3.7.3-6.5,3.2-6.5,6.7s.5,4.1,1,5.8c.6,2.1.9,3.5.3,4.1l-14.6,16.7c-4.5,4.5-8.6,6.1-10.9,6,6.5-10,7.3-19.3,2-23.4-6.3-5.1-18.1-.5-28.2,10.8-1.7,1.9-3.4,4-5,6.3-6.6,7.5-11.4,8.5-13.6,8.4-1.3,0-2.4-.4-3.4-1.2l1.5-1.8c2.7-3.1,4.7-5.4,6.1-7.5,4.4-5.6,4.9-6.7,5.6-7.9v-.2c1.4-2.7.6-5.6-1.9-7.2-2.6-1.7-6.9-1.8-9.4,1.2-8.5,10-12.5,18.3-11.7,24.2-7,6.3-13.1,8.5-16,5.9-3-2.7.2-6.9.8-7.7,3.4-3.9,7.4-7.2,10.7-9.8,1.6-1.3,3-2.4,4.2-3.5,3.6-3.3,3.5-6.2,3.1-7.6-.5-1.9-2.1-3.3-4.2-3.7-2.5-.5-5.1.5-6.8,2.6-1.4,1.7-3.2,4.3-5.2,7.3-1.8,2.7-3.9,5.8-6.1,8.8-11.6,12.2-16.9,12.8-18.3,12.7-.8,0-1.3-.4-1.8-1-1.7-2.4,7.1-10.5,10.9-14,2.6-2.4,4.8-4.4,6-6,2.4-3.2,1.9-5.7,1.3-6.9-.8-1.9-2.8-3.3-5-3.5-2.1-.2-4.2.5-5.6,1.9-.2-.2-.5-.5-.7-.7-5.2-4.1-17.9.4-28.2,10.1h0c-1.9,1.8-4.2,4.1-6.4,6.8h-.1c-9.3,10-15.9,13.5-19,13.5s0,0-.1,0c-.9,0-1.2-.3-1.4-.6-1.2-1.5-1.1-6.7,13.9-25.2,9.9-12.1,22.2-23.5,27.5-28.3.8-.7,1.4-1.3,1.9-1.7,2.2-2.1,3.1-4.9,2.4-7.5-.7-2.2-2.5-3.9-4.8-4.3-2.8-.5-5.6.8-7.8,3.6-2.1,2.6-6.6,8.7-11.4,15.2-5.3,7.2-10.9,14.7-13.6,18.2h0c-.7.9-1.7,2.1-2.8,3.4-9,10.7-24.1,28.7-15.5,37.4s3.4,2.2,5.7,2.2.4,0,.7,0c5.2-.3,11.4-4.4,17.2-9.7.2,2.8,1.4,5.1,3.6,6.9,4.8,3.8,11.7,2.3,19.4-4,.1,1.4.6,2.8,1.8,4.1,1.5,1.7,3.5,2.6,6,2.6.1,0,.2,0,.3,0,4.6-.2,10.2-3.4,15.7-8.1,0,3,1.3,4.9,2.5,6,1.1.9,3.1,2.1,6.2,2.1,4.6,0,11.6-2.4,21.9-11.5.2.2.4.3.6.5,4,2.8,10.8,2.5,17.6-1.7-.2,1.1-.2,2.2-.1,3.3.3,3.1,1.7,5.8,4.2,7.8,1.7,1.3,3.7,2,6.1,2,6.1,0,14-4.2,20.7-11.5,4.3,1.4,10.4.9,17.6-6h0s.6-.6.6-.6c1.2-1.2,2.5-2.6,3.8-4.2,5.9-6.5,12.5-13.1,15.5-15.9.3-.2,1.5,0,2.4.9.7.7.6,1.3.3,1.8-2,3.6-6.4,7.4-10.6,11-.7.6-1.4,1.2-2.1,1.8-5.4,4.7-8.1,8.8-8.3,12.7,0,2.5.9,4.8,2.9,6.7,1.8,1.8,4.1,2.7,6.8,2.7s.6,0,.8,0c5.7-.4,12.8-4.8,20.2-12.2,0,.7,0,1.4.1,2,.5,3.7,2.5,6.7,5.7,8.8,2.2,1.5,4.7,2.1,7.3,2.1,6.6,0,14.1-4.1,20.6-9.6.2,2.7,1.4,5.1,3.6,6.8,5.1,4.1,12.8,1.9,20.9-5.5.1,3.1,1.6,5.1,3.3,6.3,2.1,1.5,4.3,2.1,6.4,2.1,3.8,0,7.2-1.7,8.6-2.5,1.8-.9,3.5-2,5.1-3,.8-.5,1.6-1,2.4-1.5,2.3-1.4,5.1-3.1,7.6-5.1l.4-.3c2-1.5,4.5-3.5,5.2-6.7.6-2.9-.7-5.7-3.1-7-2.3-1.2-5.1-.7-7.1,1.2-2.5,2.5-4.6,4.9-6.3,7-5.6,6.6-6.8,7.4-10.2,4.7,0,0-.2-.1-.2-.5-.2-1.3.4-7,14.4-24.4,10.9-13.1,19.5-20.9,23.7-24.7l.7-.7c2.2-2.1,3.1-4.9,2.3-7.5ZM333.8,80.1c-1.3,3.4-5.7,7-14,7s-.5,0-.7,0c.8-1.1,1.6-2.2,2.4-3.2,4.2-4.8,8.6-8.2,11.1-8.3,0,0,0,0,.1,0,.5,0,.7.2.9.3.7.6.9,2.2.2,4.1ZM357.1,85.7c5-5.2,10.7-8.5,14.1-8.5s1.5.2,2,.6c.2.5-.2,2.5-2,5.1l-1.1,1.6-2.8,3.9c-5.9,7.8-11.7,13-14.8,13.1-.6,0-1-.1-1.4-.6-2.7-3.1.9-10,6-15.2ZM247.7,86.7c-3.5,5.1-2.8,8.9-1.6,11.1-4.6,3.5-8.9,4.4-11.2,2.4-2.1-1.9-.1-8.9,6.6-17,3.1-3.7,7.2-6.2,10.8-6.5.2,0,.4,0,.6,0,1,0,2.1.2,3,.9.6.5,1.1,2.1.7,4.5-.7-.2-1.4-.3-2.2-.3-2.4.2-4.7,1.8-6.8,4.8ZM161.7,75.9c0,0,.2,0,.3,0,.4,0,.8,0,1,.2.7.6.3,2.1-.1,3.3-1,1.6-2,3.2-2.9,4.8-.8,1.4-1.7,2.9-2.6,4.4l-.6.7c-4.2,4.5-11.1,12-14.7,12h0c-.4,0-.7-.1-1-.5-2.7-3,.8-9.3,4.6-13.7,4.9-5.9,12.1-10.9,16.1-11.2Z" />
            </g>
            <text class="st1" transform="translate(124.1 155.3)">
              <tspan x="0" y="0">and Branded</tspan>
            </text>
          </svg>
        </a>
      </h1>
    </div>

    <nav id="main-navigation" class:open={menuOpen}>
      <ul class="main-menu">
        <li on:click={toggleMenu}>
          <a href="/approach-about" data-sveltekit-preload-data>About & Approach</a>
        </li>
        <li on:click={toggleMenu}><a href="/services" data-sveltekit-preload-data>Services</a></li>
        <li on:click={toggleMenu}><a href="/portfolio" data-sveltekit-preload-data>Work</a></li>
        <li on:click={toggleMenu}><a href="/contact" data-sveltekit-preload-data>Contact</a></li>
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

    <div id="nav-icon" on:click={toggleMenu} class:open={menuOpen}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</header>

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
    top: 0;
    // mix-blend-mode: exclusion;
    position: relative;
    padding: 1rem 1rem;
    z-index: 1000;
    height: 120px;
    align-items: center;

    .inner {
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-wrapper {
      pointer-events: all;
      // mix-blend-mode: exclusion;
      opacity: 1;
      transition: 300ms ease-in-out opacity;

      path,
      text {
        fill: white;
      }
      &.open {
        @include small {
          opacity: 0;
        }
      }
      h1.logo {
        position: relative;

        svg {
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
    display: none;
    @include small {
      display: block;
    }
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
    // mix-blend-mode: exclusion;
    pointer-events: all;

    span {
      display: block;
      position: absolute;
      height: 2px;
      width: 50%;
      background: $purple;
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
        background-color: white;
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
    flex: 1;
    display: flex;
    justify-content: flex-end;
    @include small {
      position: fixed;
      top: 0;
      right: -50px;
      height: 100%;
      width: calc(100vw - 50px);
      padding-right: 50px;
      background: $purple;
      z-index: 999;
      transform: translateX(100vw);
      transition: transform 0.3s ease-in-out;
      padding: 50px 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      box-shadow: -5px 0 30px rgba(0, 0, 0, 0.05);
      overflow-y: auto;
    }

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
      display: flex;
      gap: 3rem;
      list-style: none;
      margin-top: 1rem;
      flex: 1;
      justify-content: space-between;
      max-width: 500px;
      margin: 0 0 0 auto;
      list-style: none;
      @include small {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        margin-top: 1rem;
        height: auto;
        flex: none;
        margin-left: 0;
      }

      li {
        padding: 0.3rem 0;
        a {
          color: white;
          font-size: 1rem;
          font-weight: 600;
          @include small {
            font-size: 1.5rem;
            color: white;
          }

          text-decoration: none;
          position: relative;
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
    }
    .contact {
      display: none;
      @include small {
        display: block;
      }
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
            color: white;
            position: relative;
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
      }
    }
  }

  :global(body[data-theme='/']),
  :global(body[data-theme='/contact']),
  :global(body[data-theme^='/portfolio']) {
    #main-navigation ul.main-menu li a {
      color: $purple;
    }
    h1.logo {
      path,
      text {
        fill: $purple !important;
      }
    }
  }
</style>
