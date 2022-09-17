export type MealType = "morning" | "lunch" | "dinner" | "snack"

export interface Meal {
  id: string
  date: string
  type: MealType
  image: string
}
