import { ref, watch } from "vue";

const favorites = ref(JSON.parse(localStorage.getItem("favorites")) || []);

export function useFavorites() {

  const toggleFavorite = (recipe) => {
    const index = favorites.value.findIndex(r => r.id === recipe.id);

    if (index === -1) {
      favorites.value.push(recipe);
    } else {
      favorites.value.splice(index, 1);
    }
  };

  const isFavorite = (id) => {
    return favorites.value.some(r => r.id === id);
  };

  watch(favorites, () => {
    localStorage.setItem("favorites", JSON.stringify(favorites.value));
  }, { deep: true });

  return { favorites, toggleFavorite, isFavorite };
}
