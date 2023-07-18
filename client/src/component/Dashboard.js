import React from "react"
import Card from "./Card"
import { useState, useEffect } from 'react';
import { DashBoardData, GetAuthenication } from '../ServerMethod/Servermethods';

export default function Dashboard() {

 
  let [state, setstate] = useState([]);

  useEffect(() => {
      async function fetchData() {
          const hastoken = await GetAuthenication()
          console.log("hastoken", hastoken)
          if (hastoken) {
              let searchresults = await DashBoardData();
            
              setstate(searchresults)
              console.log("------",searchresults,'state' ,state)
          }
      }
      fetchData()
  }, []);

  

  return (
    <>


   {
  
    <div className="lyst">
      <h5 className="heead"> Default Dashboard</h5>
          <Card          
          title={(state.Introduction ? state.Introduction.title : "Loading...")}
          imgsrc={require('../images/jira.jpg')}
          body={(state.Introduction ? state.Introduction.body : "Loading...")}

          />

           <Card
           
           title="My Workplace"
           imgsrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSguOXCvMigKPFrF3SljQRocNeJ8Q_2EAWrg&usqp=CAU'
           body={(state.AssignedMe ? state.AssignedMe.body : "Loading...")}
            
          />

           <Card
          
          title="Your Company JIRA"
          imgsrc="https://static.tildacdn.com/tild3963-6161-4234-b238-663936633464/4.png"
          body={(state.Projects ? state.Projects.projectname : "Loading...")}
          leadname={(state.Projects ? state.Projects.leadname : "Loading...")}

            
          />
           <Card
          
          title="Activity Stream"
          body={(state.ActivityStream ? state.ActivityStream.companyname:  "Loading...")}
          imgsrc='https://inlogiq.com/wp-content/uploads/2021/07/EXalate-blog.jpg'
          />
          
    </div>
}   
    </>
      
  )
}



