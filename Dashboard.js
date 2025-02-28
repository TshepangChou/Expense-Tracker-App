import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setExpenses, removeExpense } from "../redux/expenseSlice";
import { getExpenses, deleteExpense } from "../services/expenseService";

const Dashboard = () => {
    const dispatch = useDispatch();
    const expenses = useSelector((state) => state.expenses.expenses);
    const token = useSelector((state) => state.auth.token);
  
    useEffect(() => {
      const fetchExpenses = async () => {
        const res = await getExpenses(token);
        dispatch(setExpenses(res.data));
      };
      fetchExpenses();
    }, [dispatch, token]);
  
    const handleDelete = async (id) => {
      await deleteExpense(id, token);
      dispatch(removeExpense(id));
    };

    return (
        <div>
          <h1>Dashboard</h1>
          {expenses.map((exp) => (
            <div key={exp._id}>
              <p>{exp.title} - ${exp.amount}</p>
              <button onClick={() => handleDelete(exp._id)}>Delete</button>
            </div>
          ))}
        </div>
      );
    };
    
    export default Dashboard;