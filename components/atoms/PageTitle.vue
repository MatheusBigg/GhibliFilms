<template>
    <div class="page-title">
        <h1>{{ text }} <b class="corzinha">{{ strong }}</b></h1>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
        text: {
            type: String,
            required: true
        },
        strong: {
            type: String,
            required: true
        }
})
</script>

<style lang="scss" scoped>
.page-title {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 300;
  .corzinha {
      color: rgba($color: #292929, $alpha: 1.0);
  }
}

/* Styles for narrower screens (e.g., mobile) */
@media (max-width: 768px) {
    .page-title {
        text-align: center;
        font-size: 90%;
    }
}

</style>