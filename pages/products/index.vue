<template>
    <div>
        <h1>Product page</h1>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
});

const { data: products } = await useFetch('https://fakestoreapi.com/products');

//console.log(products);

useHead({
    title: 'Nuxt 3 Shopping Cart | Product display',
    meta: [
        { name: 'description', content: 'Nuxt 3 Shopping Cart | Product display' }
    ]
})

</script>

<style scoped></style>