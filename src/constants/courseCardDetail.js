import course1 from "../assets/course1.png";
import course2 from "../assets/course2.png";
import course3 from "../assets/course3.png";

import img1 from "../assets/profile1.png";
import img2 from "../assets/profile2.png";
import img3 from "../assets/profile3.png";

export const courseCardDetail = [
  {
    id: 1,
    key: "a",
    courseBanner: course1,
    courseTitle: "Frontend Development using React",
    author: "Alexa Yu",
  },
  {
    id: 2,
    key: "b",
    courseBanner: course2,
    courseTitle: "Unity Development Full Tutorial",
    author: "Ben Afflick",
  },
  {
    id: 3,
    key: "c",
    courseBanner: course3,
    courseTitle: "Backend Development",
    author: "Mosh Sharma",
  },
];

// testimonials
export const reviews = [
  {
    key: "A",
    imgUrl: img1,
    customerName: "Tom Holland",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nulla sed quidem optio expedita deleniti itaque?",
  },
  {
    key: "B",
    imgUrl: img2,
    customerName: "Mike Wilson",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nulla sed quidem optio expedita deleniti itaque?",
  },
  {
    key: "C",
    imgUrl: img3,
    customerName: "Jessica Tyler",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nulla sed quidem optio expedita deleniti itaque?",
  },
];

// testimonials carousal responsive
export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 800 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
  },
};

// navbar
export const navigation = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Courses", path: "/courses" },
  { title: "Resources", path: "/resources" },
  { title: "Contact", path: "/contact" },
];

// about us
export const stats = [
  { id: "A", title: "15+", subtitle: "Instructors" },
  { id: "B", title: "5k+", subtitle: "Students" },
  { id: "C", title: "98%", subtitle: "Loremeum" },
  { id: "D", title: "20%", subtitle: "Sitfolar" },
];

// FAQs
export const faqsList = [
  {
    q: "What are some random questions to ask?",
    a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
  },
  {
    q: "Do you include common questions?",
    a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
  },
  {
    q: "Can I use this for 21 questions?",
    a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
  },
  {
    q: "Are these questions for girls or for boys?",
    a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
  },
  {
    q: "What do you wish you had more talent doing?",
    a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
  },
];
