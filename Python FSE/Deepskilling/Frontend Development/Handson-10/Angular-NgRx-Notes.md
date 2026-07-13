# Angular NgRx Concept

## What is NgRx?

NgRx is the state management library used in Angular applications. It follows the Redux pattern and provides a predictable way to manage application state.

---

## NgRx Architecture

```text
Component
    │
    ▼
Dispatch Action
    │
    ▼
Effect
    │
    ▼
Course Service (API Call)
    │
    ▼
Reducer
    │
    ▼
Store (State Updated)
    │
    ▼
Selector
    │
    ▼
Component Displays Updated Data
```

---

## Main Parts of NgRx

### 1. Actions
Actions describe what happened in the application.

Example:

```typescript
export const loadCourses = createAction(
  '[Courses] Load Courses'
);
```

---

### 2. Reducers
Reducers update the application state based on actions.

Example:

```typescript
on(loadCourses, state => ({
    ...state,
    loading: true
}))
```

Reducers must always be **pure functions**.
They should not make API calls.

---

### 3. Effects
Effects handle asynchronous operations such as API calls.

Example:

```typescript
loadCourses$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadCourses),
    mergeMap(() => this.courseService.getCourses())
  )
);
```

Effects receive an action, call the API, and dispatch another action with the response.

---

### 4. Selectors
Selectors retrieve data from the store.

Example:

```typescript
export const selectCourses = createSelector(
    selectCourseState,
    state => state.courses
);
```

Selectors prevent components from directly accessing the store structure.

---

## Complete Data Flow

```text
Component
    │
dispatch(loadCourses())
    │
    ▼
Action
    │
    ▼
Effect
    │
Calls CourseService
    │
    ▼
API
    │
Returns Course List
    │
    ▼
Reducer
    │
Updates Store
    │
    ▼
Selector
    │
    ▼
Component Displays Courses
```

---

## Advantages of NgRx

- Predictable state management
- Centralized application state
- Easy debugging
- Supports asynchronous API calls using Effects
- Scalable for large Angular applications

---

## Difference Between Redux Toolkit and NgRx

| Redux Toolkit | NgRx |
|---------------|-------|
| Used in React | Used in Angular |
| createSlice | Actions + Reducers |
| createAsyncThunk | Effects |
| useSelector | Selectors |
| useDispatch | Store.dispatch() |
| Less boilerplate | More boilerplate |
| Easier to learn | Steeper learning curve |

---

## Summary

NgRx is Angular's implementation of the Redux architecture. It separates Actions, Reducers, Effects, and Selectors to maintain a predictable and scalable state management system for enterprise Angular applications.