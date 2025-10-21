import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";



export default async function Home() {
    const user = await currentUser();
    if (!user) {
      return <Guest />;
    }
  return (
    <div className="text-4xl text-blue-900">
      <h1>Welcome to traker sleep</h1>
    </div>
  );
}
