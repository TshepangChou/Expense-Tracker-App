import { PieChart, Pie, Cell } from "recharts";
import { useSelector } from "react-redux";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ExpenseChart = () => {
    const expenses = useSelector((state) => state.expenses.expenses);
  
    const categoryData = expenses.reduce((acc, curr) => {
      const category = acc.find((item) => item.name === curr.category);
      if (category) category.value += curr.amount;
      else acc.push({ name: curr.category, value: curr.amount });
      return acc;
    }, []);

    return (
        <PieChart width={300} height={300}>
          <Pie data={categoryData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
            {categoryData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      );
    };
    
    export default ExpenseChart;