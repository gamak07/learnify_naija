import React from "react";

const TopStudents = () => {
  const topPerformers = [
    {
      pic: "/images/aisha.jpg",
      name: "Aisha Mohammad",
      subject: "Mathematics",
      score: 98,
    },
    {
      pic: "/images/chinedu.jpg",
      name: "Chinedu Okonkwo",
      subject: "Physics",
      score: 96,
    },
    {
      pic: "/images/ngozi.jpg",
      name: "Ngozi Adeyemi",
      subject: "Biology",
      score: 95,
    },
    {
      pic: "/images/oluwaseun.jpg",
      name: "Oluwaseun Adeleke",
      subject: "Chemistry",
      score: 94,
    },
    {
      pic: "/images/fatima.jpg",
      name: "Fatima Ibrahim",
      subject: "English",
      score: 93,
    },
  ];
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-lg font-semibold mb-4">Top Performing Students</h1>
      <div className="space-y-4">
        {topPerformers.map((student, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={student.pic}
                alt={student.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{student.name}</p>
                <p className="opacity-70 text-xs">{student.subject}</p>
              </div>
            </div>
            <div className="text-white text-xs px-3 py-1 rounded-full font-medium bg-indigo-500 ">
              {student.score}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStudents;
