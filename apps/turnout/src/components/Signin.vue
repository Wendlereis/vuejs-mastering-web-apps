<template>
  <div class="from-inline">
    <h3>Sign In</h3>

    <div class="form-group">
        <input
            type="email"
            class="form-control"
            placeholder="email"
            v-model="email" />

        <input
            type="password"
            class="form-control"
            placeholder="password"
            v-model="password" />

        <button
            class="btn btn-primary"
            @click="signIn">
            Sign In
        </button>
    </div>

    <p>
        <router-link to="/signup">Not a user? Sign up</router-link>
    </p>

    <p>{{error.message}}</p>
  </div>
</template>

<script>
    import { firebaseApp } from '../firebaseApp'

    export default {
        data() {
            return {
                email: '',
                password: '',
                error: {
                    message: ''
                }
            }
        },
        methods: {
            signIn(){
                firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
                .catch(err => {
                    this.error = err
                })
            }
        }
    }
</script>

