import { GET_ALL_PRODUCT, ADD_TO_CART } from "../types/productType";

const initialState = {
    products: [
        {id:1, image: "https://picsum.photos/id/35/200/200", name: 'Iphone 6', price: '1000', description: 'Iphone 6 2015'},
        {id:2, image: "https://picsum.photos/id/36/200/200", name: 'Iphone 10', price: '1100', description: 'Iphone 6 2015'},
        {id:3, image: "https://picsum.photos/id/37/200/200", name: 'Iphone 13', price: '1200', description: 'Iphone 6 2015'},
        {id:4, image: "https://picsum.photos/id/38/200/200", name: 'Samsung galaxy note 10', price: '2000', description: 'Iphone 6 2015'},
        {id:5, image: "https://picsum.photos/id/39/200/200", name: 'Oppo 7s', price: '800', description: 'Iphone 6 2015'},
        {id:6, image: "https://picsum.photos/id/40/200/200", name: 'Nokia k3', price: '700', description: 'Iphone 6 2015'},
        {id:7, image: "https://picsum.photos/id/41/200/200", name: 'Nokia A4', price: '500', description: 'Iphone 6 2015'},
        {id:8, image: "https://picsum.photos/id/42/200/200", name: 'Samsung A70', price: '600', description: 'Iphone 6 2015'},
        {id:9, image: "https://picsum.photos/id/43/200/200", name: 'Asus rog', price: '100', description: 'Iphone 6 2015'},
        {id:10, image: "https://picsum.photos/id/44/200/200", name: 'Lenovo pro', price: '10', description: 'Iphone 6 2015'},
    ],
    carts: [
        {id:1, image: "https://picsum.photos/id/35/200/200", name: 'Iphone 6', price: '1000', description: 'Iphone 6 2015', quantity: 1},        
    ]
}

const ProductCartReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_TO_CART: {
            let cartList = [...state.carts];
            let cart = cartList.find(s=>s.id === payload.id);
            if(cart){
                cart.quantity=cart.quantity+1;
            }else {
                payload = {...payload, quantity: 1};
                console.log("payload: ", payload);
                cartList.push(payload);
            }
            console.log("redux: ", cartList);
            return {...state, carts:cartList};
        }

    default:
        return state
    }
}

export default ProductCartReducer;
