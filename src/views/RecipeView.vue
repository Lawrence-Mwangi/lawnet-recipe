<script setup>
import Navbar from "@/components/NavbarComponent.vue"
import Footer from "@/components/FooterComponent.vue"
import { ref, computed, onMounted, watch } from "vue"
import localRecipes from "@/data/localRecipe";
import { useFavorites } from "@/data/favourite";


const localRecipe = ref(localRecipes)
const searchQuery = ref("")
const selectedCategory = ref("All")
const apiCategories = ref([])
const ApiRecipe = ref([])
const loading = ref(false)

// Combined recipes (local + API)
const allRecipes = ref([...localRecipe.value, ...ApiRecipe.value])

// ----------- FETCH API RECIPES -----------
const fetchApiRecipe = async (query = "") => {
  loading.value = true
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
  const data = await res.json()

  ApiRecipe.value = (data.meals || []).map(meal => ({
    id: meal.idMeal,
    title: meal.strMeal || "",
    category: meal.strCategory || "Unknown",
    image: meal.strMealThumb || ""
  }))

  updateAllRecipes()
  loading.value = false
}

// Merge local + API recipes
const updateAllRecipes = () => {
  allRecipes.value = [...localRecipe.value, ...ApiRecipe.value]
}

// Fetch categories for filter
const fetchCategories = async () => {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  const data = await res.json()
  apiCategories.value = data.categories.map(c => c.strCategory)
}

// Fetch recipes by category
const fetchByCategory = async (category) => {
  if (category === "All") {
    fetchApiRecipe()
    return
  }

  loading.value = true
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  const data = await res.json()

  ApiRecipe.value = (data.meals || []).map(meal => ({
    id: meal.idMeal,
    title: meal.strMeal,
    category,
    image: meal.strMealThumb || ""
  }))

  updateAllRecipes()
  loading.value = false
}

// Handle category click
const handleCategoryClick = (cat) => {
  selectedCategory.value = cat
  fetchByCategory(cat)
}

// --------- SEARCH ----------
watch(searchQuery, (query) => {
  clearTimeout(window._searchTimeout)
  window._searchTimeout = setTimeout(() => {
    fetchApiRecipe(query.trim())
  }, 300)
})

const categories = computed(() => ["All", ...new Set(apiCategories.value)])

const FilteredRecipe = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  return allRecipes.value.filter(recipe => {
    if (!recipe || !recipe.title) return false

    const matchesCategory =
      selectedCategory.value === "All" ||
      recipe.category.toLowerCase() === selectedCategory.value.toLowerCase()

    const matchesSearch =
      query === "" || recipe.title.toLowerCase().includes(query)

    return matchesCategory && matchesSearch
  })
})

onMounted(() => {
  fetchApiRecipe()
  fetchCategories()
})


const props = defineProps({
  recipe: Object
});

const { toggleFavorite, isFavorite } = useFavorites();

</script>

<template>
  <Navbar />

  <div class="recipe_container main_container">
    <div class="title">
      <h1>Our Recipe Dishes</h1>
    </div>

    <div class="search_content">
      <input
        type="text"
        placeholder="Type to search recipes..."
        v-model="searchQuery"
        class="search"
      />
    </div>

    <div class="category">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="handleCategoryClick(cat)"
        :class="{ active: selectedCategory === cat }"
      >
        {{ cat }}
      </button>
    </div>

    <!-- RECIPES -->
    <div class="recipe_content">
      <div v-if="loading">Loading recipes...</div>

      <div
        class="recipe"
        v-for="recipe in FilteredRecipe"
        :key="recipe.id"
      >
        <img :src="recipe.image" :alt="recipe.title" class="recipe-img" />

        <div class="recipe_items">
          <h3>{{ recipe.title }}</h3>

          <button class="fav-btn" @click="toggleFavorite(recipe)">
            <i 
              :class="isFavorite(recipe.id) ? 'fas fa-heart' : 'far fa-heart'">
            </i>
          </button>
        </div>


        <router-link :to="`/recipe/${recipe.id}`" class="details-button">
          View Details
        </router-link>
      </div>

      <div v-if="!loading && FilteredRecipe.length === 0">
        No recipes found.
      </div>
    </div>
  </div>

  <Footer />
</template>

<!-- <style scoped>
.recipe_content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
.recipe-img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}
.details-button {
  display: inline-block;
  margin-top: 8px;
  padding: 6px 12px;
  background-color: #ff6600;
  color: white;
  border-radius: 6px;
  text-decoration: none;
}
button.active {
  background-color: #ff6600;
  color: white;
}
</style> -->
