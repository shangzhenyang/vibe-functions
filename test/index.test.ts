import { describe, expect, it } from "bun:test";
import { defineVibeFunction } from "../src/index.js";

const isEven = defineVibeFunction("isEven");
const sort = defineVibeFunction("sortArray");
const uppercase = defineVibeFunction("uppercase");
const twoSum = defineVibeFunction("twoSum");
const isSynonym = defineVibeFunction("isSynonym");

describe("vibe functions", () => {
	describe("isEven", () => {
		it("checks if number is even", async () => {
			const result = await isEven(4);
			expect(result).toBe(true);
		});

		it("checks if number is not even", async () => {
			const result = await isEven(5);
			expect(result).toBe(false);
		});
	});

	describe("sort", () => {
		it("sorts integer array", async () => {
			const result = await sort([2, 5, 1, 4, 33]);
			expect(result).toEqual([1, 2, 4, 5, 33]);
		});

		it("sorts decimal array", async () => {
			const result = await sort([3.11, 3.9]);
			expect(result).toEqual([3.11, 3.9]);
		});

		it("sorts string array", async () => {
			const result = await sort(["banana", "apple", "cherry"]);
			expect(result).toEqual(["apple", "banana", "cherry"]);
		});
	});

	describe("uppercase", () => {
		it("converts string to uppercase", async () => {
			const result = await uppercase("hello world");
			expect(result).toBe("HELLO WORLD");
		});
	});

	describe("twoSum", () => {
		it("solves two-sum problem", async () => {
			const result = await twoSum([2, 7, 11, 15], 9);
			expect(result).toEqual([0, 1]);
		});
	});

	describe("isSynonym", () => {
		it("checks if two words are synonyms", async () => {
			const result = await isSynonym("happy", "joyful");
			expect(result).toBe(true);
		});

		it("checks if two words are not synonyms", async () => {
			const result = await isSynonym("happy", "sad");
			expect(result).toBe(false);
		});
	});
});
