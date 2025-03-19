import Image from "next/image";
import React from "react";

export default function Footer() {
	return (
		<footer className="flex flex-col justify-center items-center w-full pt-3 text-[#101010] inset-shadow-sm inset-shadow-gray-300 mt-10">
			<div className="flex items-center gap-4 mb-2">
				<a
					target="_blank"
					href="mailto:vinicius.benfica.ruy@gmail.com"
					className="text-center"
					rel="noreferrer"
				>
					<Image src="/icons/email.svg" alt="Email" width={20} height={15} />
				</a>
				<a
					target="_blank"
					href="https://github.com/ViniciusBenfica"
					className="text-center"
					rel="noreferrer"
				>
					<Image src="/icons/github.svg" alt="Github" width={20} height={20} />
				</a>
				<a
					target="_blank"
					href="https://www.linkedin.com/in/vinicius-benfica/"
					className="text-center"
					rel="noreferrer"
				>
					<Image src="/icons/linkedin.svg" alt="Linkedin" width={20} height={20} />
				</a>
			</div>
			<p className="text-sm sm:text-base text-center">
				Made by{" "}
				<a
					target="_blank"
					href="https://paulo-mariano.vercel.app"
					rel="noreferrer"
					className="bg-gradient-to-r from-[#2500f5] to-[#3f4ac2] text-transparent bg-clip-text"
				>
					Vinicius Benfica
				</a>
			</p>
			<p className="text-sm sm:text-base text-center">
				&copy; {new Date().getFullYear()} Text Transformer IA
			</p>
		</footer>
	);
}
