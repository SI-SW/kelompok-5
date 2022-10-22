<script>
import { mapActions, mapState } from 'pinia'
import {RouterLink} from 'vue-router'
import d$todo from '@/stores/dashboard/todo.js'; 
    export default {
        name: 'Todo',
        computed: {
            ...mapState(d$todo, ['g$list']),
        },
        methods: {
            ...mapActions(d$todo, ['a$list']),
            async getList() {
                try {
                    await this.a$list();
                } catch(e) {
                    console.error('methods getList error', e);
                }
            },
            // ...mapActions(d$todo, ['a$del']),
        },
        async created() {
            await this.getList();
        }
    };
</script>

<template>
    <div> 
        <div class="py-4 px-3 container-fluid">
            <div class=" row">
                <div class="col-9 position-absolute end-0 me-5">
                    <div class="card">
                        <div class="card-header pb-0">
                            <h6>Todo List Table</h6>
                        </div>
                        <div class="position-absolute end-0 me-5 mt-4">
                            <!-- <RouterLink :to="{name:'Add To Do'}" class="btn btn-primary col-3 col-md-auto">Add</RouterLink> -->
                        </div>
                        <div class="card-body px-0 pt-0 pb-2">
                            <div class="table-responsive p-0">
                                <table class="table align-items-center mb-0">
                                    <thead>
                                        <tr>
                                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Created At</th>
                                            <th
                                                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                                            >Name</th>
                                            <th
                                                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                                            >Status</th>
                                            <th
                                                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                                            >Description</th>
                                            <th class="text-secondary opacity-7"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in g$list" :key="index" class="text-capitalize">
                                            <td>
                                                <div class="d-flex px-2 py-1">
                                                <div>
                                                    <img
                                                    src="../../assets/img/team-2.jpg"
                                                    class="avatar avatar-sm me-3"
                                                    alt="user1"
                                                    />
                                                </div>
                                                <div class="d-flex flex-column justify-content-center">
                                                    <span class="text-secondary text-xs font-weight-bold">{{item.createdAt}}</span>
                                                </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="mb-0 text-sm">{{item.name}}</h6>
                                            </td>
                                            <td class="align-middle text-center text-sm">
                                                <span class="badge badge-sm bg-gradient-success">{{item.status}}</span>
                                            </td>
                                            <td class="align-middle text-start">
                                                <span class="text-secondary text-xs font-weight-bold">{{item.description}}</span>
                                            </td>
                                            <td class="align-start row">
                                                <!--
                                                <a
                                                href="javascript:;"
                                                class="text-secondary font-weight-bold text-xs"
                                                data-toggle="tooltip"
                                                data-original-title="Edit user"
                                                >Edit</a>
                                                -->

                                                <button type="button" class="btn btn-warning text-xs me-1 col-md-auto">Edit</button>
                                                <button type="button" @click="a$del(item.id)" class="btn btn-danger text-xs col-3 col-md-auto me-2">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>