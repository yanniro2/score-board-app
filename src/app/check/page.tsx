import Radio from "../../../components/Radio";

import ShowField from "../../../components/ShowField";
import { handleSubmit } from "../actions/TryServerAction";
export default async function page() {
  const res = await fetch("https://scoreboard.yalpos.com/api/score/1", {
    cache: "no-cache",
    next: {
      tags: ["press"],
    },
  });

  const jsonData = await res.json();
  return (
    <div>
      <form action={handleSubmit}>
        <input
          type="number"
          id="team_one_goal"
          name="team_one_goal"
          className="input"
          placeholder="enter value"
        />
        <h2 className="capitalize font-roboto font-normal tracking-wider flex items-center justify-center text-gray-500">
          drop goals
        </h2>
        <input
          type="number"
          id="team_two_goal"
          name="team_two_goal"
          className="input"
          placeholder="enter value"
        />

        {/* <Radio /> */}

        <button
          type="submit"
          className="bg-red-400 p-3 text-white disabled:bg-blue-400 transition">
          Submit
        </button>
      </form>
      <ShowField
        teamA={jsonData.data.team_one_goal}
        teamB={jsonData.data.team_two_goal}
        name={"drop goals"}
      />
      <div>{jsonData.data.layout}</div>
    </div>
  );
}
