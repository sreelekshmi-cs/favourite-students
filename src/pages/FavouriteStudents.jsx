
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function FavouriteStudents() {
  const { favourites, removeFavourite } = useContext(StudentContext);

  return (
    <div className="container">
      <h1>Favourite Students </h1>

      {favourites.length === 0 ? (
        <p>No favourite students added yet</p>
      ) : (
        favourites.map((student) => (
          <div className="card" key={student.id}>
            <img
              src={student.image}
              alt={student.name}
              className="student-image"
            />

            <h3>{student.name}</h3>
            <p>Roll No: {student.roll}</p>

            <button onClick={() => removeFavourite(student.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default FavouriteStudents;
