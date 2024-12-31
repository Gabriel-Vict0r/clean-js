## Reunião

- Somos uma biblioteca pequena e gostariamos de controlar a nossa entrada e saida de livros. Queremos cadastrar usuários que irá pegar o livro emprestado, cadastrar os livros da nossa biblioteca e poder emprestar os livros para qualquer usuário, além de buscar os registros de empréstimo.


## Dados
- Usuário: [nome_completo, CPF, telefone, endereco, email]
- Livro: [nome, quantidade, autor, genero, ISBN]
- Empréstimo: [usuario_id, livro_id, data_retorno, data_devolucao, data_saida]

## UseCases (Regras de negócios)
[] Cadastrar um novo usuário
[] - CPF ou email devem ser únicos

[] Buscar um cadastro de usuário por CPF
[] - Retornar um usuário ou vazio

[] - Cadastrar um novo livro
[] - ISBN deve ser único

[] - Buscar um livro por ISBN ou por nome
[] - Retornar os livros ou vazio

[] - Emprestar um livro ao usuário
[] - A data de retorno não pode ser menor que a data de saída
[] - um usuário não pode estar com mais de um livro com o mesmo ISBN ao mesmo tempo
[] - Um usuário pode estar com mais de um livro com ISBN diferentes ao mesmo tempo
[] - Ao cadastrar um empréstimo será enviado um email automaticamente informando o nome do livro, nome do usuário, CPF, a data de saída e a data de retorno

[] Devolver o livro emprestado
[] - Caso o usuário tenha atrasado, será gerado uma multa fixa de R$ 10,00


[] Mostrar todos os empréstimos pendentes, com o nome do livro, CPF, data de saída e data de retorno. Ordenados pela de retorno mais antiga


## Estruturas

## UsuariosRepository
[] cadastrar: ({nome_completo, CPF, telefone, endereco, email}) => Promise<void>