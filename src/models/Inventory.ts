export class Product {
    readonly quantity: number;
    readonly id: string;
    readonly name: string;
    constructor(opts: { id: string; name: string; quantity: number }) {
        this.id = opts.id;
        this.name = opts.name;
        this.quantity = opts.quantity;
    }
    getId(): string {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getQuantity(): number {
        return this.quantity;
    }
}
