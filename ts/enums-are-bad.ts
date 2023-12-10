enum LoginMode {
  email,
  social,
}

console.log(LoginMode.email); //0
console.log(LoginMode.social); //1

console.log(LoginMode["email"]); //0
console.log(LoginMode[0]); //email

console.log(Object.keys(LoginMode)); //[ '0', '1', 'email', 'social' ]

enum Country {
  BR = "BR",
  USA = "USA",
} //Not DRY

console.log(Object.keys(Country)); //[ 'BR', 'USA' ]

function setCountry(country: Country) {}

setCountry("BR"); //🤦

// Alternatives that work well with the compile time type only nature of TS and the runtime nature of JS
type Country2 = "BR" | "USA";

function setCountry2(country: Country2) {}

setCountry2("BR");

const LoginMode2 = {
  email: "email",
  social: "social",
} as const;

export type LoginMode2 = keyof typeof LoginMode;

function initiateLogin(mode: LoginMode2) {}

initiateLogin("email");
initiateLogin(LoginMode2.email);
console.log(Object.keys(LoginMode2)); //[ 'email', 'social' ]
