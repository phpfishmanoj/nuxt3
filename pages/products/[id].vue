<template>
    <Head>
        <Title> Nuxt 3 Shopping Cart | {{ product.title }} | Product Details Page </Title>
        <Meta name="description" :content="product.description">
        </Meta>
    </Head>
    <div>
        <ProductDetails :product="product" />
    </div>
    <div>
        <NuxtLink to="/products" class="btn">Back</NuxtLink>
    </div>
</template>

<script setup>
const { id } = useRoute().params;

const uri = "https://fakestoreapi.com/products/" + id;

// //  fetch the product
const { data: product } = await useFetch(uri, { key: id });
if (!product.value) {
    //throw createError({ statusCode: 404, statusMessage: 'Product not found.', fatal: true }); // this will not force for brower error page
    throw createError({ statusCode: 404, statusMessage: 'Product not found.' });
}

// const route = useRoute();

// const { data: product, error } = await useAsyncData(route.path, async () => {
//     try {
//         const result = await $fetch(uri, { key: id })
//         return result;
//     } catch (e) {
//         // This will trigger an error page client side
//         showError({ message: 'Page not found....', statusCode: 404 })
//     }
// })

// if (error.value || product.value == null) {
//     // This will trigger an error page server side
//     throw createError({ message: 'Page not found.........', statusCode: 404, fatal: true })
// }

definePageMeta({
    layout: 'products'
});
</script>

<style scoped></style>