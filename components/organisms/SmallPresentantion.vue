<template>
    <div class="presentation">
        <p> {{ text }} </p>
        <img :src="require('@/assets/' + img_path)" alt="presentation">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        text: {
            type: String,
            required: true
        },
        img_path: {
            type: String,
            required: true
        }
    }
})
</script>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
}

</style>