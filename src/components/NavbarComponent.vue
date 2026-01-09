<script setup>
import infor from "@/systeminfor"
import { ref } from "vue"

const isResponsive = ref(false)

const toggleMenu = () => {
  isResponsive.value = !isResponsive.value
}

const closeMenu = () => {
  isResponsive.value = false
}
</script>

<template>
  <div class="navbar_container main_container">
    <div class="navbar_content">
      <img src="../assets/images/logo.png" :alt="infor.name" />
      <router-link :to="{ name: 'home' }" class="no-underline">
        {{ infor.name }}
      </router-link>
    </div>

    <div class="navbar_links" :class="{ responsive: isResponsive }">
      <ul :class="{ show: isResponsive }">
        <li>
          <router-link :to="{ name: 'about' }" @click="closeMenu">
            About
          </router-link>
        </li>

        <li>
          <router-link :to="{ name: 'recipe' }" @click="closeMenu">
            Recipe
          </router-link>
        </li>

        <li>
          <router-link :to="{ name: 'contact' }" @click="closeMenu">
            Contact
          </router-link>
        </li>
        <li>
          <router-link to="/favorites">
            Favorites
          </router-link>

        </li>
      </ul>
    </div>

    <div class="burger" @click="toggleMenu" :class="{ active: isResponsive }">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
