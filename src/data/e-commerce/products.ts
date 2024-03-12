import product1 from 'assets/products/product_1.webp';
import product2 from 'assets/products/product_2.webp';
import product3 from 'assets/products/product_3.webp';
import product4 from 'assets/products/product_4.webp';
import product5 from 'assets/products/product_5.webp';
import product6 from 'assets/products/product_6.webp';
import product7 from 'assets/products/product_7.webp';
import product8 from 'assets/products/product_8.webp';
import product9 from 'assets/products/product_9.webp';
import product10 from 'assets/products/product_10.webp';
import product11 from 'assets/products/product_11.webp';
import product12 from 'assets/products/product_12.webp';
import { User, users } from '../users';

export interface Product {
  id: number;
  product: {
    name: string;
    image: string;
  };
  vendors: User[];
  margin: number;
  sold: number;
  stock: string;
}

export const topProducts: Product[] = [
  {
    id: 1,
    product: { name: 'Shanty Cotton Seat', image: product1 },
    vendors: [users[2], users[7], users[16]],
    margin: 981.0,
    sold: 29536,
    stock: 'In Stock',
  },
  {
    id: 2,
    product: { name: 'Practical Soft Couch', image: product2 },
    vendors: [users[6], users[11], users[7], users[13]],
    margin: 199,
    sold: 27700,
    stock: 'In Stock',
  },
  {
    id: 3,
    product: { name: 'Rustic Rubber Chair', image: product3 },
    vendors: [users[4], users[3], users[5], users[14], users[1], users[2]],
    margin: 609,
    sold: 21778,
    stock: 'Low Stock',
  },
  {
    id: 4,
    product: { name: 'Ergonomic Frozen Bacon', image: product4 },
    vendors: [users[6], users[5], users[11], users[16]],
    margin: 923,
    sold: 20272,
    stock: 'In Stock',
  },
  {
    id: 5,
    product: { name: 'Unbranded Metal Sofa', image: product5 },
    vendors: [users[12], users[1]],
    margin: 119,
    sold: 17374,
    stock: 'In Stock',
  },
  {
    id: 6,
    product: { name: 'Intelligent Soft Sofa', image: product6 },
    vendors: [users[1], users[2], users[3]],
    margin: 595,
    sold: 14374,
    stock: 'Low Stock',
  },
  {
    id: 7,
    product: { name: 'Handmade Cotton Chair', image: product7 },
    vendors: [users[2], users[3], users[13], users[14], users[16], users[12]],
    margin: 472,
    sold: 12084,
    stock: 'Stockout',
  },
  {
    id: 8,
    product: { name: 'Fantastic Rubber Chair', image: product8 },
    vendors: [users[2], users[7], users[16]],
    margin: 98,
    sold: 48604,
    stock: 'In Stock',
  },
  {
    id: 9,
    product: { name: 'Generic Steel Divan', image: product9 },
    vendors: [users[10], users[13], users[5], users[11], users[12], users[13]],
    margin: 931,
    sold: 2329,
    stock: 'In Stock',
  },
  {
    id: 10,
    product: { name: 'Handmade Beanbag', image: product10 },
    vendors: [users[10], users[2]],
    margin: 55300,
    sold: 70946,
    stock: 'Low Stock',
  },
  {
    id: 11,
    product: { name: 'Practical Metal Sofa', image: product11 },
    vendors: [users[4], users[3], users[13], users[14], users[16], users[11]],
    margin: 282,
    sold: 57682,
    stock: 'In Stock',
  },
  {
    id: 12,
    product: { name: 'Advanced Soft Couch', image: product12 },
    vendors: [users[16], users[10], users[7], users[9]],
    margin: 427,
    sold: 32587,
    stock: 'Low Stock',
  },
];
