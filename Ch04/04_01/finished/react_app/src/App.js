
import './App.css';
import { Link, Outlet} from 'react-router-dom';

function Home() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>My Website</h1>
    </div>
  )
}

export function About() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>About Us</h1>
      <Outlet />
    </div>
  )
}

export function History() {
  return (
    <div>
      <h1>Our History</h1>
    </div>
  )
}

export function Contact() {
    return (
      <div>
        <nav>
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
        <h1>Contact</h1>
      </div>
    )
  }

export function App() {
  return (
    <Home />
    )
  }
  
  
  // const [firstCity, second] = [
    //   "Tokyo", 
    //   "Tahoe City", 
    //   "Bend"
    // ]
    // console.log(firstCity)
    // console.log(second)
    
    //destructing an object with the name props 
    
    
    // const [emotion, setEmotion] = useState("happy")
    // const [secondary, setSecondary] = useState("tired")
    
    // useEffect(() => {
      //   console.log(`It's ${emotion} right now`)
      // }, [emotion])
      // //should be call once if dont have information[]
      
      // useEffect(() => {
        //   console.log(`It's ${secondary} around here`)
        // }, [secondary])
        
        // <h1>Current emotion is {emotion}</h1>
        //     <button onClick={() => setEmotion("sad")}>Sad</button>
        //     <button onClick={() => setEmotion("frustated")}>Frustated</button>
        //     <button onClick={() => setEmotion("angry")}>Angry</button>
        //     <h2>
        //       Current secondary emotion is {secondary}
        //     </h2>
        //     <button onClick={() => setSecondary("grateful")}> 
        //       Grateful
        //     </button>
        
        
        // const [checked, setChecked] = useReducer(checked => !checked, false)
        
        // <input 
        // type='checkbox' 
        // value={checked} 
        // onChange={setChecked
        //   // setChecked((checked) => !checked)
        // }/>
        // <label> 
        //   {checked ? "checked" : "not checked"}
        // </label>
        
        // //uncontrol component
        // const txtTitle = useRef()
        // const hexColor = useRef()
        
        // console.log(txtTitle)
        // const title = txtTitle.current.value
        // const color = hexColor.current.value
        
        // const [titleProps, resetTitle] = useInput("")
        // const [colorProps, resetColor] = useState("#000000")
        
        // const submit = (e) => {
          //   //prevent the page refresh
          //   e.preventDefault()
          //   alert(
            //     `${titleProps.value}, ${colorProps.value}`
            //     )
            //     resetTitle()
            //     resetColor()
            //   }
            
            // function useInput(initialValue) {
              //   const [value, setValue] = useState(initialValue)
              //   return [
                //     {
                  //       value,
                  //       onChange: (e) => setValue(e.target.value)
                  //     },
                  //     () => setValue(initialValue)
                  //   ]
                  // }
                  //api.github.com/users/YOUR_ID
                  
                  //         <form onSubmit={submit}>
                  //   <input 
                  //     {...titleProps}
                  //     type='text' 
                  //     placeholder='color title...'
                  //     />
                  //   <input 
                  //     {...colorProps}
                  //     type='color'
                  //     />
                  //   <button>Add</button>
                  
                  
                  // const query = `
                  //   query {
                    //     allLifts {
                      //       name
                      //       elevationGain
                      //       status
                      //     }
                      //   }
                      // `
                      
                      // const opts = {
                        //   method: "POST",
                        //   headers: { "Content-Type": "application/json"}, 
                        //   body: JSON.stringify({ query })
                        // }
                        // </form>
                        
                        //     <h1>{name}</h1>
                        //       <p>{elevationGrain} {status}</p>
                        //     </div>
                        //   )
                        // }
                        
                        // function App() {
                          //   const [data, setData] = useState(null)
                          //   const [error, setError] = useState(null)
                          //   const [loading, setLoading] = useState(false)
                          
                          //   useEffect(() => {
                            //     setLoading(true)
                            
                            //     fetch(
                              //       `https://snowtooth.moonhighway.com/`, 
                              //       opts
                              //       )
                              //       .then((response) => response.json())
                              //       .then (setData)
                              //       .then(() => setLoading(false))
                              //       .catch(setError)
                              //     },[])
                              
                              //     if (loading) return <h1>Loading...</h1>
                              //     if (error) return <pre>{JSON.stringify(error)}</pre>
                              //     if (!data) return null
                              
                              //     return (  
                                //       <div>
                                //     {data.data.allLifts.map((lift) => ( 
                                  //       <Lift 
                                  //       name={lift.name} 
                                  //       elevationGrain={lift.elevationGrain} 
                                  //       status={lift.status}
                                  //       />
                                  //       ))}
                                  
                                  // const tahoe_peaks = [
                                    //   // { name: "Freel", elevation: 10891},
                                    //   // { name: "Monument", elevation: 10067},
                                    //   // { name: "Pyramid", elevation: 9983},
                                    //   // { name: "Tallac", elevation: 9735},
                                    // ]
                                    
                                    // function List ({ data, renderItem, renderEmpty }) {
                                      //   return !data.length ? (
                                        //     renderEmpty 
                                        //   ) : ( 
                                          //     <ul>
                                          //       {data.map((item) => (
                                            //         <li key={item.name}>
                                            //           {renderItem(item)}
                                            //         </li>
                                            //       ))}
                                            //     </ul>
                                            //   )
                                            // }

                                            // <List 
                                            // data={tahoe_peaks} 
                                            // renderEmpty={<p>This list is empty</p>}
                                            // renderItem={item => (
                                            //   <>
                                            //     {item.name} - {item.elevation} ft.
                                            //   </>
                                            // )}
                                            // />
