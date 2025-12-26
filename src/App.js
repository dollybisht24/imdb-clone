import StudentCard from './Components/StudentCard.jsx'
function App() {
  
  return (
    <>
    <h1>🎓 Student Dashboard</h1>

    <div className="student-cards-container">
        <StudentCard 
        name="Julian Vance"
        course="Computer Science"
        marks={92}
        />

         <StudentCard
        name="Amara Okafor"
        course="Machine Learning"
        marks={92}
        />

         <StudentCard
        name="Oliver Quinn"
        course="Computer Graphics Design"
        marks={92}
        />

      

    </div>
    
    
    </>
  );
}

export default App;
