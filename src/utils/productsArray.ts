export type Product = {
    id: number
    title: string
    capacity: string
    type: string
    price: number
    image: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 1000,
        image: '/images/Black.webp',
    },
    {
        id: 2,
        title: 'iPhone 13 Pro',
        type: 'phone',
        capacity: '128',
        price: 1000,
        image: '/images/Blue.webp',
    },
    {
        id: 3,
        title: 'iPhone XS',
        type: 'phone',
        capacity: '128',
        price: 500,
        image: '/images/gold.webp',
    },
    {
        id: 4,
        title: 'iPhone 11 Pro MAX',
        type: 'phone',
        capacity: '64',
        price: 1500,
        image: '/images/Purple.webp',
    },
    {
        id: 5,
        title: 'iPhone 10',
        type: 'phone',
        capacity: '128',
        price: 1000,
        image: '/images/Red.webp',
    },
    {
        id: 6,
        title: 'iPhone 9',
        type: 'phone',
        capacity: '64',
        price: 900,
        image: '/images/starlight.webp',
    },
]

// export const getProductsObject = (array: Product[]) =>
//     array.reduce(
//         (object, product) => ({
//             // ...object, - без спреда возвращается только 6й товар, т.к. ф-я прошла все итерации и вернула последний
//             // поэтому мы мерджим все итерации с помощью спред-оператора
//             ...object,
//             [product.id]: product,
//         }),
//         {}
//     )

export default productsArray
