<template>
  <div class="landing">
    <slide />
    <section1 />
    <section2 />
    <section3 />
    <section4 />
    <section5 />
  </div>
</template>

<script>
import slide from '@/components/slide'
import section1 from '@/components/section1'
import section2 from '@/components/section2'
import section3 from '@/components/section3'
import section4 from '@/components/section4'
import section5 from '@/components/section5'

export default {

  components: {
    slide,
    section1,
    section2,
    section3,
    section4,
    section5
  },
  data: () => ({
    whell: false
  }),
  watch:{
    '$store.state.section': function () {
      console.log('hola mundo cambio el section')
      let numberId = this.$store.state.section
      this.scrollSection(`#section-${numberId}`)
    }
  },
  mounted () {
    window.addEventListener("resize", () => {
      let numberId = this.$store.state.section
      this.scrollSection(`#section-${numberId}`)
    })
    window.addEventListener("wheel", event => {
      if (event.toElement.closest('.content')) return
      const delta = Math.sign(event.wheelDelta);
      let number = Number(this.$store.state.section)
      if (delta == 1 && number != 0) {
        number--
      } else if (delta != 1 && number != 5) {
        number++
      }
      if (!this.whell) {
        this.whell = true
        this.$store.state.section = number
        setTimeout(() => {
          this.whell = false
        }, 400)
      }
    });
  },
  methods: {
    scrollSection(id) {
      let section = document.querySelector(id)
      if (!section) return
      this.scrollIt(
      section,
      300,
      'easeInOutQuint')
    },
    scrollIt(destination, duration = 200, easing = 'linear', callback) {
      const easings = {
        linear(t) {
          return t;
        },
        easeInQuad(t) {
          return t * t;
        },
        easeOutQuad(t) {
          return t * (2 - t);
        },
        easeInOutQuad(t) {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        },
        easeInCubic(t) {
          return t * t * t;
        },
        easeOutCubic(t) {
          return (--t) * t * t + 1;
        },
        easeInOutCubic(t) {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        },
        easeInQuart(t) {
          return t * t * t * t;
        },
        easeOutQuart(t) {
          return 1 - (--t) * t * t * t;
        },
        easeInOutQuart(t) {
          return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
        },
        easeInQuint(t) {
          return t * t * t * t * t;
        },
        easeOutQuint(t) {
          return 1 + (--t) * t * t * t * t;
        },
        easeInOutQuint(t) {
          return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
        }
      };

      const start = window.pageYOffset;
      const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

      const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
      const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
      const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
      const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

      if ('requestAnimationFrame' in window === false) {
        window.scroll(0, destinationOffsetToScroll);
        if (callback) {
          callback();
        }
        return;
      }

      function scroll() {
        const now = 'now' in window.performance ? performance.now() : new Date().getTime();
        const time = Math.min(1, ((now - startTime) / duration));
        const timeFunction = easings[easing](time);
        window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

        if (window.pageYOffset === destinationOffsetToScroll) {
          if (callback) {
            callback();
          }
          return;
        }

        requestAnimationFrame(scroll);
      }

      scroll()
    }
  }
}
</script>
<style lang="stylus">
.landing
  width 100%
</style>
