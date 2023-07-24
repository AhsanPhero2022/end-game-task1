import React, { useState } from "react";

const Colleges = () => {
  const [colleges, setColleges] = useState([
    {
      name: "ABC University",
      image:
        "https://images.shiksha.com/mediadata/images/1538121189phpdI5nkB.jpeg",
      searchHistory: [
        "Computer Science",
        "Electrical Engineering",
        "Business Administration",
      ],
      admissionDate: "2023-08-01",
      sports: ["Football", "Basketball", "Swimming"],
    },
    {
      name: "XYZ College",
      image:
        "https://static.student.com/storm-frontend-wp/uploads/2016/09/study-usa-Yale-840x556.jpg",
      searchHistory: ["Biology", "Chemistry", "Psychology"],
      admissionDate: "2023-09-01",
      sports: ["Tennis", "Volleyball", "Soccer"],
    },
    {
      name: "PQR Institute",
      image:
        "https://www.educationunlimited.com/blog/wp-content/uploads/2019/08/Webp.net-compress-image.jpg",
      searchHistory: ["Mathematics", "Physics", "Economics"],
      admissionDate: "2023-07-15",
      sports: ["Cricket", "Badminton", "Hockey"],
    },
  ]);
  console.log(setColleges);

  // const [colleges, setColleges] = useState([]);

  // console.log(colleges);
  // useEffect(() => {
  //   fetch("/colleges.json")
  //     .then((res) => res.json())
  //     .then((data) => setColleges(data));
  // }, []);

  return (
    <>
      <div className="flex gap-6 py-12">
        {colleges.map((college) => (
          <div
            className="mx-auto card card-compact w-96 bg-base-100 shadow-xl"
            key={college.id}
          >
            <figure>
              <img src={college.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {college.name}</h2>
              <p>Admission Date: {college.admissionDate}</p>
              <div className="flex">
                <p>Sports Name: {college.sports[1]}</p>
                <p>Search History: {college.searchHistory[1]}</p>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-success">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Colleges;
