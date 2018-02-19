<template>
  <div class="columns m-4">
    <div class="columns is-multiline">
      <div class="column" 
        v-for="project in projects"
        :key="project.id"
      >
        <router-link :to="{name: 'Project', params: { projectID: project.id }}">
          <div class="card is-flex j-center a-center">
            <div class="card-content">
              <h2>{{ project.name }}</h2>
            </div>
          </div>
        </router-link>
      </div>
      <div class="column">
        <div class="card is-flex j-center a-center cursor-pointer"
          @click="openModal"
        >
          <div class="card-content">
            <h2 class="subtitle"><i class="fas fa-plus"></i></h2>
          </div>
        </div>
      </div>
    </div>
    <div :class="['modal', { 'is-active': isOpen }]">
      <div class="modal-background" @click="closeModal" @keydown.esc="closeModal"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Create a new project</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label" for="newProjectName">Project name</label>
            <div class="control has-icons-right">
              <input 
                v-model.trim="project.name"
                @keyup.enter="createProject"
                @input="changing" 
                :class="['input', { 'is-danger': hasError }]" 
                type="text" 
                id="newProjectName" 
                placeholder="My awesome project" >              
              <span class="icon is-small is-right" v-if="hasError">
                <i class="fas fa-exclamation-triangle"></i>          
              </span>
            </div>
            <p class="help is-danger" v-if="hasError">
              Your new project should have a name
            </p>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="createProject">Create</button>
          <button class="button" @click="closeModal">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      project: {
        name: '',
        id: '',
        lists: []
      },
      isOpen: false,
      changedName: false
    }
  },
  computed: {
    projects() {
      return this.$store.getters.projects;
    },
    hasError() {
      return this.project.name == '' && this.changedName;
    }
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
      this.clearData();
    },
    clearData() {
      this.project = {
        name: '',
        id: '',
        lists: [],
        background: '#dadada'
      };
      this.changedName = false;
    },
    changing() {
      this.changedName = true;
    },
    createProject() {
      this.changedName = true;
      if(this.hasError) {
        return;  
      }
      //Actually create the project
      this.$store.dispatch('addProject', { project: this.project });
      this.closeModal();
      this.clearData();
    },
  },
  beforeCreate() {
    let home_bg = "dadada";
    document.documentElement.style.cssText = "background-color: "+ home_bg;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    min-height: 100px;
    width: 300px;
    user-select: none; 
  }

  .card:hover {
    box-shadow: 0px 2px 10px 3px rgba(10, 10, 10, 0.1);
    transition: all 250ms;
  }

  .m-4 {
    margin: 20px;
  }

  .center {
    margin: 0 auto;
  }

  .j-center {
    justify-content: center;
  }

  .a-center {
    align-items: center;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .column {
    max-width: 300px;
  }
</style>
