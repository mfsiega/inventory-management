import { Product } from '../models/Inventory';
import { DataAccess } from './DataAccess';

export class InMemoryDb implements DataAccess {
    readonly db;
    constructor() {
        this.db = new Map<string, Product>();
    }
    updateProduct(p: Product): void {
        if (!this.db.has(p.id)) {
            throw new Error('Product not found');
        }
        if (this.db.get(p.id)?.getName() !== p.getName()) {
            throw new Error('Updating name not allowed');
        }
        this.db.set(p.id, p);
    }
    getProduct(id: string): Product {
        const result = this.db.get(id);
        if (!result) {
            throw new Error('Product not found');
        }
        return result;
    }
    insertProduct(p: Product): void {
        if (this.db.has(p.id)) {
            throw new Error('Product with this id already exists');
        }
        this.db.set(p.id, p);
    }
}
