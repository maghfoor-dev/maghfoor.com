import { Card } from "@/components/ui/card";
import codingTournament from "../public/images/coding-tournament.png";
import starAward from "../public/images/star-award.png";
import Image from "next/image";
import Link from "next/link";

const highlightsData = [
  {
    image: codingTournament,
    title: "Won Secure Code Tournament",
    description:
      "I won a keyboard and a Supercar Experience Day at my first very tech tournament. This was the secure code warrior security tournament held by IAGL.",
  },
  {
    image: starAward,
    title: "Received Company Wide Star Award",
    description:
      "Achieved the company-wide Star Award at IAGL in just 7 months for significant contributions. Recognised for making a difference!",
  },
];

export default function HeroSection() {
  return (
    <section className="p-4 mx-auto max-w-4xl">
      <div className="mb-4">
        <h1 className="text-3xl font-semibold leading-10 md:text-5xl md:leading-relaxed">
          Engineer, Builder,
          <br className="md:hidden" /> High Achiever.
        </h1>
        <div className="py-2">
          <p>I am Maghfoor. A full stack software engineer.</p>
          <p>
            Currently at{" "}
            <Link
              href={"https://www.iagloyalty.com/"}
              className="underline hover:text-blue-600"
              target="_blank"
            >
              IAG Loyalty
            </Link>
            , building products such as{" "}
            <Link
              href={"https://shopping.ba.com"}
              className="underline hover:text-red-600"
              target="_blank"
            >
              British Airways Estore
            </Link>{" "}
            and more.
          </p>
        </div>
      </div>
      <div>
        <h2 className="pb-2 text-2xl font-semibold md:text-3xl">HIGHLIGHTS</h2>
        <div className="flex flex-col gap-4 justify-between items-stretch md:flex-row">
          {highlightsData.map((highlight) => {
            return (
              <div key={highlight.image.blurDataURL} className="">
                {/* <Image
                  src={highlight.image}
                  alt=""
                  width={400}
                  height={300}
                  className="border border-black"
                  loading="lazy"
                /> */}
                {/* <p>{highlight.description}</p> */}
                <Card className="max-w-[400px] h-full">
                  <Image
                    src={highlight.image}
                    alt=""
                    width={400}
                    height={300}
                    className="rounded-t-md"
                    loading="lazy"
                  />
                  <div className="p-2">
                    <p className="font-bold">{highlight.title}</p>
                    <p>{highlight.description}</p>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
