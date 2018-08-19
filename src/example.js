import { Rules, Validator } from "./index";
const Validation = new Validator();

Validation.validate(
	"email",
	"vandal.vnl.dev@gmail.com",
	Rules.new()
		.email("Informe um email válido")
		.startsWith("vandal")
		.endsWith(".com"),
)
	.validate("range", "AA", Rules.new().minOrEquals(2))
	.validate(
		"blank",
		"",
		Rules.new()
			.blank("Esse campo deve ser nulo")
			.isEmpty("Mensagem de isEmpty"),
	)
	.validate("empty", {}, Rules.new().isEmpty())
	.validate("mustBe", "Allan", Rules.new().mustBe((x) => x == "Allan", "Deu ruim mané"))
	.validate("equals", [1], Rules.new().equals([1]))
	.validate("cpf", "070.680.938-68", Rules.new().cpf())
	.validate("ipv4", "192.168.1.133", Rules.new().ipv4())
	.validate("isDate", "2018-08-29", Rules.new().isDate())
	.validate("range", [1, 2, 3, 3, 4], Rules.new().max(6))
	.validate("array", [1, 2, 3, 3, 4], Rules.new().array())
	.validate("unique", [1, 2, 3, 4, 5, 6, 7, 8, 8], Rules.new().uniq(1))
	.validate("object", { foo: { bar: "foobar" } }, Rules.new().object());
console.log(Validation.msgErrors());
console.log(Validation.allRight());
