<template>
    <div class="article-title" @mouseenter="scaleUp" @mouseleave="scaleDown">
      <h1 class="page-title"><b>{{ title }}</b></h1>
      <div class="text-area">
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
  
  function scaleUp(this: any) {
    // Add class to apply scaling effect
    this.$el.classList.add('hovered');
  }
  
  function scaleDown(this: any) {
    // Remove class to remove scaling effect
    this.$el.classList.remove('hovered');
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
    transition: transform 1s ease-in-out; /* Transition for scale */
  }
  
  .page-title {
    border: 2px solid aqua; /* Define border for the title */
    border-radius: 5px 5px 0 0; /* Top-left and top-right rounded corners */
    padding: 5px; /* Add padding within the title border */
    margin-bottom: 5px; /* Add some margin below the title */
  }
  
  .text-area {
    white-space: pre-wrap; /* Preserve line breaks */
    border: 2px solid aqua; /* Define border for the text area */
    border-radius: 0 0 5px 5px; /* Bottom-left and bottom-right rounded corners */
    padding: 5px; /* Add padding within the text area border */
    height: auto;
    background-color: transparent; /* Remove any background color */
    overflow: auto;
  }
  
  .corzinha {
    color: rgba($color: #292929, $alpha: 1.0);
  }
  
  /* Hover effect for scaling */
  .article-title:hover,
  .article-title.hovered { /* Target both hover and class-based scaling */
    transform: scale(1.1); /* Increase size on hover (adjust as desired) */
  }
  
  /* Styles for narrower screens (e.g., mobile) */
  @media (max-width: 768px) {
    .page-title {
      text-align: center;
      font-size: 90%;
    }
  }
  </style>