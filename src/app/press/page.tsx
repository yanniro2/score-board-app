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
import TeamNames from "../../../components/dashboard/TeamNames";
import ShowTime from "../../../components/dashboard/ShowTime";
import SubmitBtn from "../../../components/dashboard/SubmitBtn";

export default async function Page() {
  const res_score = await fetch("https://scoreboard.yalpos.com/api/score/1", {
    cache: "no-cache",
    next: {
      tags: ["press"],
    },
  });

  const jsonData_score = await res_score.json();

  const res_match = await fetch("https://scoreboard.yalpos.com/api/match/1", {
    cache: "no-cache",
    next: {
      tags: ["press"],
    },
  });

  const jsonData_match = await res_match.json();

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

  return (
    <div>
      <form
        action={handleSubmit}
        className="flex  gap-[1rem]   items-start h-full">
        <div className="box-2 p-3">
          {/* <LiveStop /> */}

          <VsChange layouts={vsChange} title="Vs Change" />

          <Radio layouts={layoutOptions} title="layout" />
        </div>
        <div className="box-2 ">
          <ShowTime time={jsonData_match.success.match.match_duration} />

          <div className="flex w-full h-min bg-slate-900  flex-col gap-[1rem] rounded-xl">
            <TeamNames
              nameA={jsonData_match.success.match.team_one_name}
              nameB={jsonData_match.success.match.team_two_name}
            />
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
          </div>
        </div>
        <SubmitBtn />
      </form>
      <ShowField />
    </div>
  );
}
