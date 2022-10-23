import Email from "./assets/Email.svg";
import Location from "./assets/Location.svg";
import Phone from "./assets/Phone.svg";
import "./App.css";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [userInfo,setUserInfo]=useState()
const getUser= async() =>{
  const url ="https://randomuser.me/api/"
  try{
    const {data:{results}} = await axios(url)
    console.log(results[0])
    const {
      picture: { large },
      name: { title, first, last },
      email,
      cell,
      location: { state, country },
      registered: { date, age },
    } = results[0];
    setUserInfo({
       large,
       title,
       first,
       last,
       email,
       cell,
       state,
       country,
       date,
       age,
     });
  } catch (error){
    console.log(error);
  }
}
// console.log(userInfo);
useEffect(()=>{
getUser()
},[])
console.log(userInfo)
  return (
    <div className="App m-5 " style={{textAlign: "center"}}>
      <Table
        style={{
          width: "400px",
          height: "400px",
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
            
        }}
        className=" mx-auto rounded-3"
        striped
        bgcolor="f4a261"
        hover
      >
        <thead>
          <tr className=" justify-content-center">
            <th style={{ width: "100px" }}>
              <img className="rounded-circle" src={userInfo?.large}></img>
            </th>
            <th className="justify-content-center align-items-center py-5">
              <p className="d-block">
                {userInfo?.title} {userInfo?.first} {userInfo?.last}
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
            <img src={Email} alt="email" style={{
                            width: "40px",
                            height: "40px",

                        }} />
            </td>
            <td colSpan={2}>{userInfo?.email}</td>
          </tr>
          <tr>
            <td>
            <img src={Phone} alt="phone" style={{
                            width: "40px",
                            height: "40px",

                        }
                        } />
            </td>
            <td colSpan={2}>{userInfo?.cell}</td>
          </tr>
          <tr>
            <td>
            <img src={Location} alt="location" style={{
                            width: "40px",
                            height: "40px",

                        }
                        } />
            </td>
            <td colSpan={2}>
              {userInfo?.state} / {userInfo?.country}
            </td>
          </tr>
          <tr>
            <td colSpan={2}>Age : {userInfo?.age}</td>
          </tr>
          <tr>
            <td style={{ border: "none" }} colSpan={2}>
              Register Date: {userInfo?.date.slice(0,10)}
            </td>
          </tr>
        </tbody>
      </Table>
      <button className="btn btn-success" onClick={()=>getUser()}>RANDOM</button>
    </div>
  );
}
export default App;