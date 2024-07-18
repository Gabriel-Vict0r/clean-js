
# reuniao
Somos uma biblioteca pequena e gostaríamos de controlar a nossa entrada e saída de livros. 

iremos cadastrar o usuário que irá cadastrar o usuário dos livros emprestados. 
cadastrar os livros da biblioteca e poder emprestar os mesmos para qualquer usuário, além de buscar os registros de empréstimos.

# dados
- Usuário: [nome_completo, cpf, endereço, telefone, email]
- livro: [nome, quantidade, autor, genero, ISBN]
- Empréstimo: [usuario_id, livro_id, data_devolucao, data_saida]

## use Cases(Regras de negócio)
[] - Cadastrar um novo usuário
[] - cpf e email únicos

[] - buscar um cadastro de usuário por cpf
[] - retorna um usuário/vazio

[] - cadastrar um novo livro
[] - ISBN único

[] - buscar um livro por nome ou ISBN
[] - Retorna os livros/vazio

[] - emprestar um livro para o usuário
[] - a data de retorno não pode ser menor que a data de saída
[] - um usuário não pode estar com mais de um livro com o mesmo ISBN ao mesmo tempo
[] - um usuário pode estar com mais de um livro com ISBN's diferentes
[] - ao cadastrar o empréstimo, será enviado um email automaticamente informando: nome do livro,
nome do usuário, cpf, data de saída, data de retorno

### devolver
[] - caso o usuário atrasar será gerada uma multa fixa (10 reais)

[] - mostrar todos os empréstimos pendentes com o nome do livro, nome do usuário, CPF, data de retorno e data de saída. Ordenar pela data de retorno mais antiga

## estruturas

##UsuariosRepository
[] cadastrar: ({nome, cpf, endereco, telefone, email}) => Promise<void>
