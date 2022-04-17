<template>
    <view class="content">
        <image class="logo" src="../../static/logo.png"></image>
        <view>
            <text class="title">{{ title }}</text>
        </view>
        <view>
            {{ count }}
        </view>
    </view>
</template>

<script lang="ts">
import {
    computed,
    defineComponent
} from 'vue'

import { useCounterStore } from '@/stores'

export default defineComponent({
    setup() {
        const storeCounter = useCounterStore()
        const count = computed(() => storeCounter.count)

        console.log(storeCounter)

        return {
            title: 'hello',
            count
        }
    },
});
</script>

<style>
.content {
    text-align: center;
    height: 400upx;
}

.logo {
    height: 200upx;
    width: 200upx;
    margin-top: 200upx;
}

.title {
    font-size: 36upx;
    color: #8f8f94;
}
</style>
