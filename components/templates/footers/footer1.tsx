import Image from "next/image";
import { widthForImage, heightForImage } from "@/lib/builtjs-utils";

interface FooterContent {
  data?: {
    columns?: Array<{
      title: string;
      links?: Array<{ label: string; href: string }>;
    }>;
    contactInfo?: {
      address?: string;
      city?: string;
      email?: string;
      phone?: string;
    };
  };
  global?: {
    name?: string;
    logo?: {
      url: string;
      width: number;
      height: number;
    };
  };
}

export default function Footer1({ content }: { content?: FooterContent }) {
  const { data, global } = content || {};
  const currentYear = new Date().getFullYear();
  console.log('footer')
console.log({content})
  return (
    <footer className="py-8 border-t md:py-12">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About Us</h3>
            <div className="flex items-center gap-2 mb-4">
              {global?.logo && (
                <Image
                  src={global.logo.url}
                  alt={global?.name || "Logo"}
                  width={widthForImage(global.logo)}
                  height={heightForImage(global.logo)}
                />
              )}
            </div>
            <p className="text-sm text-gray-600">
              {global?.name || "Corporate ShadCN"} provides innovative solutions for modern businesses.
            </p>
          </div>
          {data?.columns?.map((column, index) => (
            <div key={index}>
              <h3 className="mb-4 text-lg font-semibold">{column.title}</h3>
              <ul className="space-y-2">
                {column.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">
                {data?.contactInfo?.address || "123 Business Street"}
              </li>
              <li className="text-sm text-gray-600">
                {data?.contactInfo?.city || "City, State 12345"}
              </li>
              <li className="text-sm text-gray-600">
                {data?.contactInfo?.email || "contact@corporate-shadcn.com"}
              </li>
              <li className="text-sm text-gray-600">
                {data?.contactInfo?.phone || "(555) 123-4567"}
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center border-t">
          <p className="text-sm text-gray-600">
            © {currentYear} {global?.name || "Corporate ShadCN"}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}