<template lang="pug">
.contact
	article.form
		section.form__text
			h2 Contact Us
			p Ready to take it to the next level? Let’s talk about your project
				|or idea and find out how we can help your business grow. If you are
				|looking for unique digital experiences that’s relatable to your users,
				|drop us a line.
		section.form__inputs
			Input(@change-value="inputFunction" errorMessage="Cannot be empty" name="name" placeholder="Name")
			Input(@change-value="inputFunction" errorMessage="Introduce valid Email" name="email" placeholder="Email Address" emailValidation)
			Input(@change-value="inputFunction" errorMessage="Cannot be empty" name="phone" placeholder="phone")
			Input(@change-value="inputFunction" errorMessage="Cannot be empty" name="message" textarea placeholder="Your Message")
			Button(@click-event="sendForm()") Submit
	Links.mgb100
	Footer(simple)
</template>

<style lang="stylus" scoped>
@import "~@/_tokens.styl"
.mgb100
	margin-bottom 100px
.form
	background-color accent
	color fontColorSecondary
	padding 75px 25px
	background-image url("~@assets/contact/mobile/bg-pattern-hero-contact-mobile.svg")
	margin-bottom 100px
	&__text
		text-align center
		& > h2
			font-weight fontWeightBold
		& > *
			margin-bottom 20px
	&__inputs
		& > *
			margin-top 20px
@media screen and (min-width 768px)
	.form
		max-width 700px
		margin 0 auto
		margin-bottom 100px
		padding 75px 50px
		border-radius borderRadius
		background-image url("~@assets/contact/desktop/bg-pattern-hero-desktop.svg")
		background-repeat no-repeat
		background-position-x -100px
		background-position-y -80px
		&__text
			text-align start
		&__inputs
			text-align end
@media screen and (min-width 1200px)
	.form
		max-width 1100px
		display grid
		grid-template-columns 1fr 375px
		align-items center
		padding 50px 100px
		background-position-x 0
		background-position-y -100px
		&__text
			padding-right 90px
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Links from '@components/Links.vue';
import Footer from '@components/Footer.vue';
import Input from '@atoms/Input.vue';
import Button from '@atoms/Button.vue';

type formInputTypes = 'name' | 'email' | 'phone' | 'message';

export default defineComponent({
	components: {
		Links,
		Footer,
		Input,
		Button,
	},
	data() {
		return {
			formData: {
				name: null as null | string,
				email: null as null | string,
				phone: null as null | string,
				message: null as null | string,
			},
		};
	},
	methods: {
		inputFunction(name: formInputTypes, value: string | null): void {
			this.formData[name] = value;
		},
		sendForm() {
			for (const key in this.formData) {
				if (this.formData[key as formInputTypes] === null) {
					return alert('Please fill all the fields');
				}
			}
			return alert(`Thanks ${this.formData.name} the message has been sended`);
		},
	},
});
</script>
