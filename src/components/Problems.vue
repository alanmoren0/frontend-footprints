<template>
    <NavBar/>
    <h1>Nombre de la tortuga</h1>
    <section class="problems">
        <div>
            <p>Estado:</p>
            <p>Etapa:</p>
            <p>Descripción:</p>
        </div>
        <div><img src="./../assets/tortuga.jpg" alt=""></div>
        <div class="s4">
            <button>Siguiente</button>
        </div>
    </section>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  name: "Problems",
  components: {
      NavBar
  },
  props: {
  },
};
</script>

<style scoped>
.problems{
    background-color: black;
    height: 85vh;
    display: grid;
    grid-template-columns: 20% 60% 20%;
    box-sizing: border-box;
}
div{
    color: white;
}
img{
    width: 100%;
}
h1{
    margin: 0;
    background-color: black;
    color: white;
    width: 100%;
    text-align: center;
}
</style>