import wasm from "./magnetite-guest/Cargo.toml";

export default class Magnetite extends Plugin {
	constructor(...args) {
		super(...args);
		this.guest = wasm();
	}
	async translate() {
		const { translate } = await this.guest;
		if (translate) {
			translate(this);
		}
	}
};
