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
	article.location
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
	Footer
</template>

<style lang="stylus" scoped></style>

<script>
import { defineComponent } from 'vue';
import Footer from '@components/Footer.vue';
export default defineComponent({
	components: {
		Footer,
	},
});
</script>
