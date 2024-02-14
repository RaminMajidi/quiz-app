import { create } from "zustand";

const useQuizStore = create((set) => ({
    questions: [],
    setQuiz: (data) => set((state) => ({ ...state, questions: data }))
}))

export default useQuizStore