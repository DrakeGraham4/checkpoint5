<template>
  <form class="d-flex flex-column p-5 bg-dark">
    <label for="Name">Name</label>
    <input v-model="editable.name" type="text" />

    <label for="Class">Class</label>
    <input v-model="editable.class" type="text" />

    <label for="Profile Picture">Profile Image</label>
    <input v-model="editable.picture" type="text" />

    <label for="Bio">Bio</label>
    <input v-model="editable.bio" type="text" />

    <label for="Cover Photo">Cover Photo</label>
    <input v-model="editable.coverImg" type="text" />

    
    <label for="Social Media">Github</label>
    <input v-model="editable.github" type="text" />

    <label for="">LinkedIn</label>
    <input v-model="editable.linkedin" type="text" />
    
    <label for="Graduated">Alumni Status</label>
    <input v-model="editable.graduated" type="text" />
    
    
    <button type="button" class="btn btn-primary" @click="editAccount">Edit</button>
  </form>
</template>


<script>
import { AppState } from "../AppState";
import { ref, watchEffect } from "vue";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { accountService } from "../services/AccountService";
export default {
  setup() {
    const editable = ref({});
    watchEffect(() => {
      editable.value = AppState.account;
    });
    return {
      editable,
      async editAccount() {
        try {
          await accountService.editAccount(editable.value);
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
    };
  },
};
</script>


<style scoped>
</style>