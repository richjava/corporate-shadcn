import { Button } from "@/components/ui/button";
import Image from "next/image";
import { widthForImage, heightForImage } from "@/lib/builtjs-utils";

interface CoverContent {
  data?: {
    heading?: string;
    blurb?: string;
    image?: {
      url: string;
      width: number;
      height: number;
    };
    primaryButtonText?: string;
    secondaryButtonText?: string;
  };
}

export default function Cover1({ content }: { content?: CoverContent }) {
  const { data } = content || {};
  
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            {data?.heading || "Transform Your Business with Modern Solutions"}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {data?.blurb || "Empower your organization with cutting-edge technology and expert consulting services. We help businesses thrive in the digital age."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              {data?.primaryButtonText || "Get Started"}
            </Button>
            <Button variant="outline" size="lg">
              {data?.secondaryButtonText || "Learn More"}
            </Button>
          </div>
          {data?.image && (
            <div className="mt-12">
              <Image
                src={data.image.url}
                alt="Cover image"
                width={widthForImage(data.image)}
                height={heightForImage(data.image)}
                className="rounded-lg shadow-xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}