import classes from "./meals-grid.module.css";
import MealItem from './meal-item';

export default function MealGrid({ meals }) {
  return (
    <ul className={classes.MealGrid}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meals}
          ></MealItem>
        </li>
      ))}
    </ul>
  );
}
