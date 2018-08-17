import Validator from "./validator";
import Rules from "./rules";

const Validation = new Validator();

Validation.validate(
	"email",
	"vandal.vnl.dev@gmail.com",
	new Rules()
		.email()
		.startsWith("vandal")
		.endsWith(".com"),
)
	.validate("cpf", "070.680.938-68", new Rules().cpf())
	.validate("empty", {}, new Rules().isEmpty())
	.validate("array", [1, 2, 3, 3, 4], new Rules().array())
	.validate("equals", [1], new Rules().equals([1]))
	.validate("isDate", "2018-08-29", new Rules().isDate());
console.log(Validation.logs());
console.log(Validation.allRight());
