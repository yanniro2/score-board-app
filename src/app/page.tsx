import Banner from "../../components/Banner";
import Details from "../../components/Details";
import Score from "../../components/Score";

export default function Home() {
  return (
    <section className="w-screen h-screen flex flex-col items-center gap-[1rem] bg-gray-950">
      <Score />
      <Details />
      <Banner />
    </section>
  );
}
