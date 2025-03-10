<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';

  export let speed = 0.5; // Base speed (higher is faster)
  export let repeat = -1; // Infinite loop
  export let paddingRight = 20; // Padding between items
  export let scrollSensitivity = 0.0005; // Sensitivity of mouse wheel effect

  let marqueeContainer;
  let items;
  let loop;
  let velocity = 0;
  let hovered = false;
  let scrollingStoppedTimeout;

  function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: 'none' },
        onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      xPercents = [],
      curIndex = 0,
      pixelsPerSecond = (config.speed || 1) * 50,
      snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
      totalWidth,
      curX,
      distanceToStart,
      distanceToLoop,
      item,
      i;

    gsap.set(items, {
      xPercent: (i, el) => {
        let w = (widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px')));
        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(el, 'x', 'px')) / w) * 100 +
            gsap.getProperty(el, 'xPercent'),
        );
        return xPercents[i];
      },
    });
    gsap.set(items, { x: 0 });
    totalWidth =
      items[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], 'scaleX') +
      (parseFloat(config.paddingRight) || 0);

    for (i = 0; i < length; i++) {
      item = items[i];
      curX = (xPercents[i] / 100) * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, 'scaleX');

      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0,
      )
        .fromTo(
          item,
          {
            xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100),
          },
          {
            xPercent: xPercents[i],
            duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond,
        )
        .add('label' + i, distanceToStart / pixelsPerSecond);

      times[i] = distanceToStart / pixelsPerSecond;
    }

    function toIndex(index, vars) {
      vars = vars || {};
      Math.abs(index - curIndex) > length / 2 && (index += index > curIndex ? -length : length);
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];

      if (time > tl.time() !== index > curIndex) {
        vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
    }

    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true);
    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }
    return tl;
  }

  function pauseLoop() {
    loop.pause();
    hovered = true;
  }

  function playLoop() {
    loop.play();
    hovered = false;
  }

  function handleScroll(event) {
    if (!hovered) {
      if (event.deltaY > 0) {
        if (velocity < scrollSensitivity * 3) {
          velocity += scrollSensitivity;
        }
      } else {
        if (velocity > -scrollSensitivity * 3) {
          velocity -= scrollSensitivity;
        }
      }

      clearTimeout(scrollingStoppedTimeout);
      scrollingStoppedTimeout = setTimeout(() => {
        velocity = 0;
      }, 500);
    }
  }

  onMount(() => {
    items = marqueeContainer.querySelectorAll('.marquee-item');

    loop = horizontalLoop(items, {
      repeat,
      speed,
      paddingRight,
    });

    marqueeContainer.addEventListener('pointerenter', playLoop);
    marqueeContainer.addEventListener('pointerleave', playLoop);
    window.addEventListener('wheel', handleScroll);

    gsap.ticker.add(() => {
      loop.progress(loop.progress() + velocity * gsap.ticker.deltaRatio());
    });
  });
</script>

<div class="marquee-container" bind:this={marqueeContainer}>
  <div class="marquee-content">
    <slot />
  </div>
</div>

<style>
  .marquee-container {
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    font-size: 1.1111111111111112vw;
  }

  .marquee-content {
    display: inline-flex;
    width: max-content;
    gap: 1.25em;
  }
</style>
