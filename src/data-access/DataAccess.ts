import { Product } from '../models/Inventory';

export interface DataAccess {
    /**
     * Insert the product.
     * @param p the product to insert
     * @throws an error if there's already a product with the same id
     */
    insertProduct(p: Product): void;

    /**
     * Update an existing product.
     * @param p
     * @throws an error if the product with this id doesn't exist
     */
    updateProduct(p: Product): void;

    /**
     * Get the product with the given id.
     * @param id the id of the product to retrieve
     */
    getProduct(id: string): Product;
}
