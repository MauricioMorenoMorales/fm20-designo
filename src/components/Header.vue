<template lang="pug">
header
	.header--container
		.header
			img(src="~@assets/shared/desktop/logo-dark.png" alt="Designo Logo" @click="closeMenu('/')")
			.links
				router-link(to="/about") Our company
				router-link(to="/locations") Locations
				router-link(to="/contact") Contact
			.burger
				burger(@click-event="toggleMenu" :active-state="menuOpened")
	.plegable(v-show="menuOpened")
		.plegable__inner-container
			router-link(to="/about" @click="closeMenu()") Our company
			router-link(to="/locations" @click="closeMenu()") Locations
			router-link(to="/contact" @click="closeMenu()") Contact
	.modal(v-show="menuOpened" @click="closeMenu()")
</template>

<style lang="stylus" scoped>
@import '~@/_tokens.styl'
a
	color fontColorPrimary
	text-transform uppercase
header
	position relative
.header
	display flex
	align-items center
	justify-content space-between
	max-width 320px
	margin 0 auto
	padding 20px 10px
	&--container
		position relative
		z-index 100000
		background-color white
	& img
		width 160px
		height 20px
		cursor pointer
.links
	display none
.plegable
	position absolute
	z-index 1010
	top 96px
	left 0
	right 0
	background-color baseSecondary
	& a
		color fontColorSecondary
		font-size 2.4rem
	&__inner-container
		max-width 330px
		margin 0 auto
		display flex
		flex-direction column
		gap 20px
		padding 40px 0
.modal
	position fixed
	left 0
	right 0
	bottom 0
	top 0
	z-index 1000
	background-color transparentBaseSecondary
@media screen and (min-width: 768px)
	.header
		max-width 700px
		padding 50px 0
	.links
		display flex
		width 370px
		justify-content space-between
	.plegable
		display none
	.modal
		display none
	.burger
		display none
@media screen and (min-width 1200px)
	.header
		max-width 1100px
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Burger from '@atoms/Burger.vue';
export default defineComponent({
	data() {
		return {
			menuOpened: false as boolean,
		};
	},
	components: {
		Burger,
	},
	methods: {
		toggleMenu(value: boolean): void {
			this.menuOpened = value;
		},
		closeMenu(url: string): void {
			this.menuOpened = false;
			if (url) {
				this.goToUrl(url);
			}
		},
		goToUrl(url: string): void {
			this.$router.push(url);
		},
	},
	mounted() {
		document
			.querySelector('html')
			?.addEventListener('scroll', () => console.log('xd'));
	},
});
</script>
