<template>
	<div>
		<h4 class="title">Andy Eccleston</h4>
		<ul>
			<router-link :to="{path: 'Experience'}">
				<li 
					:class="{link: true, active: activePage('/')}"
				>Experience</li>
			</router-link>
			<router-link :to="{path: 'Projects'}">
				<li 
					:class="{link: true, active: activePage('/Projects')}"
				>Projects</li>
			</router-link>
			<router-link :to="{path: 'About'}">
				<li 
					:class="{link: true, active: activePage('/About')}"
				>About</li>
			</router-link>
		</ul>
	</div>
</template>
<script>
	export default {
	  methods: {
    activePage (selectPage) {
      return selectPage === this.page
	    }
	  },
	  computed: {
    page () {
      return this.$route.fullPath
    }
	  }
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
		font-size: 180%;
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
	.link:hover,
	.link:focus,
	.link.active {
		background-color: #2c3e50;
		color: white;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	/*******************
		Media Queries
	*******************/

@media screen and (min-width: 1025px)  {
		div {
			border-bottom: 1px solid #2c3e50;
			display: flex;
		}
		ul {
			display: flex;
		}
		.title {
			margin-right: auto;
			margin-left: 2em;
		}
		.link {
			border: none;
		}
		.link:hover,
		.link:focus,
		.link.active {
			transform: scale(1.3, 1.3);
			background-color: white;
			color: #2c3e50; 
		}
	}

	@media screen and (min-width: 769px) and (max-width: 1024px){
		div {
			border-bottom: 1px solid #2c3e50;
		}
		ul {
			display: flex;
			justify-content: center;
			padding: 1em 0;
		}
		.link {
			padding: .7em 3em;
		}
	}
</style>
