# JS Validations

**A FluentValidator for NodeJS(ServerSide) and Javascript(Browser)**

## Install

Athena can be used in Browser and Server

```bash
npm install --save athena
```

## Using

```javascript
import Athena from "athena-validator";
const Validation = new Athena.Validator();
const Rules = () => Athena.Rules.new();

Validation.validate({ name: "email", value: "vandal.vnl.dev@gmail.com" })
	.validate({ name: "range", value: "AA", rules: Rules().minOrEquals(2) })
	.validate({ name: "cnpj", value: "05.144.757/0001-72", rules: Rules().cnpj("CNPJ Inválido") });

if (Validation.allRight()) {
	return "Good Job, user";
}
return Validation.msgErrors();
```

## Validations

-   email: Validation for email, using the same regex of \<input type="email">
-   cpf: The algorithm of CPF (Cadastro de Pessoa Física)
-   cnpj: The algorithm of CNPJ
-   array: Validate if value is array
-   isEmpty: Validate if value is empty, {}, [], ""
-   equals: Compare value with the expected value
-   startsWith:
-   endsWith:
-   isJson:
-   isDate:
-   isAfterDate:
-   isBeforeDate:
-   number:
-   string:
-   object:
-   max:
-   min:
-   minOrEquals:
-   maxOrEquals:
-   length:
-   uniq:
-   allUniq:
-   negative:
-   positive:
-   blank:
-   jwt:
-   ipv4:
-   http:
-   ipv6:
-   creditCard:
-   must:
-   mustBe:
-   regex:
-   uuid:
