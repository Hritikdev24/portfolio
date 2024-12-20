import { useEffect ,useState} from "react";
import "./info.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
export function Info() {
  const[cookies,setCookie,removeCookie]=useCookies();
  const navigation=useNavigate();
  const [data, setData] = useState([]);
 function deleteRecord(id){
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
         
     
           axios.delete(`http://localhost:9090/delete/${id}`).then(
            res=>{
                  if(res.status==200){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                  }
            }
           ).catch(err=>{
                alert("something went wrong")
           })




        }
      });

 }
  function logout(){
    Swal.fire({
      title: "Logout!",
      text: "You Have Logout",
      icon: "success"
    });
     removeCookie('name');
     removeCookie('login');
  }

  useEffect(() => {
 
     if(cookies.name !="Hritik"){
      navigation("/");
     }

    axios.get("http://localhost:9090").then((res) => {
      setData(res.data);
    });
  }, [data,cookies.name]);

  return (
    <div className="info">
      <table>
        <caption>Data <button  className="logout-btn" onClick={logout}>Logout</button></caption>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,idx) => (
            <tr>
                <td>{idx+1}</td>
              <td>{item.userName}</td>
              <td>{item.email}</td>
              <td className="message">{item.message}</td>
              <td>{item.date}</td>
              <td onClick={()=>{deleteRecord(item._id)}}> <span className="bi bi-trash trash-red"></span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
