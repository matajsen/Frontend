<template>
  <!-- <div class="about">
    <h1>Raspored igranja po dvoranama</h1>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Sati</th>
      <th scope="col">Ponedjeljak</th>
      <th scope="col">Utorak</th>
      <th scope="col">Srijeda</th>
      <th scope="col">Četvrtak</th>
      <th scope="col">Petak</th>
      <th scope="col">Subota</th>
      <th scope="col">Nedjelja</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">8:00 - 10:00</th>
    </tr>
    <tr>
      <th scope="row">10:00 - 12:00</th>
    </tr>
    <tr>
      <th scope="row">12:00 - 14:00</th>
    </tr>
        <tr>
      <th scope="row">14:00 - 16:00</th>
    </tr>
        <tr>
      <th scope="row">16:00 - 18:00</th>
    </tr>
        <tr>
      <th scope="row">18:00 - 20:00</th>
    </tr>
        <tr>
      <th scope="row">20:00 - 22:00</th>
    </tr>
  </tbody>
</table>
  </div> -->
<button class="dugme2" @click="HomeView">Home</button>
</template>

<script>
export default {
  methods: {
        HomeView() {
            this.$router.push('/HomeView')
        }
    }
}
</script>

<style>
.dugme2{
        border-radius: 8px;
        border: grey;
        background-color: white;
        border: 1px solid grey;
        position: fixed;
        right: 30px;
        bottom: 50px;
        margin: 15px;
    }
</style>
