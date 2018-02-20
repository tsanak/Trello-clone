<template>
    <div :class="['modal', { 'is-active': isOpen }]">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">{{ title }}</p>
                <button class="delete" aria-label="close" @click="closeModal"></button>
            </header>
            <section class="modal-card-body">
                <div class="content">
                    {{ content }}
                </div>
            </section>
            <footer class="modal-card-foot">
                <button :class="['button', successClass]" @click="successAction">{{ successTitle }}</button>
                <button class="button" @click="closeModal">Cancel</button>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
      return {
          isOpen: false
      }
  },
  methods:{
      closeModal() {
          this.$emit('closeModal');
      },
      successAction() {
          this.$emit('success');
          this.closeModal();
      }
  },
  watch: {
      openModalProp(newVal, oldVal) {
         this.isOpen = newVal;
      }
  },
  props: ['title', 'content', 'successClass', 'successTitle', 'openModalProp']
}
</script>
