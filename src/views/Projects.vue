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
	Links
	Footer
</template>

<style lang="stylus" scoped>
@import "~@/_tokens.styl"
.projects
	&__hero
		background-color accent
		color fontColorSecondary
		padding 100px 25px
		text-align center
		margin-bottom 100px
	&__items
		max-width 320px
		margin 0 auto
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
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@components/Footer.vue';
import Links from '@components/Links.vue';
import DATA from '../projects.json';
export default defineComponent({
	components: {
		Footer,
		Links,
	},
	data() {
		return {
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
		},
	},
	methods: {
		getImageUrl(url: string) {
			return require(`../assets/${url}`);
		},
	},
});
</script>
