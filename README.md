# Coming Soon Page Component

A reusable, customizable coming soon page built with Vue 3 and Pinia.

## Features

- Responsive design with clean UI
- Animated countdown timer
- Customizable target date, title, subtitle and logo
- Optional social media icons integration
- Smooth animations and transitions
- Easy to integrate into any Vue project

## How to Use in Other Projects

### Option 1: Use as a standalone page

1. Copy the following files to your project:

   - `src/views/HomeView.vue`
   - `src/stores/counter.js`

2. Make sure you have the following dependencies installed:

   - Vue 3
   - Pinia
   - TailwindCSS (or copy the required CSS styles from the component)

3. Set up a route to the component in your router:

```js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/coming-soon",
      name: "coming-soon",
      component: HomeView,
      props: {
        targetDate: "2025-06-01", // Your custom target date
        title: "LAUNCHING SOON", // Your custom title
        subtitle: "Your custom subtitle message here", // Your custom subtitle
        logoPath: "/your-logo.png", // Path to your logo
        socialLinks: [
          { icon: "facebook", url: "https://facebook.com/yourpage" },
          { icon: "twitter", url: "https://twitter.com/yourhandle" },
          { icon: "line", url: "https://line.me/ti/p/yourhandle" },
          { icon: "email", url: "mailto:contact@yourdomain.com" },
        ], // Leave empty array or omit if not needed
      },
    },
  ],
});

export default router;
```

### Option 2: Import as a component

1. Copy the same files as in Option 1.

2. Import and use the component in any Vue component:

```vue
<template>
  <div>
    <HomeView
      targetDate="2025-06-01"
      title="LAUNCHING SOON"
      subtitle="Your project is launching soon!"
      logoPath="/your-logo.png"
      :socialLinks="[
        { icon: 'facebook', url: 'https://facebook.com/yourpage' },
        { icon: 'twitter', url: 'https://twitter.com/yourhandle' },
        { icon: 'line', url: 'https://line.me/ti/p/yourhandle' },
        { icon: 'email', url: 'mailto:contact@yourdomain.com' },
      ]"
    />
  </div>
</template>

<script setup>
import HomeView from "./path/to/HomeView.vue";
</script>
```

## Component Props

| Prop        | Type   | Default                | Description                                            |
| ----------- | ------ | ---------------------- | ------------------------------------------------------ |
| targetDate  | String | "2025-06-01"           | The target date for the countdown in format YYYY-MM-DD |
| title       | String | "LAUNCHING SOON"       | The main title displayed on the page                   |
| subtitle    | String | "Something amazing..." | The subtitle or description text                       |
| logoPath    | String | "/logo.png"            | Path to the logo image file                            |
| socialLinks | Array  | []                     | Array of social media links with icons (see below)     |

### Social Links Format

The `socialLinks` prop accepts an array of objects with the following structure:

```js
[
  { icon: "facebook", url: "https://facebook.com/yourpage" },
  { icon: "twitter", url: "https://twitter.com/yourhandle" },
  { icon: "instagram", url: "https://instagram.com/yourprofile" },
  { icon: "linkedin", url: "https://linkedin.com/in/yourprofile" },
  { icon: "youtube", url: "https://youtube.com/yourchannel" },
  { icon: "github", url: "https://github.com/yourrepo" },
  { icon: "line", url: "https://line.me/ti/p/yourhandle" },
  { icon: "email", url: "mailto:contact@yourdomain.com" },
];
```

Supported icon types:

- `facebook`
- `twitter`
- `instagram`
- `linkedin`
- `youtube`
- `github`
- `line`
- `email` (use with mailto: links)

If the `socialLinks` array is empty or not provided, no social icons will be displayed.

## Customization

You can further customize the component by editing the styles in the `<style>` section of the HomeView.vue file. The component uses TailwindCSS classes for styling, but you can modify these or add your own CSS as needed.

## Requirements

- Vue 3
- Pinia state management
- Vue Router (if using as a route)
- A logo image file

## License

This component is available for use in any personal or commercial projects.
