<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useCountdownStore } from "../stores/counter";

const store = useCountdownStore();
let timer = null;
const isLoaded = ref(false);

onMounted(() => {
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
  <div class="min-h-screen bg-gray-800 text-white font-sans">
    <!-- Main Content -->
    <div
      class="flex flex-col items-center justify-center min-h-screen px-4 relative"
    >
      <!-- Glow Effect -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full opacity-5 blur-[150px] transition-all duration-1000"
        :class="{
          'scale-110 opacity-5': isLoaded,
          'scale-90 opacity-0': !isLoaded,
        }"
      ></div>

      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex flex-col items-center justify-center gap-8">
          <img
            src="/WebsDee-logo.png"
            alt="Logo"
            class="w-auto transform transition-all duration-1000 ease-out breathing-logo"
            :class="{
              'translate-y-0 opacity-100': isLoaded,
              'translate-y-10 opacity-0': !isLoaded,
            }"
          />
          <p
            class="text-xl text-gray-400 text-center max-w-xl -mt-32 transform transition-all duration-1000 delay-200 ease-out"
            :class="{
              'translate-y-0 opacity-100': isLoaded,
              'translate-y-10 opacity-0': !isLoaded,
            }"
          >
            Something amazing is in the works! We're crafting something special
            and can't wait to share it with you.
          </p>
          <h1
            class="text-3xl md:text-4xl font-bold mb-20 tracking-[0.2em] relative text-center transform transition-all duration-1000 delay-400 ease-out"
            :class="{
              'translate-y-0 opacity-100': isLoaded,
              'translate-y-10 opacity-0': !isLoaded,
            }"
          >
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400"
            >
              COMING SOON
            </span>
          </h1>
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
            class="bg-[#111] w-20 md:w-24 h-20 md:h-24 rounded-xl flex items-center justify-center mb-2 relative overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.1)] group transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:-translate-y-1"
          >
            <div
              class="absolute inset-0 bg-gradient-to-b from-blue-400/10 to-transparent backdrop-blur-sm"
            ></div>
            <div
              class="text-3xl md:text-4xl font-bold text-blue-400 relative z-10 transition-all duration-300 group-hover:scale-110"
            >
              {{ store.days }}
            </div>
          </div>
          <div
            class="text-sm text-gray-400 uppercase tracking-wider font-medium"
          >
            Days
          </div>
        </div>

        <div class="flex flex-col items-center">
          <div
            class="bg-[#111] w-20 md:w-24 h-20 md:h-24 rounded-xl flex items-center justify-center mb-2 relative overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.1)] group transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:-translate-y-1"
          >
            <div
              class="absolute inset-0 bg-gradient-to-b from-blue-400/10 to-transparent backdrop-blur-sm"
            ></div>
            <div
              class="text-3xl md:text-4xl font-bold text-blue-400 relative z-10 transition-all duration-300 group-hover:scale-110"
            >
              {{ store.hours }}
            </div>
          </div>
          <div
            class="text-sm text-gray-400 uppercase tracking-wider font-medium"
          >
            Hours
          </div>
        </div>

        <div class="flex flex-col items-center">
          <div
            class="bg-[#111] w-20 md:w-24 h-20 md:h-24 rounded-xl flex items-center justify-center mb-2 relative overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.1)] group transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:-translate-y-1"
          >
            <div
              class="absolute inset-0 bg-gradient-to-b from-blue-400/10 to-transparent backdrop-blur-sm"
            ></div>
            <div
              class="text-3xl md:text-4xl font-bold text-blue-400 relative z-10 transition-all duration-300 group-hover:scale-110"
            >
              {{ store.minutes }}
            </div>
          </div>
          <div
            class="text-sm text-gray-400 uppercase tracking-wider font-medium"
          >
            Minutes
          </div>
        </div>

        <div class="flex flex-col items-center">
          <div
            class="bg-[#111] w-20 md:w-24 h-20 md:h-24 rounded-xl flex items-center justify-center mb-2 relative overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.1)] group transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:-translate-y-1"
          >
            <div
              class="absolute inset-0 bg-gradient-to-b from-blue-400/10 to-transparent backdrop-blur-sm"
            ></div>
            <div
              class="text-3xl md:text-4xl font-bold text-blue-400 relative z-10 transition-all duration-300 group-hover:scale-110 number-flip"
            >
              {{ store.seconds }}
            </div>
          </div>
          <div
            class="text-sm text-gray-400 uppercase tracking-wider font-medium"
          >
            Seconds
          </div>
        </div>
      </div>

      <!-- Animated arrow -->
      <div
        class="absolute bottom-10 transform transition-all duration-1000 delay-800 ease-out"
        :class="{
          'translate-y-0 opacity-100': isLoaded,
          'translate-y-10 opacity-0': !isLoaded,
        }"
      >
        <div class="bounce text-blue-400 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.text-glow {
  text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
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
.text-blue-400 {
  transition: all 0.3s ease;
}

/* Enhance box shadows for depth */
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Bounce animation for the arrow */
.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

/* Pulsing glow effect for the countdown timer boxes */
@keyframes pulse {
  0% {
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.1);
  }
  50% {
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
  }
  100% {
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.1);
  }
}

.group:hover {
  animation: pulse 2s infinite;
}

/* Breathing effect for logo */
.breathing-logo {
  animation: breathe 12s ease-in-out infinite;
}

@keyframes breathe {
  0% {
    transform: scale(1);
    filter: drop-shadow(0 0 0px rgba(59, 130, 246, 0.3));
  }
  50% {
    transform: scale(1.01);
    filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5));
  }
  100% {
    transform: scale(1);
    filter: drop-shadow(0 0 0px rgba(59, 130, 246, 0.3));
  }
}
</style>
