<template>
    <div class="col-md-4" @click="switchCharacter">
        <div class="character-card">
            <div class="card-block">
                <h4 class="card-title">{{character.name}}</h4>
                <p class="card-text">Height: <span>{{character.height}} cm</span></p>
                <p class="card-text">Mass: <span>{{character.mass}} kg</span></p>
                <p class="card-text">Hair Color: <span>{{character.hair_color}}</span></p>
                <p class="card-text">Eye Color: <span>{{character.eye_color}}</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        data() {
            return {
                character: {}
            }
        },
        methods: {
            fetchCharacter(id){
                fetch(`https://swapi.co/api/people/${id}`, {
                    method: 'GET'
                }).then(res => res.json())
                .then(json => this.character = json)
            },
            switchCharacter(){
                let randomId = Math.floor(Math.random() * 83) + 1
                this.fetchCharacter(randomId)
            }
        },
        created() {
            this.fetchCharacter(this.id);
        }
    }
</script>
