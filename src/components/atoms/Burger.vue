// this component receives an active state to be attached

<template lang="pug">
button.hamburger.hamburger--emphatic(
	:class="{ 'is-active': active }"
	type="button"
	@click.prevent="toggle"
)
	span.hamburger-box
		span.hamburger-inner
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
	emits: ['click-event'],
	props: {
		activeState: {
			type: Boolean,
		},
	},
	data() {
		return {
			active: false,
		};
	},
	methods: {
		toggle() {
			this.active = !this.active;
			this.$emit('click-event', this.active);
		},
	},
	watch: {
		activeState: function (newValue) {
			this.active = newValue;
		},
	},
});
</script>

<style lang="stylus" scoped>
@import '~@/_tokens.styl'
.hamburger
	padding 15px 15px
	display inline-block
	cursor pointer
	transition-property opacity, filter
	transition-duration 0.15s
	transition-timing-function linear
	font inherit
	color inherit
	text-transform none
	background-color transparent
	border 0
	margin 0
	overflow visible
	&:hover
		opacity 0.7
	&.is-active
		&:hover
			opacity 0.7

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after
	background-color fontColorPrimary

.hamburger-box
	width 40px
	height 24px
	display inline-block
	position relative

.hamburger-inner
	display block
	top 50%
	margin-top -2px
	&::before
		top -10px
	&::after
		bottom -10px

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after
	width 40px
	height 4px
	background-color fontColorPrimary
	border-radius 4px
	position absolute
	transition-property transform
	transition-duration 0.15s
	transition-timing-function ease

.hamburger-inner::before,
.hamburger-inner::after
	content ''
	display block

.hamburger--emphatic
	overflow hidden
	.hamburger-inner
		transition background-color 0.125s 0.175s ease-in
		&::before
			left 0
			transition transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
 top 0.05s 0.125s linear, left 0.125s 0.175s ease-in
		&::after
			top 10px
			right 0
			transition transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
 top 0.05s 0.125s linear, right 0.125s 0.175s ease-in
	&.is-active
		.hamburger-inner
			transition-delay 0s
			transition-timing-function ease-out
			background-color transparent !important
			&::before
				left -80px
				top -80px
				transform translate3d(80px, 80px, 0) rotate(45deg)
				transition left 0.125s ease-out, top 0.05s 0.125s linear,
 transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1)
			&::after
				right -80px
				top -80px
				transform translate3d(-80px, 80px, 0) rotate(-45deg)
				transition right 0.125s ease-out, top 0.05s 0.125s linear,
 transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1)
</style>
