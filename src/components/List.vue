<template>
    <div class="column">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                {{ list.name }}
                </p>
                <span class="card-header-icon"
                    @click="openModal = true"
                >
                    <span class="icon">
                        <i class="fas fa-times" aria-hidden="true"></i>
                    </span>
                </span>
            </header>
            <div class="card-content">
                <draggable 
                    :options="{group:'listItems'}"
                    element="span"
                    v-model="list.items" 
                    @end="onEnd"
                    :class="[
                        list.items.length > 0 ? 'd-inherit' : 'is-block min-h-20'
                    ]"
                    >
                    <list-item
                        v-for="item in list.items"
                        :key="item.id"
                        :listId="list.id"
                        :projectId="projectId"
                        :item="item"
                    ></list-item>
                </draggable>

                <item-list-form
                    :placeholder="'Add an item...'"
                    :projectId="projectId"
                    :listId="list.id"
                    :isList="false"
                ></item-list-form>
            </div>
        </div>
            
        <modal
            :title="'Are you sure?'"
            :content="'Are you sure you want to delete the list:'+ list.name +' ?'"
            :successClass="'is-danger'"
            :successTitle="'Delete'"
            :openModalProp="openModal"
            @success="removeList"
            @closeModal="openModal = false;"
        ></modal>

    </div>
</template>

<script>
import ItemListForm from '@/components/ItemListForm';
import ListItem from '@/components/ListItem';
import draggable from 'vuedraggable';
import Modal from '@/components/Modal';

export default {
  name: 'List',
  components: {
      ItemListForm,
      ListItem,
      draggable,
      Modal
  },
  data() {
      return {
          openModal: false
      }
  },
  methods: {
    removeList() {
        this.$store.dispatch('removeList', { 
            listId: this.list.id, 
            projectId: this.projectId
        });            
    },
    onEnd() {
        this.$emit('itemsChanged')
    }
  },
  props: ['list', 'projectId']
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

    .min-h-20 {
        min-height: 20px;
    }
</style>
