<template>
  <div class="app">
      <h3>Events Dashboard</h3>
      <button class="btn btn-danger btn-sm btn-signout" @click="signOut">Sign Out</button>

      <hr>

      <AddEvent />

      <hr>

      <div class="col-md-12">
        <Event
          v-for="(event, index) in this.$store.state.events"
          :event="event"
          :key="index"/>
      </div>
  </div>
</template>

<script>
  import { firebaseApp, eventsRef } from '../firebaseApp'
  import AddEvent from './AddEvent.vue'
  import Event from './Event.vue'

  export default {
    methods: {
      signOut(){
        this.$store.dispatch('signOut')
        firebaseApp.auth().signOut()
      }
    },
    components: {
      AddEvent,
      Event
    },
    mounted() {
      eventsRef.on('value', snap => {
        let events = []

        snap.forEach(event => {
          events.push(event.val())
        })

        this.$store.dispatch('setEvents', events)
      })
    }
  }
</script>

