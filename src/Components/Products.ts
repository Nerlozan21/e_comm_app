export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    description: "Description for Product 1",
    image: "./Assets/carouselShoes.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    description: "Description for Product 2",
    image: "./Assets/carouselWatches.jpeg"
  },
  {
    id: 3,
    name: "Product 3",
    price: 24.99,
    description: "Description for Product 3",
    image: "./Assets/carouselWatches.jpeg"
  },
  {
    id: 4,
    name: "Product 4",
    price: 99.99,
    description: "Description for Product 2",
    image: "./Assets/carouselWatches.jpeg"
  },
  {
    id: 5,
    name: "Product 5",
    price: 49.99,
    description: "Description for Product 2",
    image: "./Assets/carouselWatches.jpeg"
  }
];

export default products;
