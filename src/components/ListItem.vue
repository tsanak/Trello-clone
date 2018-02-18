<template>
    <div 
        class="card"
    >
        <div class="card-content">
            <div class="columns">
                <div class="column is-8">
                    <p v-if="!editting">{{item.name}}</p>
                    <div v-else>
                        <div class="field">
                            <div class="control">
                                <textarea type="text" class="input" placeholder="Item..."
                                v-model.trim="newName"
                                ></textarea>
                            </div>
                        </div>
                        <div class="field is-grouped j-s-between">
                            <div class="control">
                                <button class="button is-link"
                                @click="saveItem">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-4 is-flex j-flex-end">
                    <span class="icon cursor-pointer" @click="editItem">
                        <i class="fas fa-pencil-alt"></i>
                    </span>
                    <span class="icon cursor-pointer" @click="removeItem">
                        <i class="fas fa-times"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListItem',
    data() {
        return {
            editting: false,
            newName: this.item.name
        }
    },
    methods: {
        removeItem() {
            this.$store.dispatch('removeItem', {
                listId: this.listId,
                projectId: this.projectId,
                itemId: this.item.id
            });
        },
        editItem() {
            this.editting = !this.editting;
            if(!this.editting) this.newName = this.item.name;
        },
        saveItem() {
            this.$store.dispatch('editItem', {
                listId: this.listId,
                projectId: this.projectId,
                item: this.item,
                newName: this.newName
            });
            this.editItem();
        }
    },
    props: ['item', 'listId', 'projectId']
}
</script>

<style scoped>
.card-content {
    padding: 0.5rem 0;
    margin: 0.75rem;
}

.card {
    min-height: unset;
}
</style>
