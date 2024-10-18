import { useEffect, useState } from "react";
import styles from "./EmployeeTable.module.css";
function EmployeeTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [employeeData, setEmployeeData] = useState([]);
  const employeePerPage = 10;
  const totalPages = Math.ceil(employeeData.length / employeePerPage);
  const perPageEmployeeData = employeeData.slice(
    (currentPage - 1) * employeePerPage,
    currentPage * employeePerPage
  );
  console.log("TotalPages >>>", totalPages);
  console.log("CurrentPages >>>", currentPage);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        const data = await res.json();
        // console.log("Employee Data >>>", data);
        setEmployeeData(data);
      } catch (error) {
        alert("failed to fetch data");
        console.log("Error >>", error.message);
      }
    };
    fetchData();
  }, []);
  const handleNext = () => {
    if (currentPage > totalPages - 1) {
      // console.log("Returned!!!");
      return;
    }
    setCurrentPage(currentPage + 1);
  };
  const handlePrevious = () => {
    if (currentPage <= 1) {
      console.log("returnedPrev");
      return;
    }
    setCurrentPage(currentPage - 1);
  };
  // console.log("employeeData >>", employeeData);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Employee Table Data</h1>
      <table className={styles.contentTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {perPageEmployeeData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.buttonDiv}>
        <button onClick={handlePrevious}>Previous</button>
        <button>{currentPage}</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
}
export default EmployeeTable;
