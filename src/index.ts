const spar = require("spar-rs");

export const translate = (s: &string) => {
	console.log(spar.translate(s));
};
