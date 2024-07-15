module.exports = function cadastrarUsuarioUseCase() {
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