<template>
		<div class="container">
			<img :src="image" width="150" />
			<div class="headings">
				<h3>{{title}}</h3>
				<h5>{{years}}</h5>
				<p>{{description}}</p>
				<p v-if="tech"><strong>Technologies:</strong> {{tech}}</p>
			</div>
		</div>
</template>
<style scoped> 
	.container {
		border: 1px solid black;
		border-radius: .2em;
		display: flex;
		justify-content: space-around;
		padding: .5em 0 .5em 0;
		max-width: 400px;
		margin: 1em auto;
	}
	.container img {
		align-self: flex-start; 
 		padding-left: .5em;
		margin-top: 1em;
	}
	.headings {
		margin-right: 1em;
		padding: 1em;
	}

	/**********************
	media queries
	***********************/

	@media screen and (max-width: 769px) {
		.container {
			flex-direction: column;
		}
		.container img {
		align-self: center; 
		}
		.headings {
			align-self: center;
			margin: 0;
		}
	}

</style>
<script>
	export default {
	  props: ['title', 'image', 'years', 'description', 'tech'],
	  created () {

	  }
}
</script>
