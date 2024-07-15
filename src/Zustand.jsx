import {create} from 'zustand'

const useZustandStore = create((set) => ({
    value: '',
    setValue: (email) => set( { value : email }),
}))

export default useZustandStore