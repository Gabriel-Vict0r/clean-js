module.exports = function cadastrarUsuarioUseCase({ usuariosRepository }) {
    if (!usuariosRepository) throw new Error('usuariosRepository não informado');
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