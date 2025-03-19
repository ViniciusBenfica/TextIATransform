"use client";

import type { TextTone } from "@/app/types/textTone";
import { createGroq } from "@ai-sdk/groq";
import { generateText } from "ai";
import Image from "next/image";
import type React from "react";
import { useEffect, useState } from "react";

interface TransformedTextProps {
	input: string;
	tone: TextTone;
}

const groq = createGroq({
	apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
});

export const TransformedText = ({ input, tone }: TransformedTextProps) => {
	const [copied, setCopied] = useState(false);
	const [transformedText, setTransformedText] = useState("");
	const [loading, setLoading] = useState(false);

	const transformText = async () => {
		setLoading(true);
		try {
			const { text } = await generateText({
				model: groq("llama3-70b-8192"),
				prompt: `Transform the following text to a ${tone} tone. Do not include explanations or introductions. Output only the final version: ${input}`,
			});
			setTransformedText(text);
			setLoading(false);
		} catch (err) {
			console.error(err);
			setLoading(false);
		}
	};

	useEffect(() => {
		if (copied) {
			const timer = setTimeout(() => setCopied(false), 2000);
			return () => clearTimeout(timer);
		}
	}, [copied]);

	const handleCopy = () => {
		if (!transformedText) return;

		navigator.clipboard.writeText(transformedText);
		setCopied(true);
	};

	return (
		<div className="w-full space-y-3">
			<div className="flex justify-center">
				<button
					type="button"
					disabled={!input || loading}
					onClick={transformText}
					className="px-8 flex items-center gap-2 py-2 h-12 text-white bg-[#2563eb] rounded-full shadow-md transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
				>
					<Image src="/icons/IA.svg" alt="Transform" width={20} height={20} />
					Transform Text
				</button>
			</div>
			<div className="flex items-center justify-between">
				<h2 className="text-lg font-medium text-black">Transformed Text</h2>
				{true && (
					<button
						type="button"
						onClick={handleCopy}
						className="text-xs h-8 text-black w-24 rounded-md border border-gray-300 hover:bg-[#f1f5f9] flex items-center justify-center gap-2"
					>
						{copied ? (
							<>
								<Image src="/icons/copied.svg" alt="Copied" width={17} height={17} />
								Copied
							</>
						) : (
							<>
								<Image src="/icons/copy.svg" alt="Copy" width={17} height={17} />
								Copy
							</>
						)}
					</button>
				)}
			</div>

			<div className="min-h-[150px] w-full p-4 border border-border/50 rounded-lg shadow-sm overflow-hidden transition-colors">
				<div className=" h-full">
					{transformedText ? (
						<div className="text-black">{transformedText}</div>
					) : (
						<p className="text-gray-500">Your transformed text will appear here</p>
					)}
				</div>
			</div>
		</div>
	);
};
