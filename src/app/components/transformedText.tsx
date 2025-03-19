"use client";

import type { TextTone } from "@/app/types/textTone";
import Image from "next/image";
import type React from "react";
import { useEffect, useState } from "react";

interface TransformedTextProps {
	text: string;
	tone: TextTone;
}

export const TransformedText = ({ text, tone }: TransformedTextProps) => {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if (copied) {
			const timer = setTimeout(() => setCopied(false), 2000);
			return () => clearTimeout(timer);
		}
	}, [copied]);

	const handleTransform = () => {
		console.log("Transforming text...");
	};

	return (
		<div className="w-full space-y-3">
			<div className="flex justify-center">
				<button
					type="button"
					disabled={!text}
					onClick={handleTransform}
					className="px-8 py-2 h-12 text-white bg-[#91b1f5] rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
				>
					Transform Text
				</button>
			</div>
			<div className="flex items-center justify-between">
				<h2 className="text-lg font-medium text-black">Transformed Text</h2>
				{true && (
					<button
						type="button"
						onClick={() => setCopied(true)}
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
				<div className="text-center flex flex-col items-center justify-center h-full">
					<p className="text-gray-500">Your transformed text will appear here</p>
				</div>
			</div>
		</div>
	);
};
