import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { loader as themesLoader } from "./data/themes";

export const loader: LoaderFunction = async (args) => {
  return themesLoader(args);
};

export default function ThemesPage() {
  const { themes } = useLoaderData<typeof loader>();

  return (
    <div style={{ padding: 20 }}>
      <h2>Thema's van je store:</h2>
      <ul>
        {themes.map((theme: any) => (
          <li key={theme.id}>{theme.name}</li>
        ))}
      </ul>
    </div>
  );
}
