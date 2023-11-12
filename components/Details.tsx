"use server";
import SubPoints from "./SubPoints";

const Details = async () => {
  const res = await fetch("https://score-demo.yalpos.com/api/score/1", {
    next: { revalidate: 5 },
  });
  const responseData = await res.json();

  return (
    <div className="container h-[50vh] mx-auto bg-gray-900 rounded-xl p-5 text-white text-center">
      <h1 className="text-lg font-roboto font-semibold">Match Details</h1>

      <div className="flex items-center justify-evenly">
        <h2 className="h2">team A total</h2>
        <h2 className="uppercase font-poppins font-medium tracking-wider flex items-center justify-center gap-3 p-3 px-[2rem] rounded-full underline text-gray-500 ">
          vs Changes
        </h2>

        <h2 className="h2">team B total</h2>
      </div>

      <div className="flex flex-col gap-[1rem]">
        <SubPoints
          teamA={responseData?.data.team_one_try}
          name={"Try"}
          teamB={responseData?.data.team_two_try}
        />
        <SubPoints
          teamA={responseData?.data.team_one_conversion}
          name={"conversion"}
          teamB={responseData?.data.team_two_conversion}
        />
        <SubPoints
          teamA={responseData?.data.team_one_penalty}
          name={"penalty"}
          teamB={responseData?.data.team_two_penalty}
        />
        <SubPoints
          teamA={responseData?.data.team_one_goal}
          name={"drop goals"}
          teamB={responseData?.data.team_two_goal}
        />
      </div>
    </div>
  );
};

export default Details;
