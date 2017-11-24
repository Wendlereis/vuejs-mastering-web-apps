<template>
    <div class="col-md-4" @click="switchItem">
        <div class="item-card">
            <div class="card-block">
                <h4 class="card-title">{{item.name}}</h4>
                <div
                    v-for="(value, key, index) in item"
                    :key="index">

                    <div v-if="index < 5">
                        {{key}}: <strong>{{value}}</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['passedItem', 'type'],
        data(){
            return {
                item: {}
            }
        },
        methods: {
            switchItem(){
                let randomId = Math.floor(Math.random() * 63) + 1

                fetch(`https://swapi.co/api/${this.type}/${randomId}`, {
                        method: 'GET'
                    }).then(res => res.json())
                    .then(json => this.item = json)
            }
        },
        created() {
            this.item = this.passedItem
        }
    }
</script>

