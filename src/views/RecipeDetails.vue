<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import localRecipes from "@/data/localRecipe"
import Navbar from "@/components/NavbarComponent.vue"
import Footer from  "@/components/FooterComponent.vue"
import FooterComponent from "@/components/FooterComponent.vue"

const route = useRoute()
const recipeId = route.params.id

const recipe = ref(null)

const fetchRecipe = async () => {
  recipe.value = localRecipes.find(r => r.id === recipeId)

  if (!recipe.value) {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
    )
    const data = await res.json()

    if (data.meals && data.meals.length) {
      const meal = data.meals[0]

      // Dynamically parse ingredients
      const ingredients = []
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`]
        const measure = meal[`strMeasure${i}`]
        if (ingredient && ingredient.trim() !== "") {
          ingredients.push(`${measure ? measure + " " : ""}${ingredient}`)
        }
      }

      recipe.value = {
        id: meal.idMeal,
        title: meal.strMeal,
        category: meal.strCategory,
        ingredients,
        instructions: meal.strInstructions,
        image: meal.strMealThumb
      }
    }
  }
}

onMounted(fetchRecipe)
</script>

<template>
    <Navbar/>

    <div class="details_content main_container" v-if="recipe">
        <p class="title">Recipe Details</p>
        <h1>{{ recipe.title }}</h1>

        <div class="img">
            <img :src="recipe.image" :alt="recipe.title" class="recipe-img" />
        </div>

        <h3><span>Category:</span> {{ recipe.category }}</h3>

        <h4><span>Ingredients:</span></h4>
        <ul>
            <li v-for="ing in recipe.ingredients" :key="ing">{{ ing }}</li>
        </ul>

        <h4> <span>Instructions:</span></h4>
        <p>{{ recipe.instructions }}</p>

        <router-link to="/recipe">← Back to recipes</router-link>
    </div>

    <div v-else>
        Loading recipe...
    </div>

    <Footer/>
</template>
