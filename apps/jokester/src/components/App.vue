<template>
  <div id="app">
      <h3>Got Jokes?</h3>

      <button class="btn btn-primary" @click="initJokes">Add ten random jokes</button>
      <button class="btn btn-primary" @click="addJoke">Add a random joke</button>

      <span
        v-for="(t, index) in types"
        :key="index">

        <input
          type="checkbox"
          :value="t"
          v-model="checkedTypes"
          checked>

        <label>{{t}}</label>
      </span>

      <Joke
        v-for="(joke, index) in $store.state.jokes"
        v-show="checkedTypes.includes(joke.type)"
        :joke="joke"
        :index="index"
        :key="index"/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  import Joke from './Jokes.vue'

  export default {
    data(){
      return {
        types: [
          'general',
          'knock-knock',
          'programming'
        ],
        checkedTypes: [
          'general',
          'knock-knock',
          'programming'
        ]
      }
    },
    methods: mapActions([
      'initJokes',
      'addJoke'
    ]),
    components: {
      Joke
    }
  }
</script>

