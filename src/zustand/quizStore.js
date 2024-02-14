import { create } from "zustand";
import { devtools, persist } from "zustand/middleware"



const quizStore = (set) => ({
    quizOptions: {},
    createQuiz: (quiz) => {
        set((state) => ({
            quizOptions: { quiz, ...state.quizOptions }
        }))
    }
})


const useQuizStore = create(devtools(
    persist(quizStore, {
        name: 'quizOptions'
    })
))

export default useQuizStore