<script setup>
import { useFavorites } from "@/data/favourite";
import Navbar from "@/components/NavbarComponent.vue"
import Footer from "@/components/FooterComponent.vue"

const { favorites } = useFavorites();
</script>

<template>
    <Navbar/>
  <div class="favourite_container main_container">
    <h1> Favorite Recipes</h1>

    <p>Here we list all the recipe you have added to the favourites</p>

    <div class="favourite_content">
        <p v-if="favorites.length === 0">No favorites added yet.</p>

        <div v-for="recipe in favorites" :key="recipe.id">
        <h3>{{ recipe.title }}</h3>
        
        <img :src="recipe.image" width="200"/>

        <router-link :to="`/recipe/${recipe.id}`" class="details-button">
            View Details
        </router-link>
        </div>
    </div>
    
  </div>

  <Footer/>
</template>
