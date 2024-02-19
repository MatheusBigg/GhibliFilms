<template>
    <div class="page-title">
        <h1>{{ text }} <b class="corzinha">{{ strong }}</b></h1>
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
        strong: {
            type: String,
            required: true
        }
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

</style>