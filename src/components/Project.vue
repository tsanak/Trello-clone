<template>
    <div class="columns w100">
        <div class="column">
            <router-link to="/">
                <button class="button is-outlined" id="back">
                    <i class="fas fa-arrow-left"></i> 
                    <span id="span-back">Back</span>
                </button>
            </router-link>
            <div class="columns m-4 mt-50">
                <div class="column"
                    v-for="list in project.lists"
                    :key="list.id"
                >
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                            {{ list.name }}
                            </p>
                            <span class="card-header-icon"
                                @click="removeList(list.id)"
                            >
                                <span class="icon">
                                    <i class="fas fa-times" aria-hidden="true"></i>
                                </span>
                            </span>
                        </header>
                        <div class="card-content">
                            <list-item
                                v-for="item in list.items"
                                :key="item.id"
                                :listId="list.id"
                                :projectId="projectId"
                                :item="item"
                            ></list-item>
                            <item-list-form
                                :placeholder="'Add an item...'"
                                :projectId="projectId"
                                :listId="list.id"
                                :isList="false"
                            ></item-list-form>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <div class="card-content new-list-card-content">
                            <item-list-form
                                :placeholder="'Add a list...'"
                                :projectId="projectId"
                                :listId="''"
                                :isList="true"
                            ></item-list-form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import ItemListForm from '@/components/ItemListForm';
import ListItem from '@/components/ListItem';
export default {
    name: 'Project',
    components: {
        ItemListForm,
        ListItem
    },
    computed: {
        projects() {
            return this.$store.getters.projects;
        },
        project() {
            let currentProject = this.projects.find(proj => {
                return proj.id == this.projectId
            });
            return currentProject;
        }
    },
    data() {
        return {
            projectId: this.$route.params.projectID,
            newList: ''
        }
    },
    methods: {
        addList() {
            if(this.newList == '') return;
            //Add list to project
            this.$store.dispatch('addList', { list: this.newList, projectId: this.projectId});
            this.newList = '';
        },
        removeList(listId) {
            this.$store.dispatch('removeList', { listId, projectId: this.projectId});            
        }
    }
}
</script>

<style scoped>
    .card {
        min-height: 100px;
        width: 300px;
    }

    .card:hover {
        box-shadow: 0px 2px 10px 3px rgba(10, 10, 10, 0.1);
        transition: all 250ms;
    }

    .card-content {
        padding: 0rem 0.5rem 1rem;
    }

    .new-list-card-content {
        padding: 1.5rem;
    }

    .column {
        max-width: 300px;
    }

    .card-header {
        word-break: break-word;
    }

    #back {
        font-size: 1.4rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }

    #span-back {
        max-width: 0;
        overflow: hidden;
        transition: all 300ms;
    }

    #back:hover > #span-back {
        max-width: 300px;
    }
    
    .mt-50 {
        margin-top: 50px;
    }

    .w100 {
        width: 100%;
    }
</style>
