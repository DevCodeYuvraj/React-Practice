import { user } from "react"
import { DynamicHeader } from "../components/DynamicHeader";
import { DynamicFooter } from "../components/DynamicFooter";
import DynamicProfileCard from "../components/DynamicProfileCard";
function DynamicProfileCardPage() {

  const students = [
    {
      username: "John_Doe",
      role: "Frontend Development Student",
      description: "I enjoy building clean and responsive user interfaces using React.",
      image: "https://randomuser.me/api/portraits/men/0.jpg"
    },
    {
      username: "Carlos_Smith",
      role: "Backend Development Student",
      description: "I enjoy building clean and responsive user interfaces using React.",
      image: "https://randomuser.me/api/portraits/men/93.jpg"
    },
    {
      username: "Rachel_Jones",
      role: "Full Stack Development Student",
      description: "I enjoy building clean and responsive user interfaces using React.",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
  ];

  return (
    <div >
      <DynamicHeader />

      <div className="cards">
        {students.map((item, index) => (
          <DynamicProfileCard
            key={index}
            username={item.username}
            role={item.role}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>

      <DynamicFooter /> 

    </div>
  );
} 
export default DynamicProfileCardPage;