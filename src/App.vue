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
}
</script>

<style src="../public/css/common.css">

</style>
<style lang="scss">
  #app{
    --themeColor:#3370ff
  }
</style>
