import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../util/utils";
import Image from "next/image";

const ChampionPage: NextPage = () => {
  const router = useRouter();
  const { champion: championName } = router.query;
  const [championPic, setChampionPic] = useState("");

  useEffect(() => {
    if (championName && typeof championName === "string") {
      const formattedChampionName = ((name: string) => {
        const temp = name.toLowerCase();
        return temp.charAt(0).toUpperCase() + name.slice(1);
      })(championName);
      (async () => {
        const championData = (
          await (
            await fetch(
              `${BASE_URL}/cdn/12.11.1/data/en_US/champion/${formattedChampionName}.json`,
              {
                method: "GET",
              }
            )
          ).json()
        ).data[formattedChampionName];
        console.log("champion data", championData);
        setChampionPic(
          `${BASE_URL}/cdn/12.11.1/img/${championData.image.group}/${championData.image.full}`
        );
      })();
    }
  }, [championName]);

  return championPic ? (
    <Image src={championPic} alt={`${championName}'s picture`} layout="fill" />
  ) : (
    <div> loading... </div>
  );
};

export default ChampionPage;
