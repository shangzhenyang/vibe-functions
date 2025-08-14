import "dotenv/config";
import openai from "openai";

const client = new openai.OpenAI();

export function defineVibeFunction(
	functionName: string,
): (...args: unknown[]) => Promise<unknown> {
	return async function (...args) {
		const response = await client.responses.create({
			model: "gpt-5-mini",
			input: `Run the function "${functionName}" with arguments: ${JSON.stringify(
				args,
			)}, and return only the result.`,
		});
		const result = response.output_text.trim();
		const resultLowered = result.toLowerCase();
		if (resultLowered === "true") {
			return true;
		} else if (resultLowered === "false") {
			return false;
		} else if (!isNaN(Number(result))) {
			return Number(result);
		} else if (
			(result.startsWith("[") && result.endsWith("]")) ||
			(result.startsWith("{") && result.endsWith("}"))
		) {
			try {
				return JSON.parse(result);
			} catch (error) {
				return result;
			}
		}
		return result;
	};
}
