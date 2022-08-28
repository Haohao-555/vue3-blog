<template>
   <div class="banner">
    <div class="banner-container">
        <p class="shining">用尽一切奔向你</p>
    </div>
   </div>
</template>
<script setup>
import {} from 'vue'
</script>
<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Lato);
.banner {
  @media screen and (min-width: 970px) {
    height: 200px;
  }
  @media screen and (max-width: 750px) {
    height: 200px;
  }

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.shining {
  font-size: 2em;
  font-family: Lato, sans-serif;
  letter-spacing: 4px;
  text-transform: uppercase;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  background-size: 80%;
  background-repeat: no-repeat;
  // below two lines create text gradient effect
  color: transparent;
  background-clip: text;
  animation: shining 3s linear infinite;
}

@keyframes shining {
  from {
    background-position: -500%;
  }
  to {
    background-position: 500%;
  }
}
</style>
