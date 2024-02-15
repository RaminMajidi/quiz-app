import { create } from "zustand";

const useQuizStore = create((set) => ({
    questions: [],
    setQuiz: (data) => set((state) => ({ ...state, questions: data })),
    setAnswer: (id, answer) => set((state) => ({
        questions: state.questions.map(q => q.id === id ?
            { ...q, correct_answer: answer }
            : q)
    }))

}))

export default useQuizStore



