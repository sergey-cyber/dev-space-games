import { useContext, Context } from "react";

export const useRequiredContext = <T,>(context: Context<T>) => {
  const contextValue = useContext(context);

  if (!contextValue) {
    throw "Context initialization error";
  }

  return contextValue;
};
