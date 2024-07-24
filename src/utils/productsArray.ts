import blackWebp from 'assets/images/Black.webp'
import blueWebp from 'assets/images/Blue.webp'
import purpleWebp from 'assets/images/Purple.webp'
import redWebp from 'assets/images/Red.webp'
import goldWebp from 'assets/images/gold.webp'
import starlightWebp from 'assets/images/starlight.webp'

export type Product = {
    id: number
    title: string
    capacity: string
    type: string
    price: number
    image: any
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 1000,
        image: blackWebp,
    },
    {
        id: 2,
        title: 'iPhone 13 Pro',
        type: 'phone',
        capacity: '128',
        price: 1000,
        image: blueWebp,
    },
    {
        id: 3,
        title: 'iPhone XS',
        type: 'phone',
        capacity: '128',
        price: 500,
        image: goldWebp,
    },
    {
        id: 4,
        title: 'iPhone 11 Pro MAX',
        type: 'phone',
        capacity: '64',
        price: 1500,
        image: purpleWebp,
    },
    {
        id: 5,
        title: 'iPhone 10',
        type: 'phone',
        capacity: '128',
        price: 1000,
        image: redWebp,
    },
    {
        id: 6,
        title: 'iPhone 9',
        type: 'phone',
        capacity: '64',
        price: 900,
        image: starlightWebp,
    },
]

export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            // ...object, - без спреда возвращается только 6й товар, т.к. ф-я прошла все итерации и вернула последний
            // поэтому мы мерджим все итерации с помощью спред-оператора
            ...object,
            // На каждой итерации добавляем новый ключ-значение к объекту
            [product.id]: product,
        }),
        {} // начальное значение для reduce — пустой объект
    )

export default productsArray
