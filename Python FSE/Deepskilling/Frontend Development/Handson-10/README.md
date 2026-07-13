# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Framework Comparison

## React + Redux Toolkit

- Uses Redux Toolkit for state management.
- Uses createAsyncThunk for asynchronous API calls.
- Uses Selectors to access state.
- Less boilerplate than classic Redux.
- Easy to integrate with React.

---

## Angular + NgRx

- Uses Actions, Reducers, Effects, and Selectors.
- Effects handle API calls.
- Reducers are pure functions.
- More boilerplate than Redux Toolkit.
- Best suited for large enterprise Angular applications.

---

## Vue + Pinia

- Uses Stores instead of reducers.
- Actions can directly perform API calls.
- Uses storeToRefs() to maintain reactivity.
- Supports $reset() for resetting store state.
- Very simple and lightweight.

---

# Comparison Table

| Feature | React + Redux Toolkit | Angular + NgRx | Vue + Pinia |
|---------|-----------------------|----------------|-------------|
| State Management | Redux Toolkit | NgRx | Pinia |
| Async API Calls | createAsyncThunk | Effects | Actions |
| Boilerplate | Medium | High | Low |
| Learning Curve | Moderate | High | Easy |
| Selectors | Yes | Yes | storeToRefs() |
| Best For | React Apps | Enterprise Angular Apps | Vue Apps |

---

# Conclusion

- React + Redux Toolkit provides modern and simplified state management.
- Angular + NgRx offers a structured Redux architecture for large-scale Angular applications.
- Vue + Pinia provides lightweight and reactive state management with minimal boilerplate.
