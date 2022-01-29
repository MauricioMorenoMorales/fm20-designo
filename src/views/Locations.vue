<template lang="pug">
.locations
	article.location
		picture
			source(media="screen and (min-width: 1200px)" srcset="~@assets/locations/desktop/image-map-canada.png")
			img(src="~@assets/locations/tablet/image-map-canada.png")
		section.location__text
			h2 Canada
			.location__text__content
				div
					p <b>Designo Central Office</b>
					p 3886 Wellington Street
					p Toronto, Ontario M9C 3J5
				div
					p <b>Contact</b>
					p P : +1 253-863-8967
					p M : contact@designo.co
	article.location.reversed
		picture
			source(media="screen and (min-width: 1200px)" srcset="~@assets/locations/desktop/image-map-australia.png")
			img(src="~@assets/locations/tablet/image-map-australia.png")
		section.location__text
			h2 Australia
			.location__text__content
				div
					p <b>Designo Central Office</b>
					p 3886 Wellington Street
					p Toronto, Ontario M9C 3J5
				div
					p <b>Contact</b>
					p P : +1 253-863-8967
					p M : contact@designo.co
	article.location
		picture
			source(media="screen and (min-width: 1200px)" srcset="~@assets/locations/desktop/image-map-united-kingdom.png")
			img(src="~@assets/locations/tablet/image-map-uk.png")
		section.location__text
			h2 United Kingdom
			.location__text__content
				div
					p <b>Designo Central Office</b>
					p 3886 Wellington Street
					p Toronto, Ontario M9C 3J5
				div
					p <b>Contact</b>
					p P : +1 253-863-8967
					p M : contact@designo.co
	Footer.footer--locations
</template>

<style lang="stylus" scoped>
@import "~@/_tokens.styl"

.footer--locations
	margin-top 100px

.location
	& picture > img
		width 100%
	&__text
		background-color basePrimaryMoreDesaturated
		margin-top -2px
		padding 80px 10px
		text-align center
		& h2
			color accent
		& div
			margin-top 40px
@media screen and (min-width 768px)
	.location
		max-width 700px
		margin 0 auto
		margin-bottom 100px
		border-radius borderRadius
		overflow hidden
		&__text
			text-align start
			padding 80px 75px
			& div
				margin 30px 0 0 0
			&__content
				display grid
				grid-template-columns 1fr 1fr
@media screen and (min-width 1200px)
	.location
		max-width 1100px
		display grid
		grid-template-columns 1fr 350px
		grid-template-areas "text picture"
		gap 30px
		margin-bottom 30px
		& picture > img
			object-fit cover
			height 100%
			border-radius borderRadius
		&__text
			grid-area text
			padding 90px
			border-radius borderRadius
		&.reversed
			grid-template-columns 350px 1fr
			grid-template-areas "picture text"
</style>

<script>
import { defineComponent } from 'vue';
import Footer from '@components/Footer.vue';
export default defineComponent({
	components: {
		Footer,
	},
});
</script>
