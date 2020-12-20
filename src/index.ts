import wasm from "spar-rs";

export interface Foo {

};

export default async function () {
    const { translate } = await wasm();
	if (translate) {
		console.log(translate());
	}
};