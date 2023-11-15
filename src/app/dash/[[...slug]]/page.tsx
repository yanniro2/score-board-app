import ScoreDashboard from "../../../../components/ScoreDashboard";

export default function Page({ params }: { params: { slug: string[] } }) {
  // Check if params and params.slug are defined
  const slugValue = params?.slug ? parseInt(params.slug[0], 10) : NaN;

  // Check if slugValue is equal to 1
  if (!isNaN(slugValue) && slugValue < 100) {
    return <ScoreDashboard id={slugValue} />;
  }

  // Check if params.slug is defined
  if (params?.slug) {
    return <h1>Page not valid {typeof params.slug[0]}</h1>;
  }

  // If params is undefined, you might want to handle this case differently
  return <h1>Page not valid - No slug provided</h1>;
}
