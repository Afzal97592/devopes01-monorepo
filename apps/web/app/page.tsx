import { client } from "@repo/db/client";

export default async function Home() {
  console.log("callll");
  const user = await client.user.findFirst();
  console.log(user, "userData___1");

  return (
    <div>
      {user?.username}
      {user?.password}
    </div>
  );
}
