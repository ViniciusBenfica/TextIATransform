import Image from "next/image";
import React from "react";

export default function Footer() {
	return (
		<footer className="w-full py-6 px-4 sm:px-6 mt-10 border-t border-border/40">
			<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
				<p className="text-sm text-gray-500">Created by Vinicius Benfica</p>
				<div className="flex items-center space-x-4 mt-4 sm:mt-0">
					<a
						href="https://github.com/ViniciusBenfica"
						className="text-gray-500 hover:text-black transition-colors flex items-center gap-1"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image src="/icons/github.svg" alt="Github" width={20} height={20} />
						<span className="text-sm">LinkedIn</span>
					</a>
					<a
						href="https://www.linkedin.com/in/vinicius-benfica/?locale=en_US"
						className="text-gray-500 hover:text-black transition-colors flex items-center gap-1"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image src="/icons/linkedin.svg" alt="Linkedin" width={20} height={20} />
						<span className="text-sm">GitHub</span>
					</a>
				</div>
			</div>
		</footer>
	);
}
