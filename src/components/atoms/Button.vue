<template lang="pug">
button(
	@click.prevent="action()"
	:class="[kind, {'full-width': fullWidth}]"
	:disabled="disabled")
	slot
</template>

<style lang="stylus" scoped>
@import '~@/_tokens.styl'
button
	text-transform uppercase
	font-weight fontWeightBold
	background-color basePrimary
	border none
	border-radius 8px
	padding  20px 25px
	font-size 1.5rem
	letter-spacing 1px
	cursor pointer
	transition .3s
	color fontColorPrimary
	&:hover
		background-color transparentBasePrimary
		color fontColorSecondary
	&.secondary
		background-color accent
		color fontColorSecondary
		&:hover
			background-color accentDesaturated
	&.full-width
		width 100%
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	emits: ['click-event'],
	props: {
		kind: {
			type: String as PropType<'primary' | 'secondary'>,
			default: 'primary',
		},
		fullWidth: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		action(): void {
			this.$emit('click-event');
		},
	},
});
</script>
