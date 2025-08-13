import "dotenv/config";
import openai from "openai";

const client = new openai.OpenAI();

export function defineVibeFunction(
	functionName: string,
): (...args: unknown[]) => Promise<string> {
	return async function (...args) {
		const response = await client.responses.create({
			model: "gpt-5-mini",
			input: `Run the function "${functionName}" with arguments: ${JSON.stringify(
				args,
			)}, and return only the result.`,
		});
		return response.output_text.trim();
	};
}
