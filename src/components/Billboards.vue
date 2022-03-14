
<template>
    <div class="row">
        <div class="col-3">
            <img :src="billboards[0].banner" alt=""/>
        </div>
        <div v-if="billboards[0].banner != null" class="col-3">
            <img :src="billboards[1].banner" alt=""/>
        </div>

    </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
export default {
    name: 'billboards',
    setup(){
        return {
            billboards: computed(() => AppState.billboards)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>