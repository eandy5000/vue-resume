<template>
	<div>

		<ul>
		  <li><h4>Title</h4></li>
			<li><router-link :to="{path: 'Home'}">Home</router-link></li>
			<li><router-link :to="{path: 'About'}">About</router-link></li>
		</ul>
	</div>
</template>
<script>
	export default {

	}
</script>
<style scoped>
	div{
		margin:0;
	}
	h4 {
		font-size: 200%;
		margin: 0;
	}
	ul {
		list-style: none;
		display:flex;
		flex-direction: column;
		margin: 0;
		padding: 0;
		transition: all 1s linear;
	}
	ul li {
		border: 1px solid black;
		margin-bottom: 1em;
		padding: .4em;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 0;
	}
	ul li:hover,
	ul li:focus {
		background-color: #222;
		color: white;
	}
		ul li:first-child {
		border: none;
	}
		ul li:first-child:hover,
		ul li:first-child:focus {
		background-color: white;
		color: #000;
	}
	a {
		text-decoration: none;
		color: #000;
	}
	ul li:hover a {
		color: white;
	}
</style>
