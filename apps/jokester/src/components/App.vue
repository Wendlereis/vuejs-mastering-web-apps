<template>
  <div id="app">
      <h3>Got Jokes?</h3>

      <button class="btn btn-primary" @click="initJokes">Add ten random jokes</button>
      <button class="btn btn-primary" @click="addJoke">Add a random joke</button>

      <Joke
        v-for="(joke, index) in $store.state.jokes"
        :joke="joke"
        :index="index"
        :key="index"/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  import Joke from './Jokes.vue'

  export default {
    methods: mapActions([
      'initJokes',
      'addJoke'
    ]),
    components: {
      Joke
    }
  }
</script>

