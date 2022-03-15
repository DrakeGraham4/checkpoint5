
<template>
    
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