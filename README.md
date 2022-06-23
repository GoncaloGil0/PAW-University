# PAW - Programação em Ambiente Web

![PAW](https://img.shields.io/badge/Faculdade-PAW-orange)
![Nota final](https://img.shields.io/badge/Nota%20final-14-orange)
<br/>
![Nota milestone1](https://img.shields.io/badge/Nota%20Primeira%20Milestone-15-blue)
![Nota milestone2](https://img.shields.io/badge/Nota%20Segunda%20Milestone-14-blue)


## Descrição
Projeto desenvolvido no âmbito da disciplina de Programação em Ambiente Web
Ano letivo 2021/2022.
Este projeto consiste no desenvolvimento de uma API REST e de um Website utilizado por uma libraria e seus clientes de modo a permitir comprar e vender livros novos ou usados e gerir programas de fidelização dos clientes.

## Constituição
- Milestone #1
  - Backend 
- Milestone #2
  - Frontend

## Features
- [x] Compra e Venda de Livros;
- [ ] Gestão de programas de fidelização dos clientes;
- [x] Integração de APIs externas para pagamentos ;
- [x] Login;


## Comandos
### Clonar o repositorio

``` bash
git clone https://github.com/GoncaloGil0/PAW-University.git
```

### Desenvolvimento

#### Ligar tudo

```bash
yarn start-all
```

#### Prisma studio

``` bash
yarn start-prisma
```

#### Ligar o backend

```bash
yarn start-backend
```

#### Ligar o frontend

``` bash
yarn start-frontend
```

### Testes

#### Testar tudo
Para testar tudo certifique-se que tem o backend ligado, para isso pode usar os comandos [yarn start-all](#ligar-tudo)
 ou [yarn start-backend](#ligar-o-backend)
``` bash
yarn test-all
```

#### Testes á API pelo Newman
Para testar a API certifique-se que tem o backend ligado, para isso pode usar os comandos [yarn start-all](#ligar-tudo)
 ou [yarn start-backend](#ligar-o-backend)
``` bash
yarn test-api
```

#### Testes ao frontend do Angular

``` bash
yarn test-angular
```


## Credenciais para testes

| Tipo         | Email | Password |
|--------------|:-----:|-----------:|
| Administrador | admin@teste.com | password1 |
| Funcionario | funcionario@teste.com | password1 |
| Cliente | cliente@teste.com | password1 |

### Autores:

- [Luís Costa](https://github.com/lmpc2001) (8200737)
- [Gonçalo Gil](https://github.com/GoncaloGil0) (8200335)
- José Conde (8200350)
