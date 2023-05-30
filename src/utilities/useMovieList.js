import { useQuery } from "@tanstack/react-query";
import fetchStuff from "./fetchStuff";

export default function useMovieList(id) {
    const results = useQuery(["id", id], fetchStuff);
    return [results?.data ?? [], results.status]
}