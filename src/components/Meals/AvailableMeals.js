import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useFetch();

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      // console.log(tasksObj);

      const loadedMeals = [];

      for (const mealsKey in tasksObj) {
        loadedMeals.push({ id: mealsKey, ...tasksObj[mealsKey] });
      }

      setMeals(loadedMeals);
    };

    //มี key คือ url, method, header, body
    fetchMeals(
      {
        url: "https://react-course-udemy-f670c-default-rtdb.asia-southeast1.firebasedatabase.app/foodApp/Meals.json",
      },
      transformTasks
    );
  }, [fetchMeals]);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.MealsError}>
        <p>Something wrong.</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
