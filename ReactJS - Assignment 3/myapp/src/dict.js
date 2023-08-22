// profilesData.js
import img1 from './images/img1';
import img2 from './images/noimg';

const dict =[
    {
      id: 1,
      imageUrl: img1,
      skills: ["JavaScript", "React", "HTML", "CSS"],
      lastSeen: new Date("2023-07-29T15:30:00")
    },
    {
      id: 2,
      imageUrl: img2,
      skills: ["Python", "Django", "Flask", "SQL"],
      lastSeen: new Date("2023-07-28T10:15:00")
    }
    // Add more profiles here if needed
  ];
  
  export default profilesData;
  