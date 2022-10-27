import React from 'react';

const Faq = () => {
    return (
        <div className='py-4'>
     <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-12 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>

		<div className="relative mt-6 mb-6">
			<span className="absolute inset-y-0 flex items-center pl-2 mx-auto">
				<button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
					<svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
						<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
					</svg>
				</button>
			</span>
			<input type="search" name="Search" placeholder="Search..." className="w-full py-3 pl-12 text-sm rounded-full sm:w-96 focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900" />
		</div>
		<p className="mt-4 mb-8 dark:dark:text-gray-400">Our goal is to provide better service so that a student can do better in future?You can find you ans here...</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What type of course it is?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400">Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam taciti at adipiscing est. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How will you get benefits by this course?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How will you admitted in this course?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default Faq;