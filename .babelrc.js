module.exports = (api) => {
    api.cache(true)
    const presets = ['@babel/preset-react']
    return {
        presets
    }
}