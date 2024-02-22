<template>
    <div class="presentation">
        <p> {{ text }} </p>
        <img :src="img_path" alt="presentation" class="img-presentation" /> 
        <!-- require(`${img_path}`) -->
        <button @click="showImgPath">Ver caminho da imagem</button>
    </div>
</template>

<script setup lang="ts">
const showImgPath = () => {
      console.log(`Caminho da imagem: ${props.img_path}`);
    }
const props = defineProps({
        text: {
            type: String,
            required: true
        },
        img_path: {
            type: String,
            required: true
        },
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