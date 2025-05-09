import { defineStore } from "pinia";

export const useCountdownStore = defineStore("countdown", {
  state: () => ({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    targetDate: new Date("2026-04-20"), // Default target date, can be updated via component props
  }),
  getters: {
    timeLeft: (state) => {
      const now = new Date();
      const difference = state.targetDate - now;

      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        return {
          days: String(d).padStart(2, "0"),
          hours: String(h).padStart(2, "0"),
          minutes: String(m).padStart(2, "0"),
          seconds: String(s).padStart(2, "0"),
        };
      }

      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    },
  },
  actions: {
    updateCountdown() {
      const now = new Date();
      const difference = this.targetDate - now;

      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        this.days = String(d).padStart(2, "0");
        this.hours = String(h).padStart(2, "0");
        this.minutes = String(m).padStart(2, "0");
        this.seconds = String(s).padStart(2, "0");
      }
    },
    // Method to set target date (can be used from components)
    setTargetDate(newDate) {
      this.targetDate = new Date(newDate);
      this.updateCountdown();
    },
  },
});
