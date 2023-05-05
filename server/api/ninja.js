export default defineEventHandler(async (event) => {

    //handle query params
    const { name } = getQuery(event);

    //handle post data
    const { age } = await readBody(event);

    //api call with private key
    //Q6glcnW2Yph5iJRJyy1zZ2O7hjdihXeJX2kP5KfR
    //const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=Q6glcnW2Yph5iJRJyy1zZ2O7hjdihXeJX2kP5KfR')

    return {
        message: `I am from API Call My Name is: ${name}! You are ${age} Year old`,
    }
})