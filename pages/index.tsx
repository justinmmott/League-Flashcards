import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { BASE_URL } from "../util/utils";

const Home: NextPage = () => {
  const [champions, setChampions] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const patchVersion = (
        await (
          await fetch(`${BASE_URL}/api/versions.json`, {
            method: "GET",
          })
        ).json()
      ).data;
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
        <div key={x}>{x}</div>
      ))}
    </div>
  ) : (
    <div className={styles.container}>Hello World! asdfsa</div>
  );
};

export default Home;
