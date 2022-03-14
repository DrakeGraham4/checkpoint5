<template>
  <header>
    <Navbar />
  </header>
  <main>
    
    <router-view />
    <billboards v-for="b in billboards" :key="b.title" :billbaords="b" />
      
  </main>
  <footer>
    <div class="bg-primary text-dark text-center p-4">
      Made (not very well) by Cat Man 😺
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Billboards from './components/Billboards.vue'
export default {
  components: { Billboards },
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState),
      billboards: computed(()=> AppState.billboards)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
