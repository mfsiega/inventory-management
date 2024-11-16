export namespace requests {
    export interface CreateProduct {
        name: string;
        quantity: number;
    }

    export interface GetProduct {
        id: string;
    }

    export interface UpdateProduct {
        id: string;
        quantity: number;
    }
}

export namespace responses {
    export interface CreateProduct {
        id: string;
    }

    export interface GetProduct {
        name: string;
        quantity: number;
    }

    export interface UpdateProduct {
        quantity: number;
    }
}

export interface Inventory {
    createProduct(req: requests.CreateProduct): responses.CreateProduct;
    getProduct(req: requests.GetProduct): responses.GetProduct;
    updateProduct(req: requests.UpdateProduct): responses.UpdateProduct;
}
