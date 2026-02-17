import Image from "next/image";
import MachuPicchu from './content/machupicchu.jpg';


export default function Home() {
  return (
    <div className="min-h-screen p-4 bg-amber-50">
      
      {/* Header */}
      <div className="rounded-md p-2" style={{ background: "var(--forest-moss)", color: "var(--willow-green)" }}>
        <h1 className="text-4xl font-bold ml-4">IN WILD TRAVELS</h1>
        <p className="mt-1 ml-4 text-sm">Take your next trip with In Wild Travels.</p>
      </div>
      {/* Main content */}

      {/* Top Section */}
      <div className="flex flex-col items-center mt-10">
        <Image
          src={MachuPicchu}
          alt="Travel Image"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg p-2 shadow-green-950"
          style={{background: "var(--black-forest)"}}
        />
        <p className="mt-4 text-center">Discover new destinations and adventures.</p>
      </div>
      {/* About Section */}
      <div className="mt-16 px-4">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p>
          In Wild Travels is your go-to travel agency for unforgettable experiences. We specialize in crafting personalized travel itineraries that cater to your unique preferences and interests. Whether you're seeking a relaxing beach getaway, an adventurous mountain trek, or a cultural city tour, we have the expertise to make your dream trip a reality.
        </p>
      </div>

      {/* Footer */}
    </div>
  );
}
