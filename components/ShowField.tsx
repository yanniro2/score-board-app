export default async function ShowField() {
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
  return <div>{jsonData_score.data.is_live}</div>;
}
