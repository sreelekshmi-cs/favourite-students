import { createContext, useState } from "react";

export const StudentContext = createContext();

const initialStudents = [
  { id: 1, name: "Anu", roll: 101, image: "" },
  { id: 2, name: "Akhil", roll: 102, image: "" },
  { id: 3, name: "Meera", roll: 103, image: "" },
  { id: 4, name: "Arjun", roll: 104, image: "" },
];

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : initialStudents;
  });

  const [favourites, setFavourites] = useState([]);

  const updateStudentImage = (id, image) => {
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, image } : student
    );

    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));

    setFavourites((old) =>
      old.map((student) =>
        student.id === id ? { ...student, image } : student
      )
    );
  };

  const addFavourite = (student) => {
    if (!favourites.some((s) => s.id === student.id)) {
      setFavourites([...favourites, student]);
    }
  };

  const removeFavourite = (id) => {
    setFavourites(favourites.filter((s) => s.id !== id));
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        favourites,
        addFavourite,
        removeFavourite,
        updateStudentImage,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};