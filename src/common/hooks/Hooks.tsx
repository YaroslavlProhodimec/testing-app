import {useState,useLayoutEffect} from "react";

const queries = [
    '(max-width:766px)',
    '(min-width:766px) and  (max-width:1199px)',
    '(min-width:1200px) ',
]
export const useMatchMedia = () => {
const mediaQueryLists = queries.map(query => matchMedia(query));
const getValues = mediaQueryLists.map(mql => mql.matches)

const [values,setValues] = useState(getValues);

}