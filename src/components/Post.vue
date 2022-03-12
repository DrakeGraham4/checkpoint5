<template>
    <div class="post ms-1 m-3 p-3">
     <div class="card">
  <div class="card-body">
      
    <h5 class="card-title text-start"><img :src="post.creator.picture" alt="" class="profile-img selectable m-2">{{post.creator.name}}</h5>
    <p class="card-text">{{post.body}}</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
  <img v-if="post.imgUrl !== ''" :src="post.imgUrl" class="card-img-bottom" alt="...">
</div>
    </div>
</template>




<script>
export default {
    props:{
        post: {
            type: Object,
            required: true
        },
    },
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

.profile-img{
    height: 50px;
    width: 50px;
}

.profile-img {
    
  transition: all 0.12s ease;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
}
.profile-img:hover {
  transform: scale(1.05);
  outline: 1px solid var(--bs-light);
  box-shadow: 0px 15px 10px rgba(0, 0, 0, 0.3);
}

</style>