import Resource from "@/components/resourceTester/Resource";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="mt-16 text-black text-2xl font-bold">
        <span>
          Welcome to CodeCrib
        </span>
      </div>
    </div>
  );
}
