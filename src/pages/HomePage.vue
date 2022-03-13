<template>

  <!-- <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center"> -->
    <!-- <button @click="changePage()"></button> -->
    <div class="row">
      <div class="col-12">
        <Search />
      </div>
    </div>
    <CreatePost />
    <div class="m-4 p-2">
      <div v-for="p in posts" :key="p.id" class="col-md-5 text-center">
        <Post :post="p"/>
      </div>
    </div>
  <!-- </div> -->
</template>
    

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import {postsService} from '../services/PostsService';
import { AppState } from '../AppState';
export default {
  name: 'Home',
  setup(){
    
    onMounted(async ()=> {
      try {
        await postsService.getAll();
        // await postsService.changePage()
      } catch (error) {
        logger.log(error);
        Pop.toast(error.message, 'error')
        
      }
    });
    return{
      posts: computed(() => AppState.posts),
      // olderPages: computed(() => AppState.olderPages),
      // newPages: computed(() => AppState.newPages)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
     
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
