import Login from "~/components/shared/login";
import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <Login />
    </HydrateClient>
  );
}
