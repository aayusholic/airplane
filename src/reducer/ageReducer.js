export function ageReducer(state, action) {
  if (action.type === "incremental_age") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("Invalid Action");
}
