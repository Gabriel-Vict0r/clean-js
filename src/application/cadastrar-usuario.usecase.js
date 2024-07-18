const AppError = require("../shared/errors/AppError");

module.exports = function cadastrarUsuarioUseCase({ usuariosRepository }) {
    if (!usuariosRepository) throw new AppError(AppError.dependencias);
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