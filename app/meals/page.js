import classes from "./page.module.css";
import MealGrid from "../components/meals/meals-grid";

import Link from "next/link";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import MealsLoadingPage from "../components/meals/loader-out";

async function Meals() {
  const meals = await getMeals();
  return <MealGrid meals={meals}></MealGrid>     
}

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.hightlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
            <Meals></Meals>
        </Suspense>
      </main>
    </>
  );
}
