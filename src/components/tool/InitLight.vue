<template>
    <div class="btn">
        <div class="wrap">
            <slot name="wall"></slot>
            <slot name="back"></slot>
            <slot name="simple"></slot>
            <slot name="complex"></slot>
            <slot name="hideSimple"></slot>
            <slot name="showSimple"></slot>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .btn{
        min-width: 19px;
        min-height: 19px;
        width: 38px;
        height: 38px;
        padding: 0;
        margin: 0;
        display: block !important;

        position: fixed;
        left: 0;
        top: 94px;
        background-color:transparent;
        .wrap{
            position: relative;
            width: 100%;
            height: 100%;
        }
    }
</style>