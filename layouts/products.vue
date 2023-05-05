<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <NuxtLink to="/products" class="font-bold">My Site Products</NuxtLink>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <nav class="flex gap-4">
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products/">Product</NuxtLink>
                    </li>
                    <!-- <li>
                        <NuxtLink to="/products/123">Product Details</NuxtLink>
                    </li> -->
                </ul>
            </nav>
        </footer>
    </div>
</template>
<script setup>
</script>
<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>