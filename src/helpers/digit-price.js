const digitPrice = (price) => {
    if (price === null) {
        return ''
    }
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

export default digitPrice