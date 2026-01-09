<script setup>
    import Navbar from "@/components/NavbarComponent.vue"
    import Footer from "@/components/FooterComponent.vue"
    import Hero from "@/views/HeroView.vue"
</script>

<template>
    <Navbar/>

    <div class="home_container main_container">
        <Hero/>

        <div class="home_content">
            <h1>Why choice Us</h1>

            <div class="home_infor">
                <div class="items">
                    <h3>Deliciously Diverse:</h3>
                    <p>Discover recipes for every taste, skill level, and occasion</p>
                </div>

                <div class="items">
                    <h3>Easy & Organized:</h3>
                    <p>Save favorites, plan meals, and access them anytime, hassle-free.</p>
                </div>

                <div class="items">
                    <h3>Personalized Inspiration:</h3>
                    <p>Get recommendations that match your style and cravings.</p>
                </div>
            </div>
        </div>

        <div class="home_links">
            <h1>About Us</h1>

            <div class="about_intro">
                <div class="img">
                    <img src="../assets//images/hero.jpg" alt="about Us">
                </div>

                <div class="about_infor">
                    <p>LawnNet Recipe is your go-to app for discovering, saving, and sharing delicious recipes.
                        From quick weeknight meals to gourmet creations, we make cooking simple, fun, and 
                        inspiring for everyone. Explore new flavors, organize your favorites,
                        and let your culinary creativity shine!
                    </p>

                    <button>
                        <router-link :to="{ name: 'about' }">Learn More ..</router-link>
                    </button>
                </div>
            </div>
        </div>

        <div class="home_call">
            <h1>Our Recipes Dishes</h1>
            <p>
                Looking for something delicious to cook? Use our search to find the perfect recipe,
                explore the full details including ingredients and cooking steps, and save your 
                favorites for easy access anytime. Start your culinary adventure now!
            </p>
            <button>
                <router-link :to="{ name: 'recipe' }">Our Recipe</router-link>
            </button>
        </div>
    </div>


    <Footer/>
</template>
