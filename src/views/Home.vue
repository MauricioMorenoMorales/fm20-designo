<template lang="pug">
.home
  .hero--container
    .hero
      h1 Award-winning custom designs and digital branding solutions
      p With over 10 years in the industry, we are experienced in creating fully
        | responsive websites, app design, and engaging brand experiences.
        | Find out more about our services.
      Button Learn More
  Footer
</template>

<style lang="stylus" scoped>
@import '~@/_tokens.styl'
.hero
  background-color transparent
  color fontColorSecondary
  max-width 320px
  margin 0 auto
  height 850px
  padding-top 75px
  text-align center
  & > *
    margin-bottom 30px
  &--container
    background-color accent
    background-image url("~@assets/home/desktop/image-hero-phone.png"), url("~@assets/home/desktop/bg-pattern-hero-home.svg")
    background-repeat no-repeat
    background-position-x center, left
    background-position-y 300px, center
@media screen and (min-width 768px)
  .hero
    max-width 700px
    background-color accent
    padding 50px 100px
    border-radius borderRadius
    background-image url("~@assets/home/desktop/image-hero-phone.png"), url("~@assets/home/desktop/bg-pattern-hero-home.svg")
    background-repeat no-repeat
    background-position-x center, calc(100% + 100px)
    background-position-y 300px, center
    &--container
      background-image none
      background-color transparent
@media screen and (min-width 1200px)
  .hero
    max-width 1100px
    text-align start
    height 640px
    padding-top 130px
    padding-left 90px
    padding-right 40%
    background-position-x calc(100% + 90px), calc(100%)
    background-position-y -30px, center
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@components/Footer.vue';
import Button from '@atoms/Button.vue';
export default defineComponent({
	components: {
		Footer,
		Button,
	},
});
</script>
