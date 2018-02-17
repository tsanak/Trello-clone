<template>
    <div class="columns m-4">
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
                </div>
            </div>
        </div>
        <div class="column">
            <div class="card">
                <div class="card-content">
                    <div class="field">
                        <div class="control">
                            <input type="text" class="input" placeholder="Add a list..."
                            v-model.trim="newList"
                            @keyup.enter="addList">
                        </div>
                    </div>
                    <div class="field is-grouped j-s-between">
                        <div class="control">
                            <button class="button is-link"
                            @click="addList">Save</button>
                        </div>
                        <div class="control">
                            <button class="button is-text"
                            @click="newList=''"><i class="fas fa-times"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Project',
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

  .column {
    max-width: 300px;
  }

  .card-header {
    word-break: break-word;
  }
</style>
