<template>
  <div>
    <!-- Example 1: Using with default values -->
    <h2>Example 1: Default Values</h2>
    <HomeView />

    <!-- Example 2: Using with custom values and social icons -->
    <h2>Example 2: Custom Values with Social Icons</h2>
    <HomeView
      targetDate="2024-12-31"
      title="LAUNCHING SOON"
      subtitle="Our awesome new product will be available soon. Stay tuned!"
      logoPath="/custom-logo.png"
      :socialLinks="[
        { icon: 'facebook', url: 'https://facebook.com/yourpage' },
        { icon: 'twitter', url: 'https://twitter.com/yourhandle' },
        { icon: 'instagram', url: 'https://instagram.com/yourprofile' },
        { icon: 'line', url: 'https://line.me/ti/p/yourhandle' },
        { icon: 'email', url: 'mailto:contact@yourdomain.com' },
      ]"
    />
  </div>
</template>

<script setup>
import HomeView from "../views/HomeView.vue";
</script>

<style scoped>
h2 {
  padding: 20px;
  background-color: #1f2937;
  color: white;
  margin: 20px 0;
}
</style>
