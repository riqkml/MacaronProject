export const idrCurrency = (bilangan) => {

    let number_string = bilangan.toString()
    let sisa = number_string.length % 3
    let rupiah = number_string.substr(0, sisa)
    let ribuan = number_string.substr(sisa).match(/\d{3}/g)

    if (ribuan) {
        let separator = sisa ? '.' : ''
        rupiah += separator + ribuan.join('.')
    }
    return `Rp ${rupiah}`
}