# Node Document Generator/Validator :sunglasses:
 
- API em node que gera e valida cpf/cnpj

## Estrelinha! :star:

Se esse projeto te ajudou em alguma coisa, taquele pau na estrelinha \o/

## Para rodar esse projeto, você vai precisar das seguintes ferramentas :exclamation:

- Visual Studio Code or another editor
- Node 8+

## Descrição :books:

- (GET)  ~/gerar/cpf    - retorna um json com um número de cpf valido.
- (GET)  ~/gerar/cnpj   - retorna um json com um número de cnj valido.
- (POST) ~/validar/cpf  - recebe um json contendo um número de cpf á ser validado, retorna verdadeiro ou falso.
- (POST) ~/validar/cnpj - recebe um json contendo um número de cnpj á ser validado, retorna verdadeiro ou falso.

- Api tem inteligencia para tratar as mascaras dos numeros.
- Caso o numero enviado não atenda os requisitos minimos (tamanho,formato texto) a api retornara uma mensagem de erro.
- Formatado do json para o post

```json
  {"cnpj":"77059769000100"} ou {"cpf": "60415123119"}
```
  
  ***Ambiente do Azure Desativado!!** 
  
