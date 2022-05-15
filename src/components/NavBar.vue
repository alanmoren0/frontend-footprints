<template>
	
	<nav class="navbar">
		<a href="#">Turtle Team</a>
		<button class="hollow-btn">Acerca de</button>
	</nav>

</template>

<script>
export default {
  name: "NavBar",
  props: {
  },
};
</script>

<style scoped>
	template{
		margin: 0;
	}
	.navbar{
		background-color: #5C39BE;
		height: 100px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	a{
		text-decoration:none;
		font-size: 35px;
		color: white;
	}
	a:hover{
		text-decoration:none;
		font-size: 36px;
		color: white;
	}
	.hollow-btn{
		background-color:transparent;
		border-radius:15px;
		border:5px solid #ffffff;
		display:inline-block;
		cursor:pointer;
		color:#ffffff;
		font-size:17px;
		text-decoration:none;
		width: 100px;
		height: 50px;
	}
	.hollow-btn:hover{
		background-color:white;
		color: blue;
	}

</style>