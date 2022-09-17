import { MealType } from "types/meal"

export const displayMealType = (type: MealType): string => {
  switch (type) {
  case "morning":
    return "Morning"
  case "lunch":
    return "Lunch"
  case "dinner":
    return "Dinner"
  case "snack":
    return "Snack"
  default:
    return type
  }
}
