var parse = function (tokens) {
  var parseTree = [];
  var symbols = {},
    symbol = function (id, nud, lbp, led) {
      var sym = symbols[id] || {};
      symbols[id] = {
        lbp: sym.lbp || lbp,
        nud: sym.nud || nud,
        led: sym.led || led,
      };
    };
  var interpretToken = function (token) {
    var sym = Object.create(symbols[token.type]);
    sym.type = token.type;
    sym.value = token.value;
    return sym;
  };
  var i = 0,
    token = function () {
      return interpretToken(tokens[i]);
    };
  var advance = function () {
    i++;
    return token();
  };
  var expression = function (rbp) {
    var left,
      t = token();
    advance();
    if (!t.nud) throw "Unexpected token: " + t.type;
    left = t.nud(t);
    while (rbp < token().lbp) {
      t = token();
      advance();
      if (!t.led) throw "Unexpected token: " + t.type;
      left = t.led(left);
    }
    return left;
  };
  var infix = function (id, lbp, rbp, led) {
      rbp = rbp || lbp;
      symbol(
        id,
        null,
        lbp,
        led ||
          function (left) {
            return {
              type: id,
              left: left,
              right: expression(rbp),
            };
          }
      );
    },
    prefix = function (id, rbp) {
      symbol(id, function () {
        return {
          type: id,
          right: expression(rbp),
        };
      });
    };
  prefix("-", 7);
  infix("^", 6, 5);
  infix("*", 4);
  infix("/", 4);
  infix("%", 4);
  infix("+", 3);
  infix("-", 3);
  symbol(",");
  symbol(")");
  symbol("(end)");
  return symbols;
  return parseTree;
};

console.log(parse());
