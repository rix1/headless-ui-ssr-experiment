import { Combobox } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
import { commonModuleExport } from "../forked-deadlock/common-module";

const addresses = [
  "Lansenvägen 24, 18762 Täby",
  "Kungälvsgatan 9B, 41669 Göteborg",
  "Knaståsvägen 130, 43993 Onsala",
  "Nytorpsvägen 6, 13246 Saltsjö-Boo",
  "Syltevägen 90, 46155 Trollhättan",
  "Skolvägen 4, 57790 Vena",
  "Tidlösavägen 5, 29150 Kristianstad",
  "Knaståsvägen 130, 43993 Onsala",
  "Säfflegatan, 12344 Farsta",
  "Östra Gatan 23, 44231 Kungälv",
  "Återlögavägen 17, 13464 Ingarö",
  "Petter Hernquists väg 19, 44334 Lerum",
  "Östra Ringgatan 8, 33234 Gislaved",
  "Anders Spolegatan 26, 55448 Jönköping",
  "Östra Bockskärsvägen 8, 43993 Onsala",
  "Klaravägen 32, 91332 Holmsund",
  "Herrhagsvägen 63, 12260 Enskede",
  "Hagarydsgatan 31, 57142 Nässjö",
  "Mejselvägen 9, 85350 Sundsvall",
];

export default function Home() {
  commonModuleExport();

  const comboboxRef = useRef();
  const nativeRef = useRef();

  const [selectedPerson, setSelectedPerson] = useState(null);
  const [query, setQuery] = useState("");

  const filterAdaddresses =
    query === ""
      ? addresses
      : addresses.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  useEffect(() => {
    console.table([
      ["native", nativeRef.current?.value],
      ["headlessUI", comboboxRef.current?.value],
    ]);

    setQuery(nativeRef.current?.value);
  }, []);

  return (
    <>
      <h1>This page is slow to hydrate</h1>
      <p>
        In <code>entry-client.jsx</code> I've added a timeout to the hydration
        of 4 sec. The box will change color once hydrated.
      </p>

      <input placeholder="native" ref={nativeRef} type="text" />
      <Combobox defaultValue={query}>
        <Combobox.Input
          ref={comboboxRef}
          placeholder="headlessUI"
          onChange={(event) => setQuery(event.target.value)}
        />
        <Combobox.Options>
          {filterAdaddresses.map((person) => (
            <Combobox.Option
              key={person}
              value={person}
              className={({ active }) => (active ? "active" : "")}
            >
              {person}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>

      <p>
        Try writing in the input fields before hydration and see the console for
        results after hydration.
      </p>
    </>
  );
}
