import React from 'react'

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} style={{ height: 500, width: 500 }} alt="im" />

        </div>
    );
};
export default Recipe;