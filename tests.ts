import JsValidate from "./src";

const schema = {
  username: [JsValidate["username"], JsValidate.string],
  age: [JsValidate.integer, JsValidate.max(32)],
  name: JsValidate["brazilianName"],
  link: JsValidate["link"],
  rg: [JsValidate["rg"], JsValidate.string],
  jwt: [JsValidate.jwt, JsValidate.maxLength(155)],
  code: JsValidate["base64"],
  cpf: [JsValidate.cpf, JsValidate.equals("070.680.938-68")]
};

const isTrue = JsValidate.validate(
  {
    name: "Fluffykins Fulano da Silva",
    username: "username",
    link: "http://facebook.com",
    jwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    cpf: "070.680.938-68",
    code: "SGVsbG8gd29ybGQK",
    rg: "AA-11.010.000",
    age: 32
  },
  schema
);

console.log(isTrue);
