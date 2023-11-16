import InputField from "../../../components/InputField";
import ShowField from "../../../components/ShowField";
import { handleSubmit } from "../actions/ServerAction";

export default async function YourPage() {
  const res = await fetch("https://score-demo.yalpos.com/api/score/2", {
    cache: "no-cache",
    next: {
      tags: ["press"],
    },
  });

  const jsonData = await res.json();

  return (
    <div>
      <form action={handleSubmit} className="flex flex-col gap-[1rem]">
        <InputField
          teamA={"team_one_try"}
          teamB={"team_two_try"}
          name={"try"}
        />

        <button
          type="submit"
          className="bg-red-400 p-3 text-white disabled:bg-blue-400 transition">
          Submit
        </button>
      </form>
      <ShowField
        teamA={jsonData.data.team_one_try}
        teamB={jsonData.data.team_two_try}
        name={"try"}
      />
    </div>
  );
}
