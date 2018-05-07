# JS Validations

**A little collection with data validation, in Javascript...of course**

The focus of this validations:

* Brazilian patterns of documents and common data in sites
* Usual problems of TI, like IPV4, IPV6 and others...

### Regex Validations

* email: W3C Email Regex
* cep: Brazilian pattern for address code, similar to zipCode
* cpf: "Cadastro de Pessoa Física", an "id doc" to brazilians
* cnpj: Same to 'cpf', but identify enterprises
* ipv4: the name already says
* ipv6: the name already says 2
* dayMonthYear: date pattern, using '/', '-' or ' '. Common in Brazil
* monthDayYear: same case, ISO pattern
* dayMonthYearWithMonthValidation: similar to 'dayMonthYear', with validation by according Gregorian Calendar
* monthDayYearWithMonthValidation: similar to 'monthDayYear', with validation by according Gregorian Calendar
* uuid: [read more in Wikipedia](https://en.wikipedia.org/wiki/Universally_unique_identifier)
* timestampsJs: new Date().toString() return, using Javascript
* timestampsNode: new Date().toString() return, using NodeJs
* yes: an affirmation to yes or 'sim'
* no: an negation to no or 'não'
* brazilianCellphone: cellphone br, with country code(55) and 'DDD' (not Domain Driven Design, _Discagem Direta a Distância_)
* brazilianCellphoneWithoutDDD: brazilianCellphone without DDD
* rfcLink: regex implementation, by according official [RFC 5988](https://tools.ietf.org/html/rfc5988) and inspired by [this gist](https://gist.github.com/dperini/729294)
* brazilianName: a stupid regex to accept "Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga", Dom Pedro II
* monetary: accept many coins in the world
* md5: Very very simple regex to accept [Md5 Hash](https://en.wikipedia.org/wiki/MD5)
* sha1: Another very very simple regex to accept [Sha1 Hash](https://en.wikipedia.org/wiki/SHA-1)


### References

* The most of I based on this [IPv6 Regex Pattern](https://stackoverflow.com/questions/53497/regular-expression-that-matches-valid-ipv6-addresses)
* My principal reference to write rfcLink regex come from [here](https://gist.github.com/dperini/729294)
* Email regex I choose "**Do not reinvent a wheel**" and practically wrote the [W3C regex](https://www.w3.org/TR/2012/WD-html-markup-20120320/input.email.html)
