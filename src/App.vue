<template>
  <NavBar/>
  <section class="mainScreen">
    <div class="s1">
      <h1>Comienza la aventura</h1>
    </div>
    <div class="s2">
      <h2>Nombra a tu tortuga</h2>
      <input type="text">
    </div>
    <div class="s3">
      <img src="https://cdn.pixabay.com/photo/2017/01/31/17/09/egg-2025633_960_720.png">
    </div>
    <div class="s4">
      <button>Siguiente</button>
    </div>
  </section>

  <!--<Problems/>-->

</template>

<script>
import NavBar from "./components/NavBar.vue";
//import Problems from "./components/Problems.vue"

export default {
  name: "App",
  components: {
    NavBar
    //Problems
  },
};
</script>

<style>
  body{
    margin: 0;
  }
  template{
    padding: 0;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
}
.mainScreen{
  background-image: url("https://cdn.pixabay.com/photo/2016/04/18/22/05/seashells-1337565_960_720.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  height: 85vh;
}
h1{
  margin: 0;
  color: white;
  font-size: 30px;
}h2{
  color: white;
  font-size: 25px;
  margin-bottom: 0px;
}
input{
  width: 300px;
  height: 35px;
  border-radius: 30px;
  font-size: 25px;
  text-align: center;
}

button{
  width: 80px;
  height: 80px;
  border-radius: 100%;
  border-color: transparent;
  background-color: #5C39BE;
  color: white;
  font-size: 15px;
  cursor:pointer;
  margin-bottom: 10px;
}
button:hover{
  width: 81px;
  height: 81px;
}
</style>

<style scoped>
img{
  max-width: 15%;
  animation: egg 2s ease-in-out infinite;
}
img:hover{
 animation: egg2 0.5s ease-in-out infinite;
 cursor:pointer;
}
@keyframes egg{
    0%{
       transform: rotate(10deg);
    }10%{
      transform: rotate(15deg);
    }
    20%{
      transform: rotate(10deg);
    }
    30%{
       transform: rotate(0deg);
    }40%{
      transform: rotate(10deg);
    }
    
}

@keyframes egg2{
    0%{
       transform: rotate(5deg);
    }10%{
      transform: rotate(10deg);
    }
    20%{
      transform: rotate(5deg);
    }
    30%{
       transform: rotate(0deg);
    }40%{
      transform: rotate(5deg);
    }
    
}
</style>
