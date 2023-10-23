import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// We're going to export the typed version of useSelector and useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector  // to this we assign = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()      // this is going to be equal to a function which returns the useDispatch hook with parentheses (), this is of type AppDispatch

// Finally, we will use these 2 hooks in every component