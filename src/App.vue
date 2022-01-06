<template lang="pug">
.nav
  Header
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
