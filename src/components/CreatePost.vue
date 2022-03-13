<template>
   <form
    @submit.prevent="createPost"
    class="row bg-grey darken-20 justify-content-center elevation-3 p-2 m-5"
  >
    <div class="col-md-4 mb-2">
      <label for="" class="form-label">Post content</label>
      <input
        v-model="post.body"
        required
        type="text"
        class="form-control"
        aria-describedby="helpId"
      />
    </div>

    <div class="col-md-8 mb-2">
      <label for="" class="form-label">Post Image</label>
      <input
        v-model="post.imgUrl"
        required
        type="text"
        class="form-control"
        aria-describedby="helpId"
      />
    </div>

    

    <div class="col-12 d-flex justify-content-end">
      <button class="btn btn-primary">create</button>
    </div>
  </form>


    
</template>


<script>
import { ref } from '@vue/reactivity'

import { postsService } from '../services/PostsService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
export default {
    setup(){
        const post = ref({})
        return {
            post,
            async createPost(){
                try {
                    await postsService.createPost(post.value);
                    post.value= {}
                    logger.log(post.value)
                } catch (error) {
                    logger.error(error)
                    Pop.toast(error.message, 'error')
                    
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>