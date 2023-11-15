import Banner from "../../../components/Banner";
import Details from "../../../components/Details";
import Score from "../../../components/Score";

export const revalidate = true;
interface MatchData {
  success: boolean;
  result: string;
  data: {
    id: number;
    match_id: number;
    additional_duration: string;
    team_one_total: string;
    team_two_total: string;
    team_one_try: string;
    team_two_try: string;
    team_one_conversion: string;
    team_two_conversion: string;
    team_one_penalty: string;
    team_two_penalty: string;
    team_one_goal: string;
    team_two_goal: string;
    created_at: string;
    updated_at: string;
  };
}

const Page = async () => {
  const res = await fetch("https://score-demo.yalpos.com/api/score/1", {
    next: { revalidate: 1 },
  });

  const data: [MatchData] = await res.json();

  return (
    <div className="text-white 2xl:text-[3rem] 4xl:text-[20rem]">
      {!data ? (
        <div className="w-screen h-screen flex items-center justify-center text-4xl text-white ">
          Match Loading...
        </div>
      ) : (
        <>
          <Score />
          <Details />
          <Banner />
        </>
      )}
    </div>
  );
};

export default Page;
