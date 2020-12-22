const spar = require("spar-rs");

export const translate = (dts: &string) => {
	return spar.translate(dts);
};
