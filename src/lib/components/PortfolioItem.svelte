<script>
  import { gsap } from 'gsap/dist/gsap';

  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import { onMount } from 'svelte';

  let elHeader;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(elHeader, 'skewY', 'deg'), // fast
      clamp = gsap.utils.clamp(-5, 5); // don't let the skew go beyond 20 degrees.

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: 'power3',
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    // make the right edge "stick" to the scroll bar. force3D: true improves performance
    gsap.set(elHeader, { transformOrigin: 'right center', force3D: true });
  });
</script>
