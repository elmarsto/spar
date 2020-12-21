const Spar = require("spar-rs");

export default function (s: &string) {
	console.log(Spar.translate(s));
};
