module.exports = function cadastrarUsuarioUseCase({usuariosRepository}) {
    return async function ({nome, cpf, endereco, telefone, email}) { 
        await usuariosRepository.cadastrar({
            nome, 
            cpf, 
            endereco, 
            telefone, 
            email
        })
    }
}