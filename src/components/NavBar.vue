<template>
	<div>

		<ul>
		  <li><h4>Title</h4></li>
			<li><a href=""/>Home</li>
			<li><a href=""/>About</li>
			<li><a href=""/>Contact</li>
		</ul>
	</div>
</template>
<script>
	export default {

	}
</script>
<style scoped>
	div {
		display: flex;
	}
	ul {
		list-style: none;
		margin: 0 auto;
	}
	ul li {
		border: 1px solid black;
	}
		ul li:first-child {
		border: none;
	}
</style>
