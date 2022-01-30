<template lang="pug">
.projects
	article.projects__hero
		h2 {{projects.title}}
		p {{projects.description}}
	article.projects__items
		section.projects__items__item(v-for="item in projects.items" :key="item.id")
			img(:src="getImageUrl(item.imageUrl)" :alt="item.title")
			.projects__items__item__text
				h4 {{item.title}}
				p {{item.description}}
	.projects__links
		.projects__links__item.web(v-show="pageName !== 'web-design'" @click="goToUrl('/projects/web-design')")
			.projects__links__item__content
				h3 Web design
				.projects__links__item__link
					h5 view projects
					img(src="~@assets/shared/desktop/icon-right-arrow.svg" alt="")
		.projects__links__item.app(v-show="pageName !== 'app-design'" @click="goToUrl('/projects/app-design')")
			.projects__links__item__content
				h3 app design
				.projects__links__item__link
					h5 view projects
					img(src="~@assets/shared/desktop/icon-right-arrow.svg" alt="")
		.projects__links__item.graphic(v-show="pageName !== 'graphic-design'" @click="goToUrl('/projects/graphic-design')")
			.projects__links__item__content
				h3 graphic design
				.projects__links__item__link
					h5 view projects
					img(src="~@assets/shared/desktop/icon-right-arrow.svg" alt="")
	Footer.mt100
</template>

<style lang="stylus" scoped>
@import "~@/_tokens.styl"
.mb100
	margin-bottom 100px
.mt100
	margin-top 100px
.projects
	&__hero
		background-color accent
		color fontColorSecondary
		padding 100px 25px
		text-align center
		margin-bottom 100px
		background-image url("~@assets/about/mobile/bg-pattern-circle-about-hero.svg")
		background-repeat no-repeat
		background-position-x 100%
		& > h2
			margin-bottom 30px
	&__items
		max-width 320px
		margin 0 auto
		margin-bottom 100px
		&__item
			border-radius borderRadius
			overflow hidden
			margin-bottom 40px
			&__text
				padding 30px 45px
				background-color basePrimaryMoreDesaturated
				text-align center
				margin-top -5px
				& > h4
					margin-bottom 20px
					color accent
					text-transform uppercase
	&__links
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
@media screen and (min-width 768px)
	.projects
		&__hero
			max-width 700px
			border-radius borderRadius
			margin 0 auto
			margin-bottom 100px
			padding 74px 175px
		&__items
			max-width 700px
			&__item
				display grid
				grid-template-columns 340px 1fr
				&__text
					display flex
					flex-direction column
					align-items center
					justify-content center
		&__links
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
@media screen and (min-width 1200px)
	.projects
		&__hero
			max-width 1100px
			padding 65px 375px
			background-image url("~@assets/app-design/desktop/bg-pattern-intro-app.svg")
			background-position-x -50px
			background-position-y -180px
		&__items
			max-width 1100px
			display grid
			grid-template-columns 1fr 1fr 1fr
			gap 30px
			&__item
				display block
		&__links
			max-width 1100px
			height 300px
			display grid
			grid-template-columns 1fr 1fr
			gap 30px
			&__item
				height 100%
				&.web
					&::before
						background-image url("~@assets/home/desktop/image-web-design-large.jpg")
				&.app
					&::before
						background-image url("~@assets/home/desktop/image-app-design.jpg")
				&.graphic
					&::before
						background-image url("~@assets/home/desktop/image-graphic-design.jpg")
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@components/Footer.vue';
import DATA from '../projects.json';
export default defineComponent({
	components: {
		Footer,
	},
	data() {
		return {
			pageName: this.$route.params.typeOfProject,
			projects: DATA.find(
				element => element.name == this.$route.params.typeOfProject,
			),
		};
	},
	watch: {
		$route() {
			this.projects = DATA.find(
				element => element.name == this.$route.params.typeOfProject,
			);
			this.pageName = this.$route.params.typeOfProject;
		},
	},
	methods: {
		getImageUrl(url: string) {
			return require(`../assets/${url}`);
		},
		goToUrl(url: string): void {
			this.$router.push(url);
		},
	},
});
</script>
