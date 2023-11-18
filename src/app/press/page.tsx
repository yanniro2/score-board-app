import InputField from "../../../components/InputField";
import Radio from "../../../components/Radio";
import ShowField from "../../../components/ShowField";
import { handleSubmit } from "../actions/ServerAction";
import {
  RiLayoutFill,
  RiLayout2Fill,
  RiLayoutColumnFill,
  RiLayoutGridFill,
} from "react-icons/ri";
import { MdChangeCircle } from "react-icons/md";
import { IoCheckmarkCircle } from "react-icons/io5";
import VsChange from "../../../components/VsChange";
import LiveStop from "../../../components/LiveStop";

export default async function Page() {
  const res = await fetch("https://scoreboard.yalpos.com/api/score/1", {
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
      icon: <RiLayout2Fill />,
      name: "layout",
    },
    {
      value: "layout3",
      label: "Layout 3",
      icon: <RiLayoutColumnFill />,
      name: "layout",
    },
    {
      value: "layout4",
      label: "Layout 4",
      icon: <RiLayoutGridFill />,
      name: "layout",
    },
  ];

  const vsChange = [
    {
      value: "vs",
      label: "Vs",
      icon: <IoCheckmarkCircle />,
      name: "is_change",
    },
    {
      value: "change",
      label: "Change",
      icon: <MdChangeCircle />,
      name: "is_change",
    },
  ];

  const live = [
    {
      value: "Live",
      label: "Live",
      icon: <IoCheckmarkCircle />,
      name: "is_live",
    },
    {
      value: "Stop",
      label: "Stop",
      icon: <MdChangeCircle />,
      name: "is_live",
    },
  ];

  return (
    <div>
      <form
        action={handleSubmit}
        className="flex flex-col gap-[1rem] bg-gray-900">
        <LiveStop layouts={live} title={"Live / Stop"} />
        <VsChange layouts={vsChange} title="Vs Change" />

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

        <Radio layouts={layoutOptions} title="layout" />

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
