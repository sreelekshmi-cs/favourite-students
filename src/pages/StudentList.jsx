
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const students = [
  {
    id: 1,
    name: "Akhil",
    roll: 101,
    image: `${import.meta.env.BASE_URL}images/Akhil.jpg`
  },
  {
    id: 2,
    name: "Amina",
    roll: 102,
    image: `${import.meta.env.BASE_URL}images/Amina.jpg`
  },
  {
    id: 3,
    name: "Thasni",
    roll: 103,
    image: `${import.meta.env.BASE_URL}images/Thasni.jpg`
  },
  {
    id: 4,
    name: "Zreeh",
    roll: 104,
    image: `${import.meta.env.BASE_URL}images/Zreeh.jpg`
  }
];

function StudentList() {
  const { addFavourite, favourites } = useContext(StudentContext);

  return (
    <div className="container">
      <h1>Student List</h1>

      {students.map((student) => (
        <div className="card" key={student.id}>
          <img
            src={student.image}
            alt={student.name}
            className="student-image"
          />

          <h3>{student.name}</h3>
          <p>Roll No: {student.roll}</p>

          <button
            onClick={() => addFavourite(student)}
            disabled={favourites.some((s) => s.id === student.id)}
          >
            {favourites.some((s) => s.id === student.id)
              ? "Added "
              : "Add to Favourite"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
