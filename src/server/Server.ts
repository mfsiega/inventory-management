import { Inventory, requests, responses } from '../api/Api';
import { DataAccess } from '../data-access/DataAccess';
import { InMemoryDb } from '../data-access/InMemoryDb';
import { v4 as uuid } from 'uuid';
import { Product } from '../models/Inventory';

class InventoryServer implements Inventory {
    db: DataAccess;
    constructor(db: DataAccess) {
        this.db = db;
    }

    createProduct(req: requests.CreateProduct): responses.CreateProduct {
        const product = new Product({
            id: uuid(),
            name: req.name,
            quantity: req.quantity,
        });
        this.db.insertProduct(product);
        return { id: product.id };
    }

    getProduct(req: requests.GetProduct): responses.GetProduct {
        throw new Error('unimplemented');
    }

    updateProduct(req: requests.UpdateProduct): responses.UpdateProduct {
        throw new Error('unimplemented');
    }
}

export function createDefaultInventoryServer(): Inventory {
    return new InventoryServer(new InMemoryDb());
}
