import Head from "next/head";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome to ALX Listing App</h1>
        <Card
          title="Sample Property"
          description="A beautiful home located in the city."
          image="/assets/placeholder.jpg"
        />
        <div className="mt-4">
          <Button label="Book Now" onClick={() => alert("Booked!")} />
        </div>
      </main>
    </div>
  );
}
