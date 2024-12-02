# Node Design Patterns

Este projeto demonstra a implementação dos padrões de design Singleton e Decorator em Node.js com uma interface de API simples usando Express.


<!-- ## Padrões de Design -->

### Singleton

O padrão Singleton é utilizado para garantir que apenas uma instância da classe de registro de usuários seja criada. Isso é implementado no arquivo singletons/userRegistration.js, onde a classe UserRegistration mantém uma única instância de si mesma e fornece métodos para registrar e obter usuários.

- **Objetivo**: Garantir que apenas uma instância da classe de registro de usuários seja criada durante toda a execução do sistema.
- **Implementação**: `singletons/userRegistration.js`

O padrão Decorator é usado para adicionar funcionalidades adicionais aos relatórios de forma dinâmica. Isso é implementado na pasta decorators, onde diferentes decoradores como HeaderDecorator e FooterDecorator podem ser aplicados ao BasicReport para modificar seu comportamento.

### Decorator

- **Objetivo**: Permitir a adição de funcionalidades de formatação aos relatórios de forma dinâmica e flexível.
- **Implementação**: `decorators/`



<!-- ## Como Executar -->

### Usando Docker Compose

Execute `docker-compose up` para iniciar o servidor.

<!-- ## Endpoints -->

### Registro de Usuários

#### POST `/users/register`

Registra um novo usuário.

- **Corpo da requisição**:
`{ "username": "Nicolas", "password": "123" }`


#### GET `/users`

Obtém a lista de usuários registrados.

#### GET `/report`

Gera um relatório com formatação opcional.
header=true (opcional)
footer=true (opcional)
