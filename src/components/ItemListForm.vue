<template>
    <div :class="{'itemForm': !isList}">
        <div class="field">
            <div class="control">
                <input type="text" class="input" :placeholder="placeholder"
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
</template>

<script>
export default {
  name: 'ItemListForm',
  data() {
      return {
          newList: ''
      }
  },
  methods: {
      addList() {
          if(this.isList) {
            if(this.newList == '') return;
            //Add list to project
            this.$store.dispatch('addList', { list: this.newList, projectId: this.projectId});
            this.newList = '';
          }
          else {
            if(this.newList == '') return;
            //Add item to list
            this.$store.dispatch('addItem', { 
                item: this.newList, 
                listId: this.listId, 
                projectId: this.projectId
            });
            this.newList = '';
          }
      }
  },
  props: ['placeholder', 'isList', 'listId', 'projectId']
}
</script>

<style scoped>
    .itemForm {
        border-top: 1px solid #d7d7d7;
        padding-top: 10px;
    }
</style>
