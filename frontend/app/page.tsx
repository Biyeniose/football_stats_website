import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import axios from "axios";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  const getData = async (): Promise<any> => {
    // API URL = http://api_service:8080
    const response = await axios.get("http://api_service:8080");

    return response.data;
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Foot&nbsp;</h1>
        <h1 className={title({ color: "green" })}>Legacy&nbsp;</h1>
        <br />

        <br />
        <h2 className={title()}>
          Immerse yourself in the history of European Football
        </h2>
        <h2 className={subtitle({ class: "mt-4" })}>
          Discover stats of the past
        </h2>
        <h2 className={subtitle({ class: "mt-4" })}>{getData()}</h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="flat">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
