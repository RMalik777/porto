import Link from "next/link";
import Image from "next/image";
import notfound from "/public/confused.svg";

export const metadata = {
  title: {
    absolute: "404 Not Found | Rafli Malik",
  },
  description: "Page not found.",
};

export default function notFound() {
  return (
    <main>
      <div className="flex h-dvh flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Image src={notfound} alt="Icon of a very confused person face" />
          <h1 className="title text-center font-black">404</h1>
          <div className="verticalLine w-1/2 rounded-sm border-b-4 border-l-0 border-solid border-black md:h-full md:w-0 md:border-b-0 md:border-l-4"></div>
          <h2 className="subtitle text-center font-medium">
            It&apos;s look like you are lost
          </h2>
        </div>
        <button className="defaultbtn dark:text-textdark rounded-full border-6 border-accent bg-transparent px-8 py-3 text-p font-semibold text-text transition-all duration-300 ease-out hover:bg-accent hover:text-textinvert hover:shadow-primarybtn hover:shadow-text">
          <Link href="/">Back to Home</Link>
        </button>
      </div>

      <div
        id="content"
        className="mb-12 flex h-auto flex-col items-center justify-center gap-4 py-4 md:mb-6 md:h-dvh md:flex-row md:justify-evenly md:gap-12">
        <h1 className="contentTitle w-full text-center font-bold md:w-1/2">
          404
        </h1>
        <p className="contentText w-full max-w-prose font-medium md:w-1/2">
          Did you know what is the meaning of Error 404 or 404 not found?
          According to{" "}
          <Link
            className="text-blue-500 underline duration-300 ease-out after:content-['_↗'] hover:text-blue-700"
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
