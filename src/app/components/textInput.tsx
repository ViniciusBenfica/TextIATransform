"use client";

import { TransformedText } from "@/app/components/transformedText";
import type { TextTone } from "@/app/types/textTone";
import Image from "next/image";
import type React from "react";
import { useState } from "react";

const toneOptions = [
	{
		id: "professional",
		label: "Professional",
		description: "Formal and business-appropriate language",
		icon: "briefcase",
	},
	{
		id: "casual",
		label: "Casual",
		description: "Relaxed, everyday language",
		icon: "coffee",
	},
	{
		id: "friendly",
		label: "Friendly",
		description: "Warm and personable tone",
		icon: "heart",
	},
	{
		id: "academic",
		label: "Academic",
		description: "Scholarly and formal language",
		icon: "graduation-cap",
	},
	{
		id: "creative",
		label: "Creative",
		description: "Expressive and imaginative language",
		icon: "palette",
	},
	{
		id: "persuasive",
		label: "Persuasive",
		description: "Compelling and convincing language",
		icon: "megaphone",
	},
];

export default function TextInput() {
	const [text, setText] = useState("");
	const [tone, setTone] = useState<TextTone | null>(null);

	return (
		<div className="w-full max-w-4xl mx-auto p-6">
			<div className="space-y-8">
				<div className="space-y-4">
					<h2 className="text-lg font-medium text-black">Your Text</h2>
					<textarea
						placeholder="Enter the text you want to transform..."
						className="w-full h-[200px] p-2 border border-gray-300 text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>

				<div className="w-full space-y-4">
					<h2 className="text-lg font-medium text-black">Select Tone</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
						{toneOptions.map((option) => (
							<button
								key={option.id}
								onClick={() => setTone(option.id as TextTone)}
								type="button"
								className={`relative overflow-hidden rounded-lg border p-4 text-left transition-all duration-300 hover:shadow-md ${
									tone === option.id
										? "border-[#2463eb] bg-[#eaf0fd] shadow-md"
										: "border-border/50 hover:border-border hover:bg-accent/50"
								}`}
							>
								<div className="relative z-10">
									<Image
										src={`/icons/${option.icon}.svg`}
										alt={option.label}
										className="mb-2"
										width={20}
										height={20}
									/>
									<h3 className="font-medium text-black">{option.label}</h3>
									<p className="text-xs mt-1 text-gray-500">{option.description}</p>
								</div>
							</button>
						))}
					</div>
				</div>

				<TransformedText text={text} tone={tone} />
			</div>
		</div>
	);
}
