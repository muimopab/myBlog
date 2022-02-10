<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>

export default {
  name: 'App',
  created(){
  }
}
</script>

<style lang="scss">
  #app{
      height: 100%;
  }
</style>
