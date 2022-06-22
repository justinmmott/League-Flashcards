import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BASE_URL } from "../util/utils";

const Home: NextPage = () => {
  const [champions, setChampions] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const patchVersion = await (
        await fetch(`${BASE_URL}/api/versions.json`, {
          method: "GET",
        })
      ).json();
      const championsFromAPI = (
        await (
          await fetch(
            `${BASE_URL}/cdn/${patchVersion[0]}/data/en_US/champion.json`,
            {
              method: "GET",
            }
          )
        ).json()
      ).data;
      setChampions(Object.keys(championsFromAPI));
    })();
  }, []);

  return champions.length > 0 ? (
    <div>
      {champions.map((x) => (
        <Link href={`/champion/${x}`} key={x}>
          {x}
        </Link>
      ))}
    </div>
  ) : (
    <div>Hello World! asdfsa</div>
  );
};

export default Home;
