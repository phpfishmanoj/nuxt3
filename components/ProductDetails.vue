<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="product.image" alt="product image" class="mx-auto my-7 cardimage">
            </div>
            <div class="p-7">
                <div class="float-right">
                    <NuxtLink to="/products" class="btn">Back</NuxtLink>
                </div>

                <h2 class="text-4xl my-7">{{ product.title }}</h2>
                <p class="text-xl my-7">Price - ${{ product.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
                <p>{{ product.description }}</p>
                <button class="btn flex">
                    <i class="material-icons mr-2">add_shopping_cart</i>
                    <span>Add to Cart</span>
                </button>
                {{ data }}
            </div>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(['product']);

//const { data } = await useFetch('/api/currencyApi');
const { data } = await useFetch('/api/currency/INR');


</script>

<style scoped>
img {
    max-width: 400px;

}
</style>