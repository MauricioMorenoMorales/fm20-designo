<template lang="pug">
button(
	@click.prevent="action()"
	:class="[kind, {'full-width': fullWidth}]"
	:disabled="disabled")
	slot
</template>

<style lang="stylus" scoped>
@import '~@/_tokens.styl'
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
