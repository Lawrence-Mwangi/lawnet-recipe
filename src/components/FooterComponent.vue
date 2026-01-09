<script setup>
    // import { ref } from 'vue'
    import infor from "@/systeminfor"

    //upadating the year
    const currentYear = new Date().getFullYear()
</script>

<template>
    <div class="footer_container main_container">
        <div class="footer_content">
            <div class="footer_infor">
                <h1>{{ infor.name }}</h1>
                <p>{{ infor.tagline }}</p>
                <p>{{  infor.email }}</p>
                <p>{{ infor.phone }}</p>
                <p>{{ infor.address }}</p>
            </div>

            <div class="footer_links">
                <h3>Links</h3>
                <li><RouterLink to="/about">About</RouterLink></li>
                <li><RouterLink to="/recipe">Recipe</RouterLink></li>
                <li><RouterLink to="/contact">Contact</RouterLink></li>
            </div>

            <div class="footer_social">
                <h3>Social account</h3>

                <div class="socials">
                    <li>
                        <a :href="infor.social.tiktok" target="_blank">
                            <img src="../assets/images/tik-tok.png" alt="tiktok" width="35px" height="35px">
                        </a>
                    </li>

                    <li>
                        <a :href="infor.social.tiktok" target="_blank">
                            <img src="../assets/images/youtube.png" alt="youtube" width="35px" height="35px">
                        </a>
                    </li>
                    
                    <li>
                        <a :href="infor.social.tiktok" target="_blank">
                            <img src="../assets/images/instagram.png" alt="Instagram" width="35px" height="35px">
                        </a>
                    </li>
                </div>
            </div>
        </div>
        <br>
        <hr>
        <div class="copyright">
          <p> &copy; {{ currentYear }} | Lawnet Recipe. | All rights reserved.</p>
        </div>
    </div>
</template>