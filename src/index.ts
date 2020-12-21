const spar = require("spar-rs");

export const translate = (s: &string) => {
	return spar.translate(s);
};
