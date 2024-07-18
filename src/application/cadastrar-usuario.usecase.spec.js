const cadastrarUsuarioUsecase = require("./cadastrar-usuario.usecase");


describe('Cadastrar usuário useCase', () => {
    const usuariosRepository = { 
        cadastrar: jest.fn()
    }

    test('deve poder cadastrar um usuário', async () => {
        const usuarioDTO = { nome: 'gabriel', cpf: '000.000.000-00', endereco: 'rua joquim neto', telefone: '(77) 9999-9999', email: 'gabriel@gmail.com' }
        const sut = cadastrarUsuarioUsecase({usuariosRepository});

        const output = await sut(usuarioDTO);

        expect(output).toBeUndefined();
        expect(usuariosRepository.cadastrar).toHaveBeenCalledWith(usuarioDTO);
        expect(usuariosRepository.cadastrar).toHaveBeenCalledTimes(1);
    });
});
