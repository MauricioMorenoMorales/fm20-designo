<template lang="pug">
footer
	.call(v-show="!simple")
		.call__text
			h2.h2 Let's talk about your project
			p Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
		Button Get in touch
	.footer--container
		.footer(:class="{simple}")
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
					Icon(iconName="youtube" :iconColor="accentColor" :hoverColor="accentColorDesaturated")
					Icon(iconName="twitter" :iconColor="accentColor" :hoverColor="accentColorDesaturated")
					Icon(iconName="pinterest" :iconColor="accentColor" :hoverColor="accentColorDesaturated")
					Icon(iconName="instagram" :iconColor="accentColor" :hoverColor="accentColorDesaturated")
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
			font-weight fontWeightNormal
.footer
	color fontColorSecondary
	text-align center
	max-width 330px
	margin 0 auto
	padding-top 190px
	padding-bottom 60px
	&.simple
		padding-top 0
	&--container
		background-color baseSecondary
	&__navigation
		padding-top 60px
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
@media screen and (min-width 768px)
	.call
		max-width 700px
		padding-left 120px
		padding-right 120px
		background-size 140% 160%
	.footer
		max-width 700px
		&__navigation
			display flex
			align-items center
			justify-content space-between
			padding-bottom 35px
			border-bottom 1px solid baseSecondaryDesaturated
			& img
				margin 0
			&__links
				flex-direction row
				border none
				& a
					margin-top 0
					margin-left 35px
		&__contact
			display grid
			grid-template-columns 235px 250px 1fr
			text-align start
			&__social
				align-self end
				justify-self end
@media screen and (min-width 1200px)
	.call
		max-width 1100px
		display flex
		align-items center
		justify-content space-between
		text-align start
		padding-left 90px
		padding-right 90px
		background-position-x 120px
		background-size 90% 150%
		&__text
			max-width 450px
			& .h2
				max-width 300px
	.footer
		max-width 1100px
		&__contact
			grid-template-columns 1fr 1fr 1fr
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
	props: {
		simple: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	components: {
		Button,
		Icon,
	},
});
</script>
