//import { cadastrarUsuarioUseCase } from "./cadastrar-usuario.usecase"

const cadastrarUsuarioUseCase = require('./cadastrar-usuario.usecase');
describe('cadastrar usuario useCase', function () {

    const usuariosRepository = {
        cadastrar: jest.fn()
    }
    it('Deve poder cadastrar um usuário', async () => {
        const usuarioDTO = { 
            nome_completo: 'nome_valido',
            CPF: 'CPF_VALIDO', 
            telefone: 'telefone_valido', 
            endereco: 'endereco_valido', 
            email: 'email_valido'
        }

        const sut = cadastrarUsuarioUseCase({usuariosRepository});
        const outupt = await sut(usuarioDTO);

        expect(outupt).toBeUndefined();
        expect(usuariosRepository.cadastrar).toHaveBeenCalledWith(usuarioDTO);
        expect(usuariosRepository.cadastrar).toHaveBeenCalledTimes(1);
    })
})