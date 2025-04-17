import React from "react"
import Header from "./Header"


export default function Main() {

    const [darkMode, setdarkMode] = React.useState(false)

    function toggleTheme() {
       setdarkMode(prevMode => !prevMode)
       
    }

    React.useEffect(() => {
        document.body.style.backgroundColor = darkMode ? "hsl(235, 21%, 11%)" : "hsl(233, 11%, 84%)";
      }, [darkMode]);
      

    React.useEffect(() => {
      document.getElementById('theme-toggler').innerHTML = darkMode ? `<img src="/assets/images/icon-sun.svg" />` : `<img src="/assets/images/icon-moon.svg" alt="" />`
    },[darkMode])

    
    const [checked, setChecked] = React.useState([]);

    function toggleCheck(index) {
    setChecked((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index)  : [...prev, index]
      
    );
    }

    React.useEffect(() => {
        document.querySelector('.background').style.background = darkMode
          ? 'url("/assets/images/bg-desktop-dark.jpg")'
          : 'url("/assets/images/bg-desktop-light.jpg")';
      }, [darkMode]);
      

    const [task, setTask] = React.useState([]) 

    const allTasks = task.map((allTask, index) => 
        <li key={index} className={darkMode ? 'dark' : 'light'}  ><div id="check" onClick={()=> toggleCheck(index)} 
         
        style={{
            width: "20px",
            height: "20px",
            bordeRadius: '50px',
            display: "inline-block",
            backgroundImage: checked.includes(index)
              ? "url('/assets/images/icon-check.svg')"
              : "none",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: 'no-repeat',
            cursor: "pointer",
            marginRight: "10px",
            border: "1px solid #615d5d",
          }}

        ></div>{allTask} 
        <div id="clear" onClick={()=> {deleteTask(index)}} >&times;</div> </li>)
                                                                                                     
 
    function handleSubmit(event) {
        event.preventDefault()
        const formElement = event.currentTarget
        const formData = new FormData(formElement)
        const newTask = formData.get('to-do')

        newTask ? setTask(prevTask => ([...prevTask, newTask])):null
    }

    console.log(task)

    function deleteTask(index) {
        setTask((prevTask) => prevTask.filter((_, i) => i !== index));
      }

    


    return(
        <main>
            <Header 
 
            toggleTheme={toggleTheme}

            />

            <form action="" name="task" onSubmit={handleSubmit} >
                <input type="text" name="to-do" id="to-do"  placeholder="Create a new to-do" className={darkMode ? 'dark' : 'light'} />
                <div id="submit-button-container"><button id="submit">Add to do</button></div>
            </form>

            <div className="ul-container">
            <ul >
                {allTasks}
            </ul>
            </div>
        </main>
    )
}