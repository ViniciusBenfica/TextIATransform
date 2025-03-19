import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import TextInput from "@/app/components/textInput";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-white">
			<Header />
			<main className="mt-20 mb-10">
				<div className="px-4 max-w-6xl mx-auto">
					<div className="text-center mb-14 mt-10">
						<div>
							<span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 text-[#2463eb] bg-[#e9effc]">
								AI-Powered Text Transformation
							</span>
						</div>
						<h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-blue-400">
							Transform Your Words
						</h1>
						<p className="text-lg text-gray-500 max-w-2xl mx-auto">
							Instantly adapt your writing to different tones and styles with our AI-powered text
							transformation tool.
						</p>
					</div>

					<div className=" border border-border/40 rounded-xl shadow-lg overflow-hidden">
						<TextInput />
					</div>

					<div className="mt-20 text-center">
						<h2 className="text-2xl font-semibold text-black mb-6">How It Works</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="bg-white/40 border border-border/40 rounded-lg p-6 transition-all hover:shadow-md">
								<div className="flex items-center justify-center w-12 h-12 rounded-full text-[#2463eb] bg-[#e9effc] text-primary mb-4 mx-auto">
									1
								</div>
								<h3 className="text-lg text-gray-900 font-medium mb-2">Enter Your Text</h3>
								<p className="text-gray-500">Type or paste the content you want to transform.</p>
							</div>
							<div className="bg-white/40 border border-border/40 rounded-lg p-6 transition-all hover:shadow-md">
								<div className="flex items-center justify-center w-12 h-12 rounded-full text-[#2463eb] bg-[#e9effc] text-primary mb-4 mx-auto">
									2
								</div>
								<h3 className="text-lg text-gray-900 font-medium mb-2">Select a Tone</h3>
								<p className="text-gray-500">
									Choose the tone or style you want to apply to your text.
								</p>
							</div>
							<div className="bg-white/40 border border-border/40 rounded-lg p-6 transition-all hover:shadow-md">
								<div className="flex items-center justify-center w-12 h-12 rounded-full text-[#2463eb] bg-[#e9effc] text-primary mb-4 mx-auto">
									3
								</div>
								<h3 className="text-lg text-gray-900 font-medium mb-2">Get Results</h3>
								<p className="text-gray-500">
									Receive your professionally transformed text instantly.
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
