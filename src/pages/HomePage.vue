<template>

  <!-- <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center"> -->
    <!-- <button @click="changePage()"></button> -->
    <!-- <button @click="getMyProfile()"> My Profile
    
    </button> -->
    <router-link :to="{
      name: 'Profile', 
      params: { id: account.id} }">
    <h5 class="text-dark p-2"> Go To Your Profile</h5>
    </router-link>

    
    
    <div class="">
      <div class="col-12">
        <Search />
      </div>
    </div>
    
    <div class="m-4 p-2">
      <div v-for="p in posts" :key="p.id" class="col-md-8 text-center">
        <Post :post="p"/>
      </div>
    </div>
    <div class="col-2">
      <Ad />
    </div>
    <button v-if="olderPage" class="btn btn-primary p-2"
    @click="changePage(olderPage)">Next</button>
    <button v-if="newPage" class="btn btn-primary p-2"
    @click="changePage(newPage)">Previous</button>
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
        
      } catch (error) {
        logger.log(error);
        Pop.toast(error.message, 'error')
        
      }
    });
    return{
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account),
      olderPage: computed(()=> AppState.olderPage),
      newPage: computed(() => AppState.newPage),
      
      
    async changePage(page){
      try {
        logger.log(page, 'PAGE')
        await postsService.changePage(page);
      } catch (error) {
        logger.error(error)
        Pop.toast('error')
      }
    }
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
