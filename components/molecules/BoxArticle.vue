<template>
    <div class="article-title" @mouseenter="showTextArea" @mouseleave="hideTextArea">
      <h1 class="page-title"><b>{{ title }}</b></h1>
      <div class="text-area" v-show="isTextAreaVisible">
        <b class="corzinha">{{ text }}</b>
      </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
})

const isTextAreaVisible = ref(false);

function showTextArea() {
  isTextAreaVisible.value = true;
}

function hideTextArea() {
  isTextAreaVisible.value = false;
}

</script>

<style lang="scss" scoped>
.article-title {
  background-color: rgba($color: #ffffff, $alpha: 0.9); /* Example: Light white background */
  height: auto;
  width: 700px;
  padding: 2px; /* Add padding around the content */
  border-radius: 5px; /* Add rounded corners */
  text-align: left; /* Maintain existing text alignment */
  font-size: 0.8rem;
  font-weight: 100;
  transition: transform 1s ease-in-out;
}

.page-title {
  border: 2px solid aqua; /* Define border for the title */
  border-radius: 5px 5px 0 0; /* Top-left and top-right rounded corners */
  padding: 5px; /* Add padding within the title border */
  margin-bottom: 5px; /* Add some margin below the title */
}

.text-area {
  border: 2px solid aqua; /* Define border for the text area */
  border-radius: 0 0 5px 5px; /* Bottom-left and bottom-right rounded corners */
  padding: 5px; /* Add padding within the text area border */
  background-color: transparent; /* Remove any background color */
  overflow: hidden;
  opacity: 0; /* Initially hide the text area */
  visibility: hidden; /* Initially hide the text area */
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out; /* Smooth transition for opacity and transform */
  transform: translateY(20px); /* Start slightly below to create slide-down effect */
}

.corzinha {
  color: rgba($color: #292929, $alpha: 1.0);
}

/* Hover effects */
.article-title:hover {
  transform: scale(1.1); /* Increase size on hover (adjust as desired) */
  /* Shine effect (adjust colors as desired) */
  box-shadow:
    0 0 3px rgba(255, 255, 255, 0.5),
    0 0 5px rgba(255, 255, 255, 0.3),
    0 0 7px rgba(255, 255, 255, 0.1);
}

.article-title:hover .text-area {
  opacity: 1; /* Show the text area on hover */
  visibility: visible; /* Show the text area on hover */
  /* Animate the text area appearance from bottom */
  transform: translateY(0); /* Start from bottom */
}

/* Styles for narrower screens (e.g., mobile) */
@media (max-width: 768px) {
    .page-title {
        text-align: center;
        font-size: 90%;
    }
}

</style>