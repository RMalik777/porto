import { about } from "@/app/About/aboutdata";
import Image from "next/image";

export const dynamicParams = false;

export async function generateStaticParams() {
  return about.map((target) => ({
    id: target.htmlid,
  }));
}

export const metadata = {
  title: "",
  description: "",
};

// !Add More Image or Carousel
export default async function page({ params }) {
  const item = about.find((target) => target.htmlid === params.id);
  const description = item.longdesc;
  const introList = description[0].intro.map((target, i) => (
    <p key={i} className="max-w-prose mb-4 text-left break-words">
      {target}
    </p>
  ));
  const mainList = description[1].main.map((target, i) => (
    <p key={i} className="max-w-prose mb-4 text-left break-words">
      {target}
    </p>
  ));
  const closingList = description[2].closing.map((target, i) => (
    <p key={i} className="max-w-prose mb-4 text-left break-words">
      {target}
    </p>
  ));
  const image = item.picture;
  const thumbnail = image.thumbnail;
  const img1 = image.img1;
  const img2 = image.img2;
  const img3 = image.img3;
  const img4 = image.img4;

  metadata.title = item.title;
  metadata.description = item.description;

  const url =
    "https://api.api-ninjas.com/v1/quotes?category=" + item.apicategory;
  const key = process.env.API_Key;
  const headers = {
    method: "GET",
    "X-Api-Key": key,
  };
  // ?Fix API not updating

  const getQuote = async () => {
    try {
      const result = await fetch(url, {
        headers: {
          "X-Api-Key": key,
        },
        cache: "no-store",
        revalidate: 0,
      });
      const data = await result.json();
      if (data.error) {
        throw new Error(data.error);
      }
      return data;
    } catch (error) {
      console.log(error);
      return [
        {
          quote:
            "The aim of education is the knowledge, not of facts, but of values.",
          author: "William S. Burroughs",
          category: "knowledge",
        },
      ];
    }
  };
  const getquotes = await getQuote();
  const quotes = getquotes[0];

  return (
    <main className="h-auto flex flex-col items-center pt-24 md:pt-32 lg:pt-48 px-2 lg:px-8">
      <div id="thumbnail" className="mb-4 lg:mb-16">
        <h1 translate="no" className="text-center font-bold tracking-wide">
          {item.title}
        </h1>
        <h5 className="text-center font-medium">{item.location}</h5>
      </div>
      <figure className="w-full py-8 mb-2 lg:mb-8">
        <Image
          className="w-full h-auto duration-1000 ease-out"
          src={thumbnail.source}
          width={1000}
          height={1000}
          quality={100}
          alt={thumbnail.alt}
          priority={true}
        />
        <figcaption className="w-fit font-medium">{thumbnail.capt}</figcaption>
      </figure>

      <blockquote className="max-w-prose max-md:px-4 mb-4 lg:mb-16 py-4">
        <h6 className="max-w-prose w-full font-bold">
          &quot;{quotes.quote}&quot;
        </h6>
        <cite className="font-medium">&ndash; {quotes.author}</cite>
      </blockquote>

      <div id="intro" className="mb-4 flex flex-col items-center ">
        {introList}
      </div>

      <div id="main" className="mb-4 flex flex-col lg:flex-row gap-4 lg:gap-8 items-center lg:items-center">
        <figure className="w-11/12 lg:w-1/2 pt-4">
          <Image
            className="w-full h-auto"
            src={img1.source}
            width={700}
            height={700}
            quality={100}
            alt={img1.alt}
          />
          <figcaption className="w-fit font-medium">{img1.capt}</figcaption>
        </figure>
        <div>{mainList}</div>
      </div>

      <div id="closing" className="mb-4 flex flex-col gap-8 items-center ">
        <div>{closingList}</div>
        <figure className="w-full lg:w-11/12">
          <Image
            className="w-full h-auto"
            src={img2.source}
            width={1000}
            height={1000}
            quality={100}
            alt={img2.alt}
          />
          <figcaption className="w-fit font-medium">{img2.capt}</figcaption>
        </figure>
        <div
          id="imgarea"
          className="w-full flex flex-col lg:flex-row gap-4 items-center justify-evenly"
        >
          <figure className="w-full lg:w-2/5">
            <Image
              className="w-auto h-auto"
              src={img3.source}
              width={700}
              height={700}
              quality={100}
              alt={img3.alt}
            />
            <figcaption className="w-fit font-medium">{img3.capt}</figcaption>
          </figure>
          <figure className="w-full lg:w-2/5">
            <Image
              className="w-auto h-auto"
              src={img4.source}
              width={700}
              height={700}
              quality={100}
              alt={img4.alt}
            />
            <figcaption className="w-fit font-medium">{img4.capt}</figcaption>
          </figure>
        </div>
      </div>
    </main>
  );
}
