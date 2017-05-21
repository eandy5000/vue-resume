<template>
	<div>
		<ul>
		  <h4 class="title">Title</h4>
			<router-link :to="{path: 'Home'}"><li class="link">Home</li></router-link>
			<router-link :to="{path: 'About'}"><li class="link">About</li></router-link>
		</ul>
	</div>
</template>
<script>
	export default {

	}
</script>
<style scoped>
	div {
		color: #2c3e50;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		letter-spacing: .1em; 
		}
	.title {
		font-size: 200%;
		margin: 0 0 .5em 0;
		padding: 0;
	}
	.link {
		border: 1px solid #2c3e50;
		padding: .3em;
		margin: 0 2em .5em 2em;
		font-weight: bold;
		transition: all .2s linear;
	}
	.link:hover {
		color: white;
		border-color: white; 
		background-color: #2c3e50;
		transform: scale(1, 1.3);
	}
	a {
		color: inherit;
		text-decoration: none;
	}

@media screen and (min-width: 1025px)  {
		div {
			color: red;
		}
	}
</style>
