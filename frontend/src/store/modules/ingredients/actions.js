export function getAllIngredients() {
  return {
    type: '@ingredients/REQUEST_INGREDIENTS',
  };
}
export function getAllSuccess(data) {
  return {
    type: '@ingredients/REQUEST_INGREDIENTS_SUCCESS',
    payload: data,
  };
}
export function failure() {
  return {
    type: '@ingredients/FAILURE',
  };
}
export function success(data) {
  return {
    type: '@ingredients/SUCCESS',
    payload: data,
  };
}
