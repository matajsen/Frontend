<template>
  <i>
    <div class="pocetna">
      <h1>Istra sportske dvorane</h1>
      <div class="dugmi">
        <button class="dugme" @click="sportdvorana">Sportske dvorane</button>
        <button class="dugme" @click="rasp">Raspored</button>
        <button class="dugme" @click="trazidvorana">Zatrži dvoranu</button>
      </div>
    </div>
  </i>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    sportdvorana() {
      this.$router.push("/Sportskedvorane");
    },
    rasp() {
      this.$router.push("/Raspored");
    },
    trazidvorana() {
      this.$router.push("/Zatrazidvoranu");
    },
  },
};
</script>

<style>
h1 {
  font-size: 50px;
}
i {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "normal", normal;
  color: whitesmoke;
  outline-color: rgb(92, 92, 92);
  height: 0.1px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-image: url("../assets/sportska-dvorana.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.dugme {
  margin: 0 100px;
  border: 1px solid grey;
  border-radius: 8px;
}
</style>
