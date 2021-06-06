import {
    IProduct1,
    ILilac,
    IBabyPink,
    IProductIsi48,
    IProductIsi6,
    IRainbowMacaron,
    ISweetMacaron,
    IMacaronTigaRasa,
} from "../../Assets";

const data = {
    product: [
        {
            id: 1,
            image: IProduct1,
            name: 'Baby Mini Macaroon Macaron Toples isi 50 Cookies Kue Kering',
            desc: 'Macaron adalah kue khas asal Perancis. Decookieshouse Macaroon dibuat dari tepung almond asli, dengan isian (filling) coklat ganache ya murah tapi RASA MAHAL & 100% HALAL',
            stock: 50,
            price: 65000,

        },
        {
            id: 2,
            image: ILilac,
            name: 'Lavender Lilac Macaron',
            desc: 'Makaroni lavender dengan sentuhan lemon diisi dengan krim mentega madu lemon ringan. Ini adalah makanan penutup Prancis yang rasanya luar biasa!',
            stock: 12,
            price: 95000,

        },
        {
            id: 3,
            image: IProductIsi48,
            name: 'Macaron Isi 48',
            desc: 'Varian Macaron dengan isi 48',
            stock: 30,
            price: 205000,

        },
        {
            id: 4,
            image: IBabyPink,
            name: 'Macaron Baby Pink',
            desc: 'Macaron warna pink muda dengan rasa yang manis serta gurih',
            stock: 82,
            price: 15000,

        },
        {
            id: 5,
            image: IProductIsi6,
            name: 'Macaron Isi 6',
            desc: 'Varian Macaron dengan isi 6',
            stock: 17,
            price: 35000,

        },
        {
            id: 6,
            image: IRainbowMacaron,
            name: 'Rainbow Macaron',
            desc: 'Varian Macaron dengan motif pelangi hadir untuk jadi cemilanmu',
            stock: 44,
            price: 17000,

        },
        {
            id: 7,
            image: ISweetMacaron,
            name: 'Sweet Macaron',
            desc: 'Macaron dengan rasa manis yang ekstra, membuat rasa macaron menjadi terasa lebih beda',
            stock: 21,
            price: 22000,

        },
        {
            id: 6,
            image: IMacaronTigaRasa,
            name: 'Macaron 3 rasa',
            desc: 'Bagaimana jika mencoba macaron dengan varian 3 rasa yang menakjubkan',
            stock: 102,
            price: 24000,

        }
    ],
    cart: [],
    transaction: [],
    user: {
        id: 'athia',
        pw: 'athia',
        email: 'athia@gmail.com',
        telepon: '087759469363',
        umur: '22',
        gender: 'Wanita'

    },
    isLogin: false
};

const mainReducer = (state = data, action) => {
    switch (action.type) {
        case 'ADD-CART':
            return {
                ...state,
                cart: action.data
            }
        case 'ADD-TRANSACTION':
            return {
                ...state,
                transaction: action.data
            }
        case 'USER':
            return {
                ...state,
                isLogin: action.data
            }
        default:
            return state;
    }
};

export default mainReducer;