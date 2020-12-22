const spar = require("spar-rs");
const tsMorph = require("ts-morph");


const { Project } = tsMorph;
Object.assign(globalThis, tsMorph);

export const translate = (dts: string) =>
	spar.translate(new Project().createSourceFile("spar.d.ts", dts));
