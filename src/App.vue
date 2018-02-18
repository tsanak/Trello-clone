<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  background-color: rgb(218, 218, 218);
  min-height: 100%;
  overflow: auto;
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

.j-s-between {
  justify-content: space-between !important;
}

.j-flex-end {
  justify-content: flex-end !important;
}

.a-center {
  align-items: center;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
