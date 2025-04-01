<script setup>
import { onMounted, onUnmounted } from "vue";
import { useCountdownStore } from "../stores/counter";

const store = useCountdownStore();
let timer = null;

onMounted(() => {
  store.updateCountdown();
  timer = setInterval(() => {
    store.updateCountdown();
  }, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<template>
  <div class="min-h-screen bg-gray-500 text-white font-sans">
    <!-- Main Content -->
    <div
      class="flex flex-col items-center justify-center min-h-screen px-4 relative"
    >
      <!-- Glow Effect -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full opacity-5 blur-[150px]"
      ></div>

      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex flex-col items-center justify-center gap-8">
          <img src="/WebsDee-logo.png" alt="Logo" class="w-auto" />
          <p class="text-xl text-gray-400 text-center max-w-xl -mt-32">
            Something amazing is in the works! We're crafting something special
            and can't wait to share it with you.
          </p>
          <h1
            class="text-3xl md:text-4xl font-bold mb-20 tracking-[0.2em] relative text-center"
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
      <div class="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
        <div class="flex flex-col items-center">
          <div
            class="bg-[#111] w-20 md:w-24 h-20 md:h-24 rounded-xl flex items-center justify-center mb-2 relative overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.1)] group transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
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
            class="bg-[#111] w-20 md:w-24 h-20 md:h-24 rounded-xl flex items-center justify-center mb-2 relative overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.1)] group transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
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
            class="bg-[#111] w-20 md:w-24 h-20 md:h-24 rounded-xl flex items-center justify-center mb-2 relative overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.1)] group transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
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
            class="bg-[#111] w-20 md:w-24 h-20 md:h-24 rounded-xl flex items-center justify-center mb-2 relative overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.1)] group transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
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
    </div>
  </div>
</template>

<style scoped>
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
</style>
