<template>
        <div class="row justify-content-center">

    <div class="col-4 mt-3 mb-0">
      <img
        class="profile-img rounded-circle elevation-4"
        :src="profile.picture"
      />
      <h2 class="d-flex">{{ profile.name }}
          <i
            v-if="account.id == profile.id"
            data-bs-toggle="modal"
            data-bs-target="#edit-profile"
            class="mdi mdi-pencil selectable ps-5"
          ></i>
      </h2>
      <p>
        {{ profile.bio }}
        
      </p>
      <a
        v-if="profile.github"
        
        :href="profile.github"
      ></a>

      <ul>
          
          <p v-if="profile.class">Class: {{ profile.class }}</p>
          <p v-if="profile.email">Email: {{ profile.email }}</p>
          <p v-if="profile.linkedin">LinkedIn: {{ profile.linkedin }}</p>
          <p v-if="profile.github">GitHub: {{profile.github}} </p>
        </ul>
        
         
      
    
    </div>

    <div class="profile container-fluid text-center">
         <div class="row justify-content-center">
      <div v-for="p in posts" :key="p.id" class="col-8">
        <Post :post="p" />
      </div>
    </div>
    </div>
    <Modal id="edit-profile">
      <template #title> Edit Account</template>
      <template #body><EditAccountForm /> </template>
    </Modal>
    </div>
    
        
          <link rel="stylesheet" href="//cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css">
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { watchEffect } from "@vue/runtime-core";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { profilesService } from "../services/ProfilesService";
import { useRoute } from "vue-router";
import { postsService } from "../services/PostsService";
export default {
  setup() {
    const route = useRoute();
    watchEffect(async () => {
      try {
        if (route.name == "Profile") {
          await profilesService.getProfile(route.params.id);
          await postsService.getAll({ creatorId: route.params.id });
        }
      } catch (error) {
        logger.error(error);
        Pop.toast(error.message, "error");
      }
    });
    return {
      posts: computed(() => AppState.posts),
      profile: computed(() => AppState.profile),
      account: computed(() => AppState.account),
    };
  },
};
</script>


<style lang="scss" scoped>

</style>