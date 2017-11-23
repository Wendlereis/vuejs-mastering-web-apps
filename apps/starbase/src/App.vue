<template>
    <div id="app">
        <h2>{{title}}</h2>
        <div class="row">
            <Character v-for="(id, index) in ids" :id="id" :key="index"/>
        </div>
    </div>
</template>

<script>
    import Character from "./components/character.vue";

    export default {
        name: 'app',
        data(){
            return {
                title: 'Generate your team',
                ids: [1, 13, 14]
            }
        },
        components: { Character }
    }
</script>
