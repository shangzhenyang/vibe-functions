import { describe, expect, it } from "bun:test";
import { defineVibeFunction } from "../src/index.js";

const isEven = defineVibeFunction("isEven");
const sort = defineVibeFunction("sortArray");
const uppercase = defineVibeFunction("uppercase");
const twoSum = defineVibeFunction("twoSum");

describe("vibe functions", () => {
	it("can check if a number is even", async () => {
		const result = await isEven(4);
		expect(result).toEqual("true");
	});

	it("can sort integer array", async () => {
		const result = await sort([2, 5, 1, 4, 33]);
		expect(result).toEqual("[1,2,4,5,33]");
	});

	it("can sort decimal array", async () => {
		const result = await sort([3.11, 3.9]);
		expect(result).toEqual("[3.11,3.9]");
	});

	it("can return uppercase string", async () => {
		const result = await uppercase("hello");
		expect(result).toEqual("HELLO");
	});

	it("can find two sum", async () => {
		const result = await twoSum([2, 7, 11, 15], 9);
		expect(result).toEqual("[0,1]");
	});
});
