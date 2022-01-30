<template lang="pug">
.links-icons
	.links-icons__item
		img(src="~@assets/shared/desktop/illustration-canada.svg")
		h5 CANADA
		Button(kind="secondary" @click="goToUrl('/locations')") SEE LOCATION
	.links-icons__item
		img(src="~@assets/shared/desktop/illustration-australia.svg")
		h5 AUSTRALIA
		Button(kind="secondary" @click="goToUrl('/locations')") SEE LOCATION
	.links-icons__item
		img(src="~@assets/shared/desktop/illustration-united-kingdom.svg")
		h5 AUSTRALIA
		Button(kind="secondary" @click="goToUrl('/locations')") SEE LOCATION
</template>

<style lang="stylus" scoped>
.links-icons
	text-align center
	& img
		width 200px
		height 200px
	& h5
		font-size 2rem
	&__item
		& > *
			margin-bottom 20px
@media screen and (min-width 1200px)
	.links-icons
		max-width 1100px
		margin 0 auto
		display grid
		grid-template-columns 1fr 1fr 1fr
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '@atoms/Button.vue';
export default defineComponent({
	components: {
		Button,
	},
	methods: {
		goToUrl(url: string): void {
			this.$router.push(url);
		},
	},
});
</script>
