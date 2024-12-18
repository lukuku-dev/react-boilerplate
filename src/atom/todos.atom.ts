import { getDummyDataApi } from "apis/sample";
import { atomWithQuery } from "jotai-tanstack-query";

export interface InterfaceTodo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

export const todoAtom = atomWithQuery(() => ({
  queryKey: ["todo"],
  queryFn: async () => {
    const res = await getDummyDataApi();
    return res.data;
  },
}));
