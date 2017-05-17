<template>
		<div class="container">
			<img :src="image" width="100" />
			<h3>{{ title }}</h3>
		</div>
</template>
<style scoped>

	.container {
		border: 1px solid black;
		border-radius: .2em;
		display: flex;
		align-items: flex-start;
		padding: .5em 0 .5em 0;
		max-width: 220px;
		margin: 1em auto;
	}
	.container img {
		align-self: center;
		padding-left: .5em;
		margin: 0 auto;
		
	}
	.container h3 {
		align-self: center;
		padding: 0 .3em 0 .3em;
		margin: 0 auto;
	}
</style>
<script>
	export default {
	  props: ['title', 'image']
	}
</script>
