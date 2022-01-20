<template lang="pug">
.about
	article.about-hero
		picture
			source(media="screen and (min-width: 1200px)" srcset="~@assets/about/desktop/image-about-hero.jpg")
			source(media="screen and (min-width: 768px)" srcset="~@assets/about/tablet/image-about-hero.jpg")
			img(src="~@assets/about/mobile/image-about-hero.jpg" alt="Hero illustration")
		section.about-hero__text
			h1 About Us
			p Founded in 2010, we are a creative agency that produces lasting results for
				| our clients. We’ve partnered with many startups, corporations, and nonprofits
				| alike to craft designs that make real impact. We’re always looking forward to
				| creating brands, products, and digital experiences that connect with our clients’
				| audiences.
	article.about-talent
		picture
			source(media="screen and (min-width: 1200px)" srcset="~@assets/about/desktop/image-world-class-talent.jpg")
			source(media="screen and (min-width: 768px)" srcset="~@assets/about/tablet/image-world-class-talent.jpg")
			img(src="~@assets/about/mobile/image-world-class-talent.jpg" alt="Talent illustration")
		section.about-talent__text
			h2 World-class talent
			p We are a crew of strategists, problem-solvers, and technologists.
				|Every design is thoughtfully crafted from concept to launch, ensuring success
				|in its given market. We are constantly updating our skills in a myriad of platforms.
			p Our team is multi-disciplinary and we are not merely interested in form — content and
				|meaning are just as important. We give great importance to craftsmanship, service, and
				|prompt delivery. Clients have always been impressed with our high-quality outcomes that
				|encapsulates their brand’s story and mission.
	Footer
</template>

<style lang="stylus" scoped>
@import '~@/_tokens.styl'
.about-hero
	& picture > img
		width 100%
	&__text
		text-align center
		background-image url("~@assets/about/mobile/bg-pattern-circle-about-hero.svg")
		background-position-x 100%
		background-position-y -120px
		background-repeat no-repeat
		margin-top -3px
		padding 80px 20px
		background-color accent
		color fontColorSecondary
		& h1
			margin 0
			margin-bottom 20px
.about-talent
	& picture > img
		width 100%
	&__text
		text-align center
		background-color basePrimaryMoreDesaturated
		padding 80px 20px
		& h2
			color accent
			margin-bottom 20px
@media screen and (min-width 768px)
	.about-hero
		max-width 700px
		margin 0 auto
		border-radius borderRadius
		overflow hidden
		margin-bottom 100px
		&__text
			padding 80px 60px
			background-image url("~@assets/about/tablet/bg-pattern-circle-about-hero.svg")
			background-position 0
			background-position-y -200px
	.about-talent
		max-width 700px
		margin 0 auto
		border-radius borderRadius
		overflow hidden
		margin-bottom 100px
		&__text
			padding 80px 60px
			& p
				margin-bottom 30px
@media screen and (min-width 1200px)
	.about-hero
		max-width 1100px
		display grid
		grid-template-columns 1fr 475px
		grid-template-areas "text image"
		& picture
			grid-area image
		&__text
			display flex
			flex-direction column
			justify-content center
			padding 0 90px
			text-align start
			background-position 0
			background-position-x calc(100% + 10px)
	.about-talent
		max-width 1100px
		display grid
		grid-template-columns 480px 1fr
		&__text
			display flex
			flex-direction column
			justify-content center
			padding 0 90px
			text-align start
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@components/Footer.vue';
export default defineComponent({
	components: {
		Footer,
	},
});
</script>
