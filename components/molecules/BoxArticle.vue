<template>
    <div class="article-title">
      <h1 class="page-title pretty-shadow"><b>{{ title }}</b></h1>
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
  
  const colors = [
  '#2196f3',
  '#f43f5e',
  '#ec4899',
  '#d946ef',
  '#a855f7',
  '#8b5cf6',
  '#6366f1',
  '#3b82f6',
  '#0ea5e9',
  '#06b6d4',
  '#14b8a6',
  '#10b981',
  '#22c55e',
  '#84cc16',
  '#eab308',
  '#f59e0b',
  '#f97316',
  '#ef4444',
  ]

  let intervalId: NodeJS.Timeout; // Store the interval ID to clear it later

  onMounted(() => {
    document.body.style.setProperty('--background', '#3b82f6')
    intervalId = setInterval(() => {
      const color = colors[Math.floor(Math.random()*colors.length)]
      document.body.style.setProperty('--background', color)
    }, 3500)
  })

  onBeforeUnmount(() => {
    clearInterval(intervalId); // Clear the interval when component destroys
  })
 
  </script>
  
  <style lang="scss" scoped>
  .article-title {
    background-color: rgba($color: #ffffff, $alpha: 0.9); /* Example: Light white background */
    height: 100%;
    //width: 700px;
    padding: 2px; /* Add padding around the content */
    border-radius: 5px; /* Add rounded corners */
    text-align: left; /* Maintain existing text alignment */
    font-size: 0.8rem;
    font-weight: 100;
    transition: transform 1s ease-in-out; /* Transition for scale */
  }
  
  .page-title {
    background-color: var(--background); //aqua;
    color: rgba($color: #ffffff, $alpha: 1.0);
    border: var(--background); //2px solid aqua; /* Define border for the title */
    border-radius: 5px 5px 0 0; /* Top-left and top-right rounded corners */
    padding: 5px; /* Add padding within the title border */
    margin-bottom: 5px; /* Add some margin below the title */
  }

  .pretty-shadow {
    transition: 1s;
    text-shadow: -1px -1px 0px var(--background),
    1px 1px 0px var(--background),
    3px 3px 0px #000000d5;
  }
  
  .text-area {
    white-space: pre-wrap; /* Preserve line breaks */
    border: 2px solid var(--background); //aqua; /* Define border for the text area */
    border-radius: 0 0 5px 5px; /* Bottom-left and bottom-right rounded corners */
    padding: 5px; /* Add padding within the text area border */
    height: auto;
    background-color: transparent; /* Remove any background color */
    overflow: auto;
  }
  
  .corzinha {
    color: rgba($color: #292929, $alpha: 1.0);
  }

  
  /* Styles for narrower screens (e.g., mobile) */
  @media (max-width: 768px) {
    .article-title {
      width: 90%;
    }
    .page-title {
      text-align: center;
      font-size: 140%;
      width: 100%;
    }
    .text-area {
      width: 100%;
    }
  }
  </style>