import { useRouter } from "next/router";

const ChampionPage = () => {
  const router = useRouter();
  const { champion: championName } = router.query;

  console.log(championName);
};

export default ChampionPage;
