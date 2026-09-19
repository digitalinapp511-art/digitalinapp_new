// Gallery.jsx

// ===== Import Images =====
import fun1 from "../assets/fun1.png";
import fun2 from "../assets/fun2.jpeg";
import fun3 from "../assets/fun3.jpeg";

import go1 from "../assets/go1.jpeg";
import go2 from "../assets/go2.jpeg";
import go3 from "../assets/go3.png";

import team1 from "../assets/team1.jpeg";
import team2 from "../assets/team2.jpeg";
import team3 from "../assets/team3.jpeg";

// ===== Gallery Data =====
const galleryData = [
  {
    title: " Fun Fridays",
    images: [fun1, fun2, fun3],
  },
  {
    title: " Grand Opening",
    images: [go1, go2,go3],
  },
  {
    title: "Our Team",
    images: [  team1, team2, team3],
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-purple-800">
            Our Gallery
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Capturing memories and celebrating moments together
          </p>
        </div>

        {/* Gallery Sections */}
        {galleryData.map((section, index) => (
          <div key={index} className="mb-20">
            <h2 className="text-3xl font-bold text-purple-700 border-l-4 border-purple-600 pl-4 mb-8">
              {section.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.images.map((img, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border border-purple-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={img}
                    alt={section.title}
                    className="w-full h-72 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;