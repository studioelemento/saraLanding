import React from "react";

export const courses = [
  {
    id: 1,
    title: "Sara Diploma Course in Aviation, Hospitality and Travel Management",
    formValue: "Diploma Course in Aviation, Hospitality and Travel Management",
    duration: "Duration: 12 Months, 5 days/week (Mon-Fri) 2 hours",
  },
  {
    id: 2,
    title: "PG Diploma Course in Aviation, Hospitality and Travel Management",
    formValue: "PG Diploma Course in Aviation, Hospitality and Travel Management",
    duration: "Duration: 6 Months, 5 days/week (Mon-Fri) 2 hours",
  },
  {
    id: 3,
    title: "Foundation in Travel & Tourism with Amadeus",
    formValue: "Foundation in Travel & Tourism with Amadeus",
    duration: "Duration: 8 Months, 5 days/week (Mon-Fri) 2 hours",
  },
  {
    id: 4,
    title: "Airport Operations Fundamentals",
    formValue: "Airport Operations Fundamentals",
    duration: "Duration: 6 Months, 5 days/week (Mon-Fri) 2 hours",
  },
  {
    id: 5,
    title: "Cargo Introductory Course",
    formValue: "Cargo Introductory Course",
    duration: "Duration: 6 Months, 5 days/week (Mon-Fri) 2 hours",
  },
  {
    id: 6,
    title: "Passenger Ground Services Course",
    formValue: "Passenger Ground Services Course",
    duration: "Duration: 6 Months, 5 days/week (Mon-Fri) 2 hours",
  },
];

export default function AviationCourses({ onSelectCourse }) {
  const handleCourseClick = (course) => {
    if (onSelectCourse) {
      onSelectCourse(course.formValue || course.title);
    }
    const formCard = document.getElementById("enquiry-form-card");
    if (formCard) {
      formCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="aviation-courses" className="w-full bg-gray-100 py-12 md:py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-lg md:text-xl font-bold mb-6 md:mb-8 text-gray-900 border-l-4 border-accent pl-4 font-outfit">
          Courses We Offer
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              onClick={() => handleCourseClick(course)}
              role="button"
              tabIndex={0}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-accent/40 cursor-pointer transition border border-gray-100 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl group-hover:scale-125 transition-transform duration-300 select-none">
                  ✈️
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 leading-snug group-hover:text-accent transition-colors">
                    {course.title}
                  </h4>
                  <p className="text-[12px] font-medium text-gray-500 mt-2 uppercase tracking-wider">
                    {course.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
