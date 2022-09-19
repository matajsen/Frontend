<template>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Password</label>
</div>
<button class="dugme1" @click="HomeView">Prijavi se</button>
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
    .dugme1{
        border-radius: 8px;
        border: grey;
        background-color: white;
        border: 1px solid grey;
        position: fixed;
        left: 30px;
        margin: 15px;
    }
</style>