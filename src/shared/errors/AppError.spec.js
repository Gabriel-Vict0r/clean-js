const AppError = require("./AppError");


describe('Teste do AppError', () => {
    test('AppError é uma instância de erro', () => {
        const appError = new AppError('erro');

        expect(appError).toBeInstanceOf(Error);
    });
    
    test('AppError é uma mensagem correta', () => { 
        const mensagem = 'mensagem de erro'; 
        const appError = new AppError(mensagem);

        expect(appError.message).toBe(mensagem);
    })
});
