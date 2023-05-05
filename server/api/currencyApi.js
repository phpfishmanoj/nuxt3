export default defineEventHandler(async (event) => {

    //api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=Q6glcnW2Yph5iJRJyy1zZ2O7hjdihXeJX2kP5KfR')

    return {
        data
    }

})
