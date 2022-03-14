<template>
    <form class="form-group row m-2" @submit.prevent="search">
        <input v-model="searchPost" type="text" class="col-6" placeholder="Search Posts..."/>
        <button class="btn btn-info col-1 ms-2">Search</button>
    </form>
</template>


<script>
import { postsService } from '../services/PostsService';
import { ref } from "vue";
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
export default {
    setup(){
        const searchPost = ref("");
        return {
            searchPost,
            async search(){
                try {
                    await postsService.getAll({query: searchPost.value})
                } catch (error) {
                    logger.log(error);
                    Pop.toast(error.message, 'error')
                    
                }
            },
        }

    }
}
</script>


<style lang="scss" scoped>

</style>