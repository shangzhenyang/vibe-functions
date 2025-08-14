# vibe-functions

Easiest way to make your app AI native.

A simple, lightweight library for defining and running AI-powered functions on the fly using a powerful LLM.

## Inspiration

This project was inspired by:

-   [vibesort](https://github.com/abyesilyurt/vibesort)
-   [vibe-uppercase](https://www.npmjs.com/package/vibe-uppercase)

## Features

-   Define a function name and let AI handle the logic.
-   One function to create any function you need.
-   Write less code for simple functions.
-   Showcase your team's commitment to cutting-edge AI technology.

## Installation

```bash
bun install vibe-functions
```

## Quick Start

Create a `.env` file in your project root and add your OpenAI API key:

```bash
OPENAI_API_KEY=your_api_key_here
```

Then, you can start using the library in your JavaScript or TypeScript files:

```js
import { defineVibeFunction } from "vibe-functions";

// Define a function and let AI handle the implementation
const reverseString = defineVibeFunction("reverseString");

// Use it like any other async function
const result = await reverseString("hello world");
console.log(result); // "dlrow olleh"
```

## Before & After

This library eliminates the need to write complex functions by hand, freeing up your valuable time for more important things.

```diff
--- a/twosum.js
+++ b/twosum.js
@@ -1,17 +1,4 @@
-function twoSum(nums, target) {
-    const numMap = new Map();
-    for (let i = 0; i < nums.length; i++) {
-        const complement = target - nums[i];
-        if (numMap.has(complement)) {
-            return [numMap.get(complement), i];
-        }
-        numMap.set(nums[i], i);
-    }
-}
+import { defineVibeFunction } from "vibe-functions";
+
+const twoSum = defineVibeFunction("twoSum");

 const numbers = [2, 7, 11, 15];
 const target = 9;

-const result = twoSum(numbers, target);
+const result = await twoSum(numbers, target);
 console.log(result);
```

## Examples

Here are some examples of what you can accomplish with this library, proving to your peers that your team is a thought leader in the space of AI-driven text manipulation.

### Check if a Number is Even

```js
import { defineVibeFunction } from "vibe-functions";

const isEven = defineVibeFunction("isEven");

const number = 42;
const result = await isEven(number);
console.log(result); // true
```

### Sort an Array

```js
import { defineVibeFunction } from "vibe-functions";

const sort = defineVibeFunction("sort");

const numbers = [2, 5, 1, 4, 33];
const sortedNumbers = await sort(numbers);
console.log(sortedNumbers); // [1, 2, 4, 5, 33]
```

### Uppercase a String

```js
import { defineVibeFunction } from "vibe-functions";

const uppercaseString = defineVibeFunction("uppercase");

const myString = "hello world";
const uppercasedString = await uppercaseString(myString);
console.log(uppercasedString); // "HELLO WORLD"
```

### Solve the Two Sum Problem

```js
import { defineVibeFunction } from "vibe-functions";

const twoSum = defineVibeFunction("twoSum");

const numbers = [2, 7, 11, 15];
const target = 9;

const result = await twoSum(numbers, target);
console.log(result); // [0, 1]
```

### Check if Two Words are Synonyms

```js
import { defineVibeFunction } from "vibe-functions";

const isSynonym = defineVibeFunction("isSynonym");

const trueResult = await isSynonym("happy", "joyful");
console.log(trueResult); // true

const falseResult = await isSynonym("happy", "sad");
console.log(falseResult); // false
```

## Testing

This project uses Bun's built-in test runner. The test file is located in the `test/` directory.

To test the library and see it in action, you can run the tests:

```bash
# Run all tests
bun run test

# Run a specific test
bun run test -t "checks if number is even"

# Run tests for a specific function
bun run test -t "isEven"
```

## License

[MIT](LICENSE).
