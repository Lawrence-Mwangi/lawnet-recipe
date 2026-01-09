<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const slides = [
  {
    image: new URL("../assets/images/hero.jpg", import.meta.url).href,
    title: "Lawnet Recipe",
    subtitle: "Discover delicious recipes from around the world"
  },
  {
    image: new URL("../assets/images/hero2.jpg", import.meta.url).href,
    title: "Cook With Passion",
    subtitle: "Simple ingredients, amazing meals"
  },
  {
    image: new URL("../assets/images/hero3.jpg", import.meta.url).href,
    title: "Smart Cooking",
    subtitle: "Search, save & cook smarter every day"
  }
]

const currentIndex = ref(0)
let interval = null

const startAutoSlide = () => {
  interval = setInterval(nextSlide, 6000)
}

const stopAutoSlide = () => {
  clearInterval(interval)
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.length) % slides.length
}

const goToSlide = (index) => {
  currentIndex.value = index
}

onMounted(startAutoSlide)
onUnmounted(stopAutoSlide)
</script>

<template>
  <section
    class="hero_container"
    @mouseenter="stopAutoSlide"
    @mouseleave="startAutoSlide"
  >
    <!-- Background slides -->
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="hero_bg"
      :class="{ active: index === currentIndex }"
      :style="{ backgroundImage: `url(${slide.image})` }"
    ></div>

    <!-- Content -->
    <div class="hero_content">
      <h1 class="title" :key="slides[currentIndex].title">
        {{ slides[currentIndex].title }}
      </h1>
      <p class="subtitle" :key="slides[currentIndex].subtitle">
        {{ slides[currentIndex].subtitle }}
      </p>
    </div>

    <!-- Navigation arrows -->
    <button class="nav prev" @click="prevSlide">❮</button>
    <button class="nav next" @click="nextSlide">❯</button>

    <!-- Dots -->
    <div class="dots">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </section>
</template>
