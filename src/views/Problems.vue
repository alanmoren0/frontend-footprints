<template>
    <h1>{{ $store.state.turtleName }}</h1>
    <section class="problems">
        <div class="s1">
            <div class="description">
                <h3>Estado:</h3>
                <p>{{ $store.getters.getProblem.estado }}</p>
            </div>
            <div class="description">
                <h3>Etapa:</h3>
                <p>{{ $store.getters.getProblem.etapa }}</p>
            </div>
            <div class="description2">
                <h3>Descripción:</h3>
                <p>{{ $store.getters.getProblem.descripcion }}</p>
            </div>
            <div class="description2">
                <h3>Razón:</h3>
                <p>{{ $store.getters.getProblem.razon }}</p>
            </div>
        </div>
        <div class="s2"><img :src='$store.getters.getProblem.urlImage' alt=""></div>
        <div class="s3">
            <button>Siguiente</button>
        </div>
    </section>
</template>

<script>
import NavBar from "../components/NavBar.vue";

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
    background-color: #434343;
    height: 85vh;
    display: grid;
    grid-template-columns: 18% 58% 18%;
    grid-template-areas: "s1 s2 s3";
    box-sizing: border-box;
    justify-content: space-evenly;
}
.s1{
    background-color: black;
    background: radial-gradient(#282727,#000000);
    color: white;
    border-radius: 5px;
    text-align: left;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.description{
    display: flex;
    margin-left: 10px;
}.description p{
    margin-left: 5px;
}
.description2{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}.description2 p{
    margin-top: 0px;
}
.s2{
    background-color: black;
    background: radial-gradient(#706D6D,#000000);
    color: white;
    border-radius: 5px;
    text-align: left;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;

}.s3{
    background-color: black;
    color: white;
    background: radial-gradient(#282727,#000000);
    border-radius: 5px;
    text-align: left;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
}
img{
    max-width: 70%;
    border-radius: 10px
}
h1{
    margin: 0;
    background-color: #434343;
    color: white;
    width: 100%;
    text-align: center;
}
button{
  width: 80px !important;
  height: 80px !important;
  border-radius: 100%;
  border-color: transparent;
  background-color: #5C39BE;
  color: white;
  font-size: 15px;
  cursor:pointer;
  margin-bottom: 10px;
  text-decoration: none;
}
button:hover{
  width: 81px;
  height: 81px;
  border-color: white;
  border: 1px solid;
}
</style>