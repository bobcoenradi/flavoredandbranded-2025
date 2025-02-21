// src/lib/gsap.js
import gsap from 'gsap/dist/gsap';
import { Draggable } from 'gsap/dist/Draggable';
import { CustomEase } from 'gsap/dist/CustomEase';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(Draggable, CustomEase, ScrollTrigger, ScrollToPlugin, ScrollSmoother);
}
export { gsap, Draggable, CustomEase, ScrollTrigger, ScrollToPlugin, ScrollSmoother };
