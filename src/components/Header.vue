<template>
    <div class="flex justify-center bg-blue-950 text-white text-2xl py-2">
        <router-link :to="{ name: 'Home'}" class="mx-4">Home</router-link>  
        <router-link :to="{ name: 'About'}" class="mx-4">About</router-link>
        <router-link :to="{ name: 'Product'}" class="mx-4">Product</router-link>
    </div>
</template>