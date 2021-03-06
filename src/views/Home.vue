<template lang="pug">
.home
	.hero--container
		.hero
			h1 Award-winning custom designs and digital branding solutions
			p With over 10 years in the industry, we are experienced in creating fully
				| responsive websites, app design, and engaging brand experiences.
				| Find out more about our services.
			Button(@click-event="goToUrl('/about')") Learn More
	.pages-links
		.pages-links__item.web(@click="goToUrl('/projects/web-design')")
			.pages-links__item__content
				h3 Web design
				.pages-links__item__link
					h5 view projects
					img(src="~@assets/shared/desktop/icon-right-arrow.svg" alt="")
		.pages-links__item.app(@click="goToUrl('/projects/app-design')")
			.pages-links__item__content
				h3 app design
				.pages-links__item__link
					h5 view projects
					img(src="~@assets/shared/desktop/icon-right-arrow.svg" alt="")
		.pages-links__item.graphic(@click="goToUrl('/projects/graphic-design')")
			.pages-links__item__content
				h3 graphic design
				.pages-links__item__link
					h5 view projects
					img(src="~@assets/shared/desktop/icon-right-arrow.svg" alt="")
	.values
		.values__item
			img(src="~@assets/home/desktop/illustration-passionate.svg" alt="")
			.values__item__text
				h4 passionate
				p Each project starts with an in-depth brand research to ensure we only create
					|products that serve a purpose. We merge art, design, and technology into exciting
					|new solutions.
		.values__item
			img(src="~@assets/home/desktop/illustration-resourceful.svg" alt="resourceful illustration")
			.values__item__text
				h4 resourceful
				p Everything that we do has a strategic purpose. We use an agile approach in all of
					|our projects and value customer collaboration. It guarantees superior results that
					|fulfill our clients’ needs.
		.values__item
			img(src="~@assets/home/desktop/illustration-friendly.svg" alt="friendly illustration")
			.values__item__text
				h4 friendly
				p  We are a group of enthusiastic folks who know how to put people first. Our
					|success depends on our customers, and we strive to give them the best experience
					|a company can provide.
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
	margin-bottom 100px
	& > *
		margin-bottom 30px
	&--container
		background-color accent
		background-image \
			url("~@assets/home/desktop/image-hero-phone.png"),\
			url("~@assets/home/desktop/bg-pattern-hero-home.svg")
		background-repeat no-repeat
		background-position-x center, left
		background-position-y 300px, center
.pages-links
	max-width 320px
	margin 0 auto
	margin-bottom 100px
	&__item
		height 250px
		position relative
		display flex
		flex-direction column
		align-items center
		justify-content center
		margin-bottom 20px
		background-color accentDesaturated
		border-radius borderRadius
		color fontColorSecondary
		overflow hidden
		&__content
			position absolute
			top 0
			bottom 0
			left 0
			right 0
			display flex
			flex-direction column
			justify-content center
			align-items center
			text-align center
			cursor pointer
			transition .5s
			&:hover
				background-color transparentAccent
		&__link
			display flex
			align-items center
			justify-content center
			margin-top 20px
			& h5
				margin-right 15px
			& img
				margin-bottom 3px
		&.web
			&::before
				content: "";
				position: absolute;
				z-index 0
				top: 0; left: 0;
				width: 100%; height: 100%;
				background-image url("~@assets/home/mobile/image-web-design.jpg")
				filter brightness(50%)
		&.app
			&::before
				content: "";
				position: absolute;
				z-index 0
				top: 0; left: 0;
				width: 100%; height: 100%;
				background-image url("~@assets/home/mobile/image-app-design.jpg")
				filter brightness(50%)
		&.graphic
			&::before
				content: "";
				position: absolute;
				z-index 0
				top: 0; left: 0;
				width: 100%; height: 100%;
				background-image url("~@assets/home/mobile/image-graphic-design.jpg")
				filter brightness(50%)
.values
	max-width 320px
	text-align center
	margin 0 auto
	&__item
		margin-bottom 60px
		& img
			margin-bottom 30px
		&__text
			& > *
				margin-bottom 20px
@media screen and (min-width 768px)
	.hero
		max-width 700px
		background-color accent
		padding 50px 100px
		border-radius borderRadius
		background-image \
			url("~@assets/home/desktop/image-hero-phone.png"),\
			url("~@assets/home/desktop/bg-pattern-hero-home.svg")
		background-repeat no-repeat
		background-position-x center, calc(100% + 100px)
		background-position-y 300px, center
		&--container
			background-image none
			background-color transparent
	.pages-links
		max-width 700px
		&__item
			height 200px
			&.web
				&::before
					background-image url("~@assets/home/tablet/image-web-design.jpg")
					background-size cover
			&.app
				&::before
					background-image url("~@assets/home/tablet/image-app-design.jpg")
					background-size cover
			&.graphic
				&::before
					background-image url("~@assets/home/tablet/image-graphic-design.jpg")
					background-size cover
	.values
		max-width 700px
		text-align start
		&__item
			display flex
			align-items center
			& img
				margin-right 50px
@media screen and (min-width 1200px)
	.hero
		max-width 1100px
		text-align start
		height 640px
		padding-top 130px
		padding-left 90px
		padding-right 490px
		background-position-x calc(100% + 90px), calc(100%)
		background-position-y -30px, center
	.pages-links
		max-width 1100px
		height 640px
		display grid
		grid-template-columns 1fr 1fr
		gap 30px
		grid-template-areas\
			"web app"\
			"web graphic"
		&__item
			height 100%
			&.web
				grid-area web
				&::before
					background-image url("~@assets/home/desktop/image-web-design-large.jpg")
			&.app
				&::before
					background-image url("~@assets/home/desktop/image-app-design.jpg")
			&.graphic
				&::before
					background-image url("~@assets/home/desktop/image-graphic-design.jpg")
	.values
		max-width 1100px
		text-align center
		display grid
		grid-template-columns 1fr 1fr 1fr
		gap 25px
		&__item
			display block
			& img
				margin-right 0
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
	methods: {
		goToUrl(url: string): void {
			this.$router.push(url);
		},
	},
});
</script>
