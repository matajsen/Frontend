<template>
  <div>
    <select class="form-select" aria-label="Default select example">
        <option selected>Odaberi sportsku dvoranu</option>
        <option value="1">Žatika</option>
        <option value="2">Saline</option>
        <option value="3">Novigrad</option>
        <option value="4">Umag</option>
        <option value="5">SRC Mirna</option>
        <option value="6">SC Franko Mileta</option>
        <option value="7">SRC Veli Jože</option>
        <option value="8">Dom sportvoa Mate Parlov</option>
        <option value="9">Dom braće Ribar</option>
        <option value="10">Sqash dvorana</option>
        <option value="11">Dvorana Kaštelir, Labinci</option>
        <option value="12">Školsko gradska dvorana Pazin</option>
        <option value="13">SD Bale</option>
    </select>
    <button class="dugme2" @click="HomeView">Home</button>
</div>

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