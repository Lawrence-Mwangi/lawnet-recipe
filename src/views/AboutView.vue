<script setup>
  import Navbar from "@/components/NavbarComponent.vue"
  import Footer from "@/components/FooterComponent.vue"
</script>


<template>
   <Navbar/>

    <div className="about_container">
    <section className="about_hero">
        <h1>About Us</h1>
        <p>Discover the story behind your favorite recipe app and meet the team bringing it to life.</p>
        <img src="../assets//images/hero2.jpg" alt="Cooking Inspiration" />
    </section>

    <section className="about_history">
        <h2>Our Story</h2>
        <p>
        LawnNet Recipe started with a simple goal: to make cooking accessible, fun, and inspiring
        for everyone. Since our launch in 2024, we have grown into a vibrant community of food
        lovers, sharing recipes, tips, and culinary adventures.
        </p>
    </section>

    <section className="about_mission_vision">
        <div className="mission">
        <h2>Our Mission</h2>
        <p>To empower everyone to cook confidently and explore new flavors every day.</p>
        </div>
        <div className="vision">
        <h2>Our Vision</h2>
        <p>To be the go-to platform for culinary inspiration, helping people around the world enjoy food and cooking.</p>
        </div>
    </section>

    <section className="about_team">
        <h2>Meet Our Dedicated Chefs</h2>
        <div className="team_avatars">
        <div className="team_member">
            <img src="../assets/images/chef1.jpg" alt="Chef 1" />
            <h3>Chef Lawrence</h3>
            <p>Expert in Italian cuisine and healthy meals.</p>
        </div>
        <div className="team_member">
            <img src="../assets/images/chef1.jpg" alt="Chef 2" />
            <h3>Chef Alex</h3>
            <p>Specializes in desserts and baking inspiration.</p>
        </div>
        <div className="team_member">
            <img src="../assets/images/chef2.jpg" alt="Chef 3" />
            <h3>Chef Ann</h3>
            <p>Master of quick weeknight meals and comfort food.</p>
        </div>
        </div>
    </section>

    <section className="about_extra">
        <h2>Why We Stand Out</h2>
        <ul>
        <li>Curated recipes for all tastes and skill levels</li>
        <li>Easy saving, planning, and sharing of recipes</li>
        <li>Regular updates with seasonal and trending dishes</li>
        </ul>
    </section>
    </div>

  
  <Footer/>
</template>

