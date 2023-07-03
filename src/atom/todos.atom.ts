import { atomsWithQuery } from "jotai-tanstack-query";
import { getDummyDataApi } from "../apis/sample";

export interface InterfaceTodo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

export const [todoAtom] = atomsWithQuery(() => ({
  queryKey: ["todo"],
  queryFn: async () => {
    const res = await getDummyDataApi();
    return res.data;
  },
}));
