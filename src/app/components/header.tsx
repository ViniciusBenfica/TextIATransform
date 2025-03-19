import React from "react";

export default function Header() {
	return (
		<header className="w-full py-6 px-4 fixed bg-white top-0 z-10">
			<div className="max-w-7xl mx-auto flex items-center justify-between">
				<div className="flex items-center space-x-2">
					<h1 className="text-xl text-black font-medium ">TextIAtransform</h1>
				</div>
				<div className="flex items-center space-x-1">
					<span className="text-xs text-[#2463eb] px-2 py-1 rounded-full bg-[#e9effc] font-medium">
						AI-Powered
					</span>
				</div>
			</div>
		</header>
	);
}
