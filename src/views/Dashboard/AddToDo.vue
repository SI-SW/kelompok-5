<template>
    <div class="py-4 px-3 container-fluid">
        <div class="row">
            <div class="col-12 position-absolute end-0 me-1">
                <div class="container rounded-3">
                    <h1 class="py-4 text-center">Add ToDo</h1>
                    <form @submit.prevent="addTodo">
                        <div class="mb-3">
                            <label>Nama:</label>
                            <input class="form-control" type="text" v-model="input.name"/>
                        </div>
                        <div class="mb-3">
                            <label>Deskripsi:</label>
                            <input class="form-control" type="text" v-model="input.description"/>
                        </div>
                        <div class="mb-3">
                            <label>Keterangan:</label>
                            <input class="form-control" type="text" v-model="input.category"/>
                        </div>
                        <button  class="btn btn-success me-3" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia';
import d$todo from '@/stores/dashboard/todo';


    export default {
        data: () => ({
            input: {
                name: 'nama anda',
                category: 'pending',
                description: 'On Going'
            }
        }),
        methods: {
            ...mapActions(d$todo, ['addlist']),
            async addTodo() {
                try {
                    await this.addlist({...this.input});
                    this.$router.replace({name: 'Todo'});
                    console.log(this.input);
                } catch (e) {
                    console.error(e);
                    console.log(this.input);
                }
            },
        },
    }
</script>

<style>
.container{
    background-color:white;
}
</style>