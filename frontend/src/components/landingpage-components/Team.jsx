import { Linkedin, Twitter, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const defaultMembers = [
  {
    name: "Olivia Rhye",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Phoenix Baker",
    role: "Engineering Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Lana Steiner",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Demi Wilkinson",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Zahra Christensen",
    role: "Backend Developer",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Caitlyn King",
    role: "Product Designer",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
  },
  {
    name: "Zaid Schwartz",
    role: "UX Researcher",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Marco Kelly",
    role: "Customer Success",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
  },
];

export default function Team({
  title = "Leadership team",
  subtitle = "Our team",
  description = "We’re building the future of software development.",
  members = defaultMembers
}) {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Header */}
        <p className="text-sm text-purple-400 mb-3">{subtitle}</p>
        <h2 className="text-4xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-400 mb-16">
          {description}
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-14 gap-x-8">
          {members.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${index === 0 && member.name === "Olivia Rhye" ? "cursor-pointer" : ""}`}
              onClick={() => index === 0 && member.name === "Olivia Rhye" && navigate('/trades')}
            >
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border border-gray-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="font-medium">{member.name}</h3>

              {/* Role */}
              <p className="text-sm text-gray-400 mb-3">
                {member.role}
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 text-gray-500">
                <a href="#" className="hover:text-purple-400 transition">
                  <Twitter size={16} />
                </a>
                <a href="#" className="hover:text-purple-400 transition">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="hover:text-purple-400 transition">
                  <Globe size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
