import {useState} from "react";

let maxValue = 5
let minValue =1

// eslint-disable-next-line react-hooks/rules-of-hooks
let [value, setValue] = useState<number>(minValue)
// eslint-disable-next-line react-hooks/rules-of-hooks
let [error, setError] = useState<boolean>(false)