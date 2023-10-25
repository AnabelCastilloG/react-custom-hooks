import { useState } from "react";

export const useForm = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange  = (e) => setInputValue(input=>input=e.target.value)

    return { inputValue, handleChange};
  };
  