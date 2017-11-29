<template>
  <div class="from-inline">
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
    
    <br/>
    <p>{{error.message}}</p>
    <br/>
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

