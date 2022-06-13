import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const testimonials = [
    {
      id: 1,
      img: "https://scontent-lhr8-2.xx.fbcdn.net/v/t1.6435-1/184570497_2002207606603555_2450776307050787279_n.jpg?stp=dst-jpg_p480x480&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=_q7yp1yaCK4AX9_e5pJ&_nc_ht=scontent-lhr8-2.xx&oh=00_AT_qvWvDAngQ72GgrBjFikDs223McE6iiTyeIlVa9YpuoA&oe=62C6EC97",
      name: "Milan Neupane",
      designation: "Student",
      testimonial:
        "Uniladder Consultancy is one transparent organisation, which will help you with your admissions, will guide you with everything and will expect nothing in return. The best out of all. Special thanks to Mr. Ganesh Khadka, (CEO at Uniladder Consultancy), a British Certified Councilor who has guided me 24/7 that's the best part of him and I loved the most. I never felt helpless due to his guidance and support throughout the process. He supported very patiently and I really appreciate his time and effort in getting my VISA done. Counselor's team are very well informed and experienced. They are aware of all the steps a student faces while applying to a university/college abroad and provide comprehensive support throughout. The entire processing charge by this organization is of very low cost which will definitely add bonus for a student. Overall an incredible service and I had a great experience! I recommend it to everyone who wants to go for abroad study from Nepal specially the UK .",
    },
    {
      id: 2,
      img: "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/286473352_10220647745005357_833046514730243823_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_wX44So-Py8AX_Huxxb&_nc_ht=scontent-lhr8-2.xx&oh=00_AT8xy7lPCMrboSHuwGoZrCBAN83Hz_NX0PPPM39UsNemlg&oe=62ACABA6",
      name: "Shasmita Badal",
      designation: "Student",
      testimonial:
        "My mission impossible got possible because of dedicated staff of Uniladder. I will sure recommend my friends to consult uniladder staff.Once again Thank you from bottom of my heart.",
    },
    {
      id: 3,
      img: "https://scontent-lhr8-1.xx.fbcdn.net/v/t31.18172-8/12771653_574587682709519_6500010729363291550_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=CCttbjKLy-gAX90Ai-w&_nc_ht=scontent-lhr8-1.xx&oh=00_AT-b2aUC-JWQHJSmKUH0dv1NA5AGgP5LWeRYQKBOkKxH4g&oe=62C7E80D",
      name: "Amar Gurung",
      designation: "Student",
      testimonial:
        "I found this consultancy through youtube then I directly contacted Mr Ganesh Khadka and he helped me with  excellent counselling as well as helped me for finding best course and university. He and his team is fully committed to fullfil the students dream. Through out the my processing i found Mr Ganesh Khadka and his team are very supportive and helpful. For those who want to pursue their abroad education in uk I highly recommend Mr Ganesh Khadka and his team. I sincerely thanks to Mr Ganesh Khadka and his team especially miss manisha and. Manshi for helping me.",
    },
  ];

  return (
    <div className="testimonial-section">
      <div className="container mx-auto section">
        <h2 className="main-title">Testimonials</h2>
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.length && (
              <>
                <div className="testimonial-wrapper">
                  <div className="testimonial-content">
                    <img
                      src={testimonials[currentIndex].img}
                      className="testimonial-img"
                      alt=""
                    />
                    <p className="testimonial-text">
                      "{testimonials[currentIndex].testimonial}"
                    </p>
                    <h4 className="testimonial-title">
                      {testimonials[currentIndex].name}
                    </h4>
                    <h5 className="testimonial-designation">
                      {testimonials[currentIndex].designation}
                    </h5>
                  </div>
                </div>
                <div className="testimonial-wrapper">
                  <div className="testimonial-content">
                    <img
                      src={testimonials[currentIndex + 1].img}
                      className="testimonial-img"
                      alt=""
                    />
                    <p className="testimonial-text">
                      "{testimonials[currentIndex + 1].testimonial}"
                    </p>
                    <h4 className="testimonial-title">
                      {testimonials[currentIndex + 1].name}
                    </h4>
                    <h5 className="testimonial-designation">
                      {testimonials[currentIndex + 1].designation}
                    </h5>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="testimonial-controls flex">
            <div
              className="flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 2
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft size={36} />
            </div>
            <div
              className="flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 2
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight size={36} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
