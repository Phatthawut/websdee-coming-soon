<script setup>
import { onMounted, onUnmounted, ref, defineProps } from "vue";
import { useCountdownStore } from "../stores/counter";

const props = defineProps({
  targetDate: {
    type: String,
    default: "2025-06-01", // Default target date
  },
  title: {
    type: String,
    default: "Launching Soon",
  },
  title2: {
    type: String,
    default: "M Hub — Your Online Marketing Solution",
  },
  thaiTitle1: {
    type: String,
    default: "เว็บสวย ใช้ง่าย",
  },
  thaiTitle2: {
    type: String,
    default: "กำลังจะเปิดให้ใช้!",
  },
  thaiSubtitle: {
    type: String,
    default: "มีไอเดียทำเว็บ? ทัก WebsDee มาได้เลย 😉",
  },
  subtitle: {
    type: String,
    default:
      "Something amazing is in the works! We're crafting something special and can't wait to share it with you.",
  },
  logoPath: {
    type: String,
    default: "/logo.png",
  },
  creditText: {
    type: String,
    default: "Powered by WebsDee",
  },
  socialLinks: {
    type: Array,
    default: () => [
      {
        icon: "facebook",
        url: "https://www.facebook.com/profile.php?id=61574082636368",
      },
      { icon: "email", url: "mailto:info@websdee.com" },
    ],
    // Each item should have: { icon: 'facebook|twitter|instagram|linkedin|youtube|github', url: 'https://...' }
  },
});

const store = useCountdownStore();
let timer = null;
const isLoaded = ref(false);

onMounted(() => {
  // Set the target date from props
  store.$patch({ targetDate: new Date(props.targetDate) });
  store.updateCountdown();
  timer = setInterval(() => {
    store.updateCountdown();
  }, 1000);

  // Trigger entrance animations after component is mounted
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<template>
  <div class="min-h-screen bg-[#0b1424] text-white font-thai">
    <!-- Main Content -->
    <div
      class="flex flex-col items-center justify-center min-h-screen px-4 relative"
    >
      <!-- Glow Effect -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#39c4b8] rounded-full opacity-5 blur-[150px] transition-all duration-1000"
        :class="{
          'scale-110 opacity-5': isLoaded,
          'scale-90 opacity-0': !isLoaded,
        }"
      ></div>

      <div class="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div class="flex flex-col items-center justify-center gap-4">
          <!-- Logo -->
          <img
            :src="logoPath"
            alt="Logo"
            class="w-32 h-32 transform transition-all duration-1000 ease-out breathing-logo"
            :class="{
              'translate-y-0 opacity-100': isLoaded,
              'translate-y-10 opacity-0': !isLoaded,
            }"
          />

          <!-- Thai Title -->
          <div
            class="flex flex-col items-center transform transition-all duration-1000 delay-200 ease-out"
            :class="{
              'translate-y-0 opacity-100': isLoaded,
              'translate-y-10 opacity-0': !isLoaded,
            }"
          >
            <h1 class="text-4xl md:text-5xl font-bold text-white text-center">
              {{ thaiTitle1 }}
            </h1>
            <h1
              class="text-4xl md:text-5xl font-bold text-white text-center mb-4"
            >
              {{ thaiTitle2 }}
            </h1>
          </div>

          <!-- English Subtitle -->
          <p
            class="text-base text-gray-300 text-center max-w-xl mb-2 transform transition-all duration-1000 delay-300 ease-out"
            :class="{
              'translate-y-0 opacity-100': isLoaded,
              'translate-y-10 opacity-0': !isLoaded,
            }"
          >
            {{ subtitle }}
          </p>

          <h2
            class="text-2xl md:text-3xl font-bold mb-12 tracking-[0.2em] relative text-center transform transition-all duration-1000 delay-400 ease-out"
            :class="{
              'translate-y-0 opacity-100': isLoaded,
              'translate-y-10 opacity-0': !isLoaded,
            }"
          >
            <p class="text-white uppercase">
              {{ title }}
            </p>
            <p class="text-white">
              {{ title2 }}
            </p>
          </h2>
        </div>
      </div>

      <!-- Countdown Timer -->
      <div
        class="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 transform transition-all duration-1000 delay-600 ease-out"
        :class="{
          'translate-y-0 opacity-100': isLoaded,
          'translate-y-10 opacity-0': !isLoaded,
        }"
      >
        <div class="flex flex-col items-center">
          <div
            class="bg-[#061020] w-20 md:w-24 h-20 md:h-24 rounded flex items-center justify-center mb-2 relative overflow-hidden shadow-lg border border-[#061020] group transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,196,184,0.3)]"
          >
            <div
              class="text-4xl md:text-5xl font-bold text-[#39c4b8] relative z-10 transition-all duration-300 group-hover:scale-110"
            >
              {{ store.days }}
            </div>
          </div>
          <div
            class="text-sm text-gray-400 uppercase tracking-wider font-medium"
          >
            DAYS
          </div>
        </div>

        <div class="flex flex-col items-center">
          <div
            class="bg-[#061020] w-20 md:w-24 h-20 md:h-24 rounded flex items-center justify-center mb-2 relative overflow-hidden shadow-lg border border-[#061020] group transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,196,184,0.3)]"
          >
            <div
              class="text-4xl md:text-5xl font-bold text-[#39c4b8] relative z-10 transition-all duration-300 group-hover:scale-110"
            >
              {{ store.hours }}
            </div>
          </div>
          <div
            class="text-sm text-gray-400 uppercase tracking-wider font-medium"
          >
            HOURS
          </div>
        </div>

        <div class="flex flex-col items-center">
          <div
            class="bg-[#061020] w-20 md:w-24 h-20 md:h-24 rounded flex items-center justify-center mb-2 relative overflow-hidden shadow-lg border border-[#061020] group transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,196,184,0.3)]"
          >
            <div
              class="text-4xl md:text-5xl font-bold text-[#39c4b8] relative z-10 transition-all duration-300 group-hover:scale-110"
            >
              {{ store.minutes }}
            </div>
          </div>
          <div
            class="text-sm text-gray-400 uppercase tracking-wider font-medium"
          >
            MINUTES
          </div>
        </div>

        <div class="flex flex-col items-center">
          <div
            class="bg-[#061020] w-20 md:w-24 h-20 md:h-24 rounded flex items-center justify-center mb-2 relative overflow-hidden shadow-lg border border-[#061020] group transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,196,184,0.3)]"
          >
            <div
              class="text-4xl md:text-5xl font-bold text-[#39c4b8] relative z-10 transition-all duration-300 group-hover:scale-110 number-flip"
            >
              {{ store.seconds }}
            </div>
          </div>
          <div
            class="text-sm text-gray-400 uppercase tracking-wider font-medium"
          >
            SECONDS
          </div>
        </div>
      </div>

      <!-- Thai Subtitle -->
      <div
        class="text-xl text-white text-center max-w-2xl mb-12 transform transition-all duration-1000 delay-700 ease-out"
        :class="{
          'translate-y-0 opacity-100': isLoaded,
          'translate-y-10 opacity-0': !isLoaded,
        }"
      >
        {{ thaiSubtitle }}
      </div>

      <!-- Social Media Icons (only displays if socialLinks are provided) -->
      <div
        v-if="socialLinks && socialLinks.length > 0"
        class="flex justify-center gap-6 mb-8 transform transition-all duration-1000 delay-700 ease-out"
        :class="{
          'translate-y-0 opacity-100': isLoaded,
          'translate-y-10 opacity-0': !isLoaded,
        }"
      >
        <a
          v-for="(link, index) in socialLinks"
          :key="index"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-[#39c4b8] transition-colors duration-300 transform hover:scale-110"
        >
          <!-- Facebook -->
          <svg
            v-if="link.icon === 'facebook'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
            />
          </svg>

          <!-- Twitter/X -->
          <svg
            v-else-if="link.icon === 'twitter'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
            />
          </svg>

          <!-- Instagram -->
          <svg
            v-else-if="link.icon === 'instagram'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            />
          </svg>

          <!-- LinkedIn -->
          <svg
            v-else-if="link.icon === 'linkedin'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
            />
          </svg>

          <!-- YouTube -->
          <svg
            v-else-if="link.icon === 'youtube'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
            />
          </svg>

          <!-- GitHub -->
          <svg
            v-else-if="link.icon === 'github'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>

          <!-- LINE -->
          <svg
            v-else-if="link.icon === 'line'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2C17.5141 2 22 5.6405 22 10.1152C22 11.9059 21.3056 13.5189 19.8565 15.1083H19.8569C17.7589 17.5229 13.0673 20.4642 12 20.914C10.9622 21.3513 11.0824 20.6672 11.1299 20.3969C11.1312 20.3892 11.1325 20.3819 11.1337 20.3749C11.1592 20.2245 11.2765 19.5188 11.2765 19.5188C11.3101 19.2634 11.345 18.8673 11.2441 18.6146C11.1321 18.3363 10.6888 18.1918 10.3632 18.1214C5.55755 17.4864 2 14.1267 2 10.1152C2 5.6405 6.48633 2 12 2ZM9.97218 7.95281H9.2631C9.15766 7.95281 9.07208 8.03839 9.07208 8.14374V12.508C9.07208 12.6135 9.15766 12.699 9.2631 12.699H9.97218C10.0777 12.699 10.1631 12.6135 10.1631 12.508V8.14374C10.1631 8.03839 10.0777 7.95281 9.97218 7.95281ZM8.47184 12.508C8.47184 12.6135 8.38636 12.6989 8.28091 12.6989H5.47142C5.36598 12.6989 5.2805 12.6135 5.2805 12.508V8.14381C5.2805 8.03836 5.36598 7.95288 5.47142 7.95288H6.18069C6.28566 7.95288 6.37152 8.03874 6.37152 8.14381V11.6079H8.28091C8.38589 11.6079 8.47184 11.6938 8.47184 11.7987V12.508ZM15.8637 12.6989H18.6732C18.7787 12.6989 18.8641 12.6135 18.8641 12.508V11.7987C18.8641 11.6938 18.7782 11.6079 18.6732 11.6079H16.7639V10.8715H18.6732C18.7787 10.8715 18.8641 10.786 18.8641 10.6805V9.97128C18.8641 9.8663 18.7782 9.78035 18.6732 9.78035H16.7639V9.0439H18.6732C18.7787 9.0439 18.8641 8.95842 18.8641 8.85297V8.14381C18.8641 8.03874 18.7782 7.95288 18.6732 7.95288H15.8637C15.7583 7.95288 15.6728 8.03836 15.6728 8.14381V12.508C15.6728 12.6135 15.7583 12.6989 15.8637 12.6989ZM14.091 7.95281H14.8001C14.9056 7.95281 14.9911 8.03839 14.9911 8.14374V12.508C14.9911 12.6135 14.9056 12.699 14.8001 12.699H14.0949C14.0776 12.699 14.0609 12.6964 14.045 12.6922L14.0437 12.692L14.0422 12.6916C14.0377 12.6903 14.0333 12.6888 14.029 12.6873L14.023 12.6851C14.0198 12.6839 14.0168 12.6826 14.0136 12.6811C14.0105 12.6797 14.0075 12.6782 14.0045 12.6766C14.0025 12.6757 14.0007 12.6746 13.9988 12.6736C13.9948 12.6713 13.9907 12.6689 13.9868 12.6663L13.9847 12.6648C13.966 12.6521 13.9492 12.6362 13.9354 12.6167L11.9361 9.91675V12.508C11.9361 12.6135 11.8506 12.699 11.7452 12.699H11.036C10.9306 12.699 10.8451 12.6135 10.8451 12.508V8.14374C10.8451 8.03839 10.9306 7.95281 11.036 7.95281H11.7412C11.7435 7.95281 11.7456 7.95309 11.7479 7.95318C11.7513 7.95328 11.7546 7.95337 11.758 7.95375L11.7683 7.95487L11.7764 7.95618L11.7877 7.95862L11.7946 7.9604C11.7985 7.96153 11.8023 7.96274 11.8062 7.96415L11.8124 7.9664C11.8161 7.9679 11.8199 7.96949 11.8235 7.97118L11.8296 7.97418C11.8332 7.97596 11.8367 7.97793 11.8401 7.97999L11.8459 7.98346C11.8495 7.9858 11.8529 7.98805 11.8561 7.9904L11.8613 7.99424C11.8649 7.99714 11.8682 8.00005 11.8716 8.00305L11.8752 8.00633C11.8792 8.01008 11.883 8.01411 11.8867 8.01823L11.8879 8.01964C11.8934 8.02583 11.8986 8.03239 11.9033 8.03932L13.9 10.7359V8.14374C13.9 8.03839 13.9855 7.95281 14.091 7.95281Z"
            />
          </svg>

          <!-- Email -->
          <svg
            v-else-if="link.icon === 'email'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"
            />
          </svg>
        </a>
      </div>

      <!-- Credit -->
      <div
        class="text-gray-400 text-sm mt-4 mb-8 transform transition-all duration-1000 delay-800 ease-out"
        :class="{
          'translate-y-0 opacity-100': isLoaded,
          'translate-y-10 opacity-0': !isLoaded,
        }"
      >
        {{ creditText }}
      </div>
    </div>
  </div>
</template>

<style>
.text-glow {
  text-shadow: 0 0 20px rgba(57, 196, 184, 0.5);
}

.number-flip {
  animation: flipIn 0.6s ease-out;
}

@keyframes flipIn {
  0% {
    transform: translateY(10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Add smooth transition for number changes */
.text-\[\#39c4b8\] {
  transition: all 0.3s ease;
}

/* Enhance box shadows for depth */
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2),
    0 4px 6px -2px rgba(0, 0, 0, 0.1);
}

/* Breathing effect for logo */
.breathing-logo {
  animation: breathe 12s ease-in-out infinite;
}

@keyframes breathe {
  0% {
    transform: scale(1);
    filter: drop-shadow(0 0 0px rgba(57, 196, 184, 0.3));
  }
  50% {
    transform: scale(1.05);
    filter: drop-shadow(0 0 20px rgba(57, 196, 184, 0.5));
  }
  100% {
    transform: scale(1);
    filter: drop-shadow(0 0 0px rgba(57, 196, 184, 0.3));
  }
}
</style>
