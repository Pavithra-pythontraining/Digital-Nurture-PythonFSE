# Vue Pinia Advanced Patterns

## What is Pinia?

Pinia is the official state management library for Vue.js. It provides a simple and lightweight way to manage application state.

---

## Pinia Store Structure

A Pinia store consists of:

- State
- Getters
- Actions

Example:

```javascript
import { defineStore } from "pinia";

export const useEnrollmentStore = defineStore("enrollment", {

    state: () => ({
        courses: [],
        enrolledCourses: []
    }),

    actions: {

        async fetchAndEnroll(courseId) {

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts/" + courseId
            );

            const course = await response.json();

            this.enrolledCourses.push(course);

        },

        resetEnrollment() {
            this.$reset();
        }

    }

});
```

---

## storeToRefs()

Pinia provides **storeToRefs()** to destructure reactive state without losing reactivity.

Example:

```javascript
import { storeToRefs } from "pinia";
import { useEnrollmentStore } from "./stores/enrollmentStore";

const store = useEnrollmentStore();

const { enrolledCourses } = storeToRefs(store);
```

---

## Why use storeToRefs()?

Without `storeToRefs()`, destructuring breaks Vue's reactivity.

Correct:

```javascript
const { courses } = storeToRefs(store);
```

Incorrect:

```javascript
const { courses } = store;
```

---

## Resetting Store

Pinia provides the built-in `$reset()` function.

Example:

```javascript
store.$reset();
```

This resets the store back to its initial state.

---

## Data Flow

Component

↓

Store Action

↓

API Call

↓

Update Store

↓

Reactive UI Update

---

## Advantages of Pinia

- Less boilerplate
- Simple syntax
- Built-in TypeScript support
- Easy to learn
- Official Vue state management library

---

## Summary

Pinia manages Vue application state using Stores, State, Getters, and Actions. Async actions can directly call APIs, and `storeToRefs()` preserves reactivity when destructuring state.