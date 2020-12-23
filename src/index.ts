const spar = require("spar-rs");
const tsMorph = require("ts-morph");


const { Project } = tsMorph;
Object.assign(globalThis, tsMorph);

export const translate = (dts: string) =>
	spar.translate(new Project({ useInMemoryFileSystem: true }).createSourceFile("sample.d.ts", dts));
