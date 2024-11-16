import { createDefaultInventoryServer } from '../../src/server/Server';

describe('Inventory server', () => {
    test('should return id of created product', () => {
        const server = createDefaultInventoryServer();
        expect(server.createProduct({ name: 'foo', quantity: 1 }).id).toMatch(
            /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/,
        );
    });
});
