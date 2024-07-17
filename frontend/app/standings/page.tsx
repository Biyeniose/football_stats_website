"use client";

import { Button, Accordion, AccordionItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import { title } from "@/components/primitives";
import LogoImage from "@/components/logos/LogoImage";

export default function StandingsPage() {
  const router = useRouter();

  const imageUrl =
    "https://tmssl.akamaized.net/images/wappen/homepageWappen70x70/5679.png?lm=1489787850";
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <h1 className={title()}>Standings</h1>
      <Accordion variant="shadow">
        <AccordionItem key="1" aria-label="Accordion 1" title="Premier League">
          <div className="flex flex-wrap gap-4 items-center py-6">
            <Button
              color="default"
              size="lg"
              startContent={<LogoImage url={imageUrl} />}
              onClick={() => router.push("/data")}
            />
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
          </div>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
          <Table hideHeader aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>STATUS</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>Arsenal FC</TableCell>
                <TableCell>
                  {
                    <Button
                      color="default"
                      size="lg"
                      startContent={<LogoImage url={imageUrl} />}
                      onClick={() => router.push("/data")}
                    />
                  }
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>Zoey Lang</TableCell>
                <TableCell>
                  {
                    <Button
                      color="default"
                      size="lg"
                      startContent={<LogoImage url={imageUrl} />}
                      onClick={() => router.push("/data")}
                    />
                  }
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>Jane Fisher</TableCell>
                <TableCell>
                  {
                    <Button
                      color="default"
                      size="lg"
                      startContent={<LogoImage url={imageUrl} />}
                      onClick={() => router.push("/data")}
                    />
                  }
                </TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>William Howard</TableCell>
                <TableCell>Vacation</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  );
}
