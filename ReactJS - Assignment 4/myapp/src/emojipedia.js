// import image from './components/images';
// import img1 from './images/img1.jpg';
import img1 from "./components/images/img1.jpg";
import img2 from "./components/images/img2.jpg";
import img3 from "./components/images/img3.jpg";
import img4 from "./components/images/img4.jpg";

const emojipedia = [
  {
    id: 1,
    img: img1,
    city: "Solapur",
    skills: ["JavaScript", "React", "HTML", "CSS"],
    name: "Rushikesh",

    status: new Date()
  },

  {
    id: 2,
    img: img2,
    city: "Pune",
    skills: ["JavaScript", "React", "HTML", "CSS"],
    name: "Prashant",
    status: "2023-07-31T01:15:00"
  },

  {
    id: 3,
    img: img3,
    city: "Mumbai",
    skills: ["JavaScript", "React", "HTML", "CSS"],
    name: "Himanshu",
    status: "2023-07-27T08:45:00"
  },
  {
    id: 4,
    city: "Kolkata",
    img: img4,
    skills: ["JavaScript", "React", "HTML", "CSS"],
    name: "Shubham",
    status: "2023-07-22T14:20:00"
  }
];

export default emojipedia;
