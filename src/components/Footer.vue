<template lang="pug">
footer
	.call
		.call__text
			h2 Let’s talk about your project
			p Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
		Button Get in touch
	.footer--container
		.footer
			.footer__navigation
				img(src="~@assets/shared/desktop/logo-light.png" alt="Designo Logo")
				.footer__navigation__links
					a(href="/") Our Company
					a(href="/") Locations
					a(href="/") Contact
			.footer__contact
				.footer__contact__address
					p: b Designo Central Office
					p 3886 Wellington Street
					p Toronto, Ontario M9C 3J5
				.footer__contact__phone
					p: b Contact Us (Central Office)
					p: b P : +1 253-863-8967
					p: b M : contact@designo.com
				.footer__contact__social
					Icon(iconName="facebook" :iconColor="accentColor" :hoverColor="accentColorDesaturated")
					Icon(iconName="facebook" :iconColor="accentColor" :hoverColor="accentColorDesaturated")
					Icon(iconName="facebook" :iconColor="accentColor" :hoverColor="accentColorDesaturated")
					Icon(iconName="facebook" :iconColor="accentColor" :hoverColor="accentColorDesaturated")
					Icon(iconName="facebook" :iconColor="accentColor" :hoverColor="accentColorDesaturated")
					Icon(iconName="facebook" :iconColor="accentColor" :hoverColor="accentColorDesaturated")
</template>

<style lang="stylus" scoped>
@import '~@/_tokens.styl'
.call
	background-color accent
	max-width 330px
	margin 0 auto
	color fontColorSecondary
	border-radius 15px
	text-align center
	padding 60px 10px 50px
	background-image url("~@assets/shared/desktop/bg-pattern-call-to-action.svg")
	background-size 195% 150%
	background-position-y -80px
	background-position-x -90px
	background-repeat no-repeat
	margin-bottom -150px
	position relative
	z-index 10
	&__text
		& > *
			margin-bottom 20px
.footer
	color fontColorSecondary
	text-align center
	max-width 330px
	margin 0 auto
	padding-top 190px
	padding-bottom 60px
	&--container
		background-color baseSecondary
	&__navigation
		& img
			height 25px
			width 200px
			margin-bottom 30px
		&__links
			display flex
			flex-direction column
			border-top 1px solid baseSecondaryDesaturated
			& a
				margin-top 30px
	&__contact
		color fontColorSecondaryTransparent
		& > *
			margin-top 30px
		&__social
			& > *
				margin 5px
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '@atoms/Button.vue';
import Icon from '@atoms/Icon.vue';
import { colorSystem } from '@/tokens.styles';
export default defineComponent({
	data() {
		return {
			accentColor: colorSystem.accent,
			accentColorDesaturated: colorSystem.accentDesaturated,
		};
	},
	components: {
		Button,
		Icon,
	},
});
</script>
