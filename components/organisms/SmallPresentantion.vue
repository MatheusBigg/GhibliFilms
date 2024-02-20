<template>
    <div class="presentation">
        <p> {{ text }} </p>
        <img :src="img_path" alt="presentation" class="img-presentation">
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
    },
//     computed: {
//     resolvedImgPath() {
//       return require(`@/assets/${this.img_path}`);
//     }
//   },
//     methods: {
//         logImgPath() {
//             console.log(this.img_path)
//         }
//     },
//     created () {
//         this.logImgPath()
//     }
})
</script>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-rows: repeat(2);
  grid-gap: 1rem;
  align-items: center;
  .img-presentation{
    width: 100%;
  }
}
</style>