import Banner from "../../../../components/Banner";
import Details from "../../../../components/Details";
import Score from "../../../../components/Score";

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

export default async function Page({ params }: { params: { slug: string[] } }) {
  // Check if params and params.slug are defined
  const slugValue = params?.slug ? parseInt(params.slug[0], 10) : NaN;
  const res = await fetch("https://score-demo.yalpos.com/api/score/1", {
    next: { revalidate: 1 },
  });
  const data: [MatchData] = await res.json();

  // Check if slugValue is equal to 1
  if (!isNaN(slugValue) && slugValue < 100) {
    return (
      <div className=" text-white  md:text-[1rem] lg:text-[1rem] text-[1rem]   xl:text-[1rem] 2xl:text-[3rem] 4xl:text-[20rem]">
        {!data ? (
          <div className="w-screen h-screen flex items-center justify-center text-4xl text-white ">
            Match Loading...
          </div>
        ) : (
          <>
            <Score id={slugValue} />
            <Details id={slugValue} />
            <Banner />
          </>
        )}
      </div>
    );
  }

  // Check if params.slug is defined
  if (params?.slug) {
    return (
      <h1 className="md:text-[1rem] xl:text-[1rem]">
        Page not valid {typeof params.slug[0]}
      </h1>
    );
  }

  // If params is undefined, you might want to handle this case differently
  return <h1>Page not valid - No slug provided</h1>;
}
