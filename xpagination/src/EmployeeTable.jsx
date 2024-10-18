import styles from "./EmployeeTable.module.css";
function EmployeeTable() {
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
          <tr>
            <td>123</td>
            <td>Gautam</td>
            <td>abc@gmail.com</td>
            <td>Developer</td>
          </tr>
          <tr>
            <td>123</td>
            <td>Gautam</td>
            <td>abc@gmail.com</td>
            <td>Developer</td>
          </tr>
          <tr>
            <td>123</td>
            <td>Gautam</td>
            <td>abc@gmail.com</td>
            <td>Developer</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default EmployeeTable;
