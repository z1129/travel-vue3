<template>
    <div>
        <div v-for="(item,index) in categoryList" :key="index" class="list-item">
            <i class="iconfont icon-jiantouarrow483"></i>
            {{item.title}}
            <div v-show="item.children">
                <detail-list :categoryList="item.children" class="item-child"></detail-list>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "DetailList",
    props: {
        categoryList: Array
    }
}
</script>

<style lang="stylus" scoped>
.list-item
    padding 0 .2rem
    .item-child
        padding 0 .2rem
</style>