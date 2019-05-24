const port = 8080
const host = localhost
describe('server status', () => {
    test('is server running', async () => {
        const response = await fetch(`htttp://${host}:${port}`);
        console.log(response);
        expect(response.status).toBe(200);
    }) 
})