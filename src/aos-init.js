import AOS from 'aos';
import 'aos/dist/aos.css';

export function initAOS() {
  AOS.init({
    duration: 900,
    once: true,
    easing: 'ease-in-out',
    offset: 60,
  });
}
