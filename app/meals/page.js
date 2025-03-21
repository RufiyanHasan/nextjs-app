import classes from './page.module.css';
import MealGrid from '../components/meals/meals-grid';

import Link from "next/link"

export default function MealsPage(){
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created {' '}
                    <span className={classes.hightlight}>by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself. It is easy and fun!
                </p>
                <p className={classes.pta}>
                    <Link href='/meals/share'>
                        Share Your Favorite Recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <MealGrid meals={[]}></MealGrid>    
            </main> 
        </>
    )
}
