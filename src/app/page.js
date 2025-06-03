import HomePage from "./components/home/HomeClientWrapper";

export default async  function Home() {
  return (
    <div>
      <HomePage/>
    </div>
  );
}




export const metadata = {
  title: "Home | My Site",
  description: "Welcome to my site!",
};
