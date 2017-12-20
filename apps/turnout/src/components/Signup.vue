<template>
  <div class="from-inline">
    <h3>Sign Up</h3>

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
            @click="signUp">
            Sign Up
        </button>
    </div>

    <p>
        <router-link to="/signin">Already a user? Sign in</router-link>
    </p>

    <p>{{error.message}}</p>
  </div>
</template>

<script>
    import { firebaseApp } from '../firebaseApp'

    export default {
        data(){
            return {
                email: '',
                password: '',
                error: {
                    message: ''
                }
            }
        },
        methods: {
            signUp(){
                firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
                .catch(err => {
                    this.error = err
                })
            }
        }
    }
</script>

