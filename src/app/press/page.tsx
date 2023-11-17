import InputField from "../../../components/InputField";
import Radio from "../../../components/Radio";
import ShowField from "../../../components/ShowField";
import { handleSubmit } from "../actions/ServerAction";
import { RiLayoutFill } from "react-icons/ri";

export default async function Page() {
  const res = await fetch("https://score-demo.yalpos.com/api/score/2", {
    cache: "no-cache",
    next: {
      tags: ["press"],
    },
  });

  const jsonData = await res.json();

  const layoutOptions = [
    {
      value: "layout1",
      label: "Layout 1",
      icon: <RiLayoutFill />,
      name: "layout",
    },
    {
      value: "layout2",
      label: "Layout 2",
      icon: <RiLayoutFill />,
      name: "layout",
    },
    // ... other layout options
  ];
  return (
    <div>
      <form
        action={handleSubmit}
        className="flex flex-col gap-[1rem] bg-gray-900">
        <InputField
          teamA={"team_one_try"}
          teamB={"team_two_try"}
          name={"try"}
        />

        <InputField
          teamA={"team_one_conversion"}
          teamB={"team_two_conversion"}
          name={"conversion"}
        />

        <InputField
          teamA={"team_one_penalty"}
          teamB={"team_two_penalty"}
          name={"penalty"}
        />

        <InputField
          teamA={"team_one_goal"}
          teamB={"team_two_goal"}
          name={"drop goals"}
        />

        <Radio layouts={layoutOptions} />

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
    </div>
  );
}
