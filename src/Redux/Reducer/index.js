import { IProduct1 } from "../../Assets";

const data = {
    mainData: {
        product: [
            {
                id: 1,
                image: IProduct1,
                name: 'Baby Mini Macaroon Macaron Toples isi 50 Cookies Kue Kering',
                desc: 'Macaron adalah kue khas asal Perancis. Decookieshouse Macaroon dibuat dari tepung almond asli, dengan isian (filling) coklat ganache ya murah tapi RASA MAHAL & 100% HALAL',
                stock: 50,
                price: 125000,

            },
            {
                id: 2,
                image: IProduct1,
                name: 'Baby Mini Macaroon Macaron Toples isi 50 Cookies Kue Kering',
                desc: 'Macaron adalah kue khas asal Perancis. Decookieshouse Macaroon dibuat dari tepung almond asli, dengan isian (filling) coklat ganache ya murah tapi RASA MAHAL & 100% HALAL',
                stock: 50,
                price: 125000,

            },
            {
                id: 3,
                image: IProduct1,
                name: 'Baby Mini Macaroon Macaron Toples isi 50 Cookies Kue Kering',
                desc: 'Macaron adalah kue khas asal Perancis. Decookieshouse Macaroon dibuat dari tepung almond asli, dengan isian (filling) coklat ganache ya murah tapi RASA MAHAL & 100% HALAL',
                stock: 50,
                price: 125000,

            },
            {
                id: 4,
                image: IProduct1,
                name: 'Baby Mini Macaroon Macaron Toples isi 50 Cookies Kue Kering',
                desc: 'Macaron adalah kue khas asal Perancis. Decookieshouse Macaroon dibuat dari tepung almond asli, dengan isian (filling) coklat ganache ya murah tapi RASA MAHAL & 100% HALAL',
                stock: 50,
                price: 125000,

            }
        ],
        cart: []
    }
};

const mainReducer = (state = data, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default mainReducer;