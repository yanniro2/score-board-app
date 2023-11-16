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
        <label htmlFor="team_one_try">Team One Try</label>
        <input
          type="text"
          id="team_one_try"
          name="team_one_try"
          className="text-black"
        />

        <label htmlFor="team_two_try">Team Two Try</label>
        <input
          type="text"
          id="team_two_try"
          name="team_two_try"
          className="text-black"
        />

        <button
          type="submit"
          className="bg-red-400 p-3 text-white disabled:bg-blue-400 transition">
          Submit
        </button>
      </form>

      <div className="text-white">
        team one try :{jsonData.data.team_one_try}
      </div>
      <div className="text-white">
        team two try :{jsonData.data.team_two_try}
      </div>
    </div>
  );
}
