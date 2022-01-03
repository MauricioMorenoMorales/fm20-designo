<template lang="pug">
.nav
  Header
  Button(kind="secondary") Click Me
  router-view
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '@atoms/Button.vue';
import Header from '@components/Header.vue';
export default defineComponent({
	components: {
		Button,
		Header,
	},
});
</script>

<style lang="stylus">
@import '~@/_tokens.styl'
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  background-color basePrimary
</style>
