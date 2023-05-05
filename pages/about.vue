<template>
    <div>
        <h1>About</h1>
    </div>
    <div>{{ data }}</div>
</template>
<script setup>
const { data } = await useFetch('/api/ninja?name=Maria', {
    method: 'post',
    body: { age: 30 }
});
console.log(data);
</script>
<style scoped></style>