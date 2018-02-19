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

html::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F505;
}

html::-webkit-scrollbar
{
    width: 10px;
    height: 10px;
    background-color: #F5F5F505;
}

html::-webkit-scrollbar-thumb
{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #9d9d9d;
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
