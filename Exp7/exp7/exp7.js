function Student({ name, course, marks }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p><b>Course:</b> {course}</p>
      <p><b>Marks:</b> {marks}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h2>Student Information</h2>

      <Student name="Trishya verma" course="Computer Science" marks={92} />
      <Student name="Yogyata" course="Mechanical Engineering" marks={78} />
      <Student name="Vaishnavi Mishra" course="MBA" marks={83} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);