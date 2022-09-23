<template>
  <div class="red">
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <datetime
              class="pick"
              format="MM/DD/YYYY"
              width="300px"
              v-model="datum"
            ></datetime>
            <select
              v-model="termin"
              class="form-select"
              aria-label="Default select example"
            >
              <option value="1">8:00 - 10:00</option>
              <option value="2">10:00 - 12:00</option>
              <option value="3">12:00 - 14:00</option>
              <option value="4">14:00 - 16:00</option>
              <option value="5">16:00 - 18:00</option>
              <option value="6">18:00 - 20:00</option>
              <option value="7">20:00 - 22:00</option>
            </select>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Zatvori
            </button>
            <button @click="sendData()" type="button" class="btn btn-primary">
              Rezerviraj
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-for="teren in dvorane"
      :key="teren._id"
      class="card"
      style="width: 18rem"
    >
      <img :src="teren.slika" class="card-img-top" alt="zatika" />
      <div class="card-body">
        <h5 class="card-title">{{ teren.naziv }}</h5>
        <p class="card-text">{{ teren.mjesto }}</p>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          @click="fillModal(teren)"
        >
          Rezerviraj
        </button>
      </div>
    </div>
  </div>
  <button class="dugme2" @click="HomeView">Home</button>
</template>

<script>
import datetime from "vuejs-datetimepicker";
export default {
  data: () => ({
    dvorane: [],
    teren: {},
    datum: "",
    termin: "",
  }),

  async mounted() {
    const response = await fetch("http://localhost:3000/sportske-dvorane");
    this.dvorane = await response.json();
    console.log(this.dvorane);
  },

  methods: {
    HomeView() {
      this.$router.push("/HomeView");
    },
    fillModal(teren) {
      this.teren = teren;
    },
    sendData() {
      console.log(this.datum);
    },
  },
  components: { datetime },
};
</script>

<style>
.card {
  margin: 0 auto;
}
.dugme2 {
  border-radius: 8px;
  border: grey;
  background-color: white;
  border: 1px solid grey;
  right: 30px;
  bottom: 50px;
  margin: 15px;
}
.pick {
  margin: 0 auto;
  padding: 10px 0;
}
.red {
  flex-wrap: wrap;
  display: flex;
}
</style>
