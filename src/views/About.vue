<template>
  <div class="about">
    <my-nav></my-nav>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import myNav from '../components/Navigation.vue'
export default {
  name: 'About',
  components: {
    myNav
  }
}
</script>