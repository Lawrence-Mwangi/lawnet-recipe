<script setup>
    import Navbar from "@/components/NavbarComponent.vue"
    import Footer from "@/components/FooterComponent.vue"
    import { ref } from "vue"
    import Infor from "@/systeminfor"

    const name = ref("")
    const email = ref("")
    const contact = ref("")
    const message = ref("")
   
    const whatsappNumber = "254799509242"

    const sendWhatsApp = () => {
    if (!name.value || !email.value || !contact.value || !message.value) {
        alert("Please fill in all fields before sending!")
        return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address!")
        return
    }

    const text = `Hello, my name is ${name.value}. Contact: ${contact.value}. Message: ${message.value}`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
    }
</script>

<template>
    <Navbar/>

    <div class="contact_container main_container">
        <h1>Request a Recipe</h1>

        <div class="contact_infor">
            <div class="contact_content">
                <p class="contact_item">
                    <img src="../assets/images/gmail.png" alt="email icon" width="25px" height="25px"> 
                    {{ Infor.email }}
                </p>
                
                <p class="contact_item">
                    <img src="../assets/images/phone.png" alt="email icon" width="25px" height="25px">
                     {{ Infor.phone }}
                </p>
            </div>

            <div class="contact_form">
                <input v-model="name" placeholder="Example: Lawnet Recipe">
                <input v-model="email" placeholder="Example: infor@lawnetrecipe.com">
                <input v-model="contact" placeholder="Example: 0712345678">
                <textarea v-model="message" placeholder="Example: Create this recipe for me"></textarea>
                <button @click="sendWhatsApp">Send via WhatsApp</button>
            </div>
        </div>
    </div>

    <Footer/>
</template>