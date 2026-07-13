import { defineStore } from 'pinia'

export const useCourseStore = defineStore('courses', {

  state: () => ({
    courses: [
      {
        id: 1,
        name: 'Python Programming',
        credits: 4
      },
      {
        id: 2,
        name: 'Java Programming',
        credits: 3
      },
      {
        id: 3,
        name: 'Cloud Computing',
        credits: 4
      },
      {
        id: 4,
        name: 'Web Development',
        credits: 5
      }
    ]
  })

})