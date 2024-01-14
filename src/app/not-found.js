import Link from "next/link";

export const metadata = {
  title: {
    absolute: "404 Not Found | Rafli Malik",
  },
  description: "Page not found.",
};

export default function notFound() {
  return (
    <main>
      <div className=" h-screen flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <h1 className="title text-center font-black">404</h1>
          <div className="verticalLine w-1/2 md:w-0 md:h-full rounded-sm border-solid border-l-0 border-b-4 md:border-l-4 md:border-b-0 border-black"></div>
          <h2 className="subtitle text-center font-medium">
            It&apos;s look like you are lost
          </h2>
        </div>
        <button className="defaultbtn rounded-full px-8 py-3 transition-all duration-300 ease-out">
          <Link href="/">Back to Home</Link>
        </button>
      </div>

      <div
        id="content"
        className="h-auto md:h-screen flex flex-col md:flex-row justify-center md:justify-evenly items-center py-4 mb-12 md:mb-6 gap-4 md:gap-12">
        <h1 className="contentTitle w-full md:w-1/2 text-center font-bold">
          404
        </h1>
        <p className="max-w-prose contentText w-full md:w-1/2 font-medium">
          Did you know what is the meaning of Error 404 or 404 not found?
          According to{" "}
          <Link
            className="text-blue-500 underline"
            href="https://www.geeksforgeeks.org/history-of-the-404-error/">
            GeeksforGeeks
          </Link>
          , &quot;a 404 not found error is an HTTP status code that indicates
          that the browser was able to communicate with a given server, but the
          server could not find what was requested. This error may also occur if
          the URL is not recognized in the browser.&quot; This could mean that
          you are entering part of the site that has not yet been created. Or
          you simply enter a non-existent URL to the address bar. Unfortunately,
          I have nothing to show here. But hey, props to you for trying. And
          now, please go back to the home page or maybe go visit the other page.
          I promise you I have something to show.
        </p>
      </div>
    </main>
  );
}
