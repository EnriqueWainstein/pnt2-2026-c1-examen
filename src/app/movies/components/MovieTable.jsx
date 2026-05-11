"use client";

import { useState } from "react";

export default function MovieTable({ movies }) {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  // TODO (ejercicio 2): reemplazar `movies` con el filtro por título usando `search`
  // Pista: .filter((m) => m.title?.toLowerCase().includes(search.toLowerCase()))
  const filteredMovies = movies;

  // TODO (ejercicio 3): reemplazar `filteredMovies` con el filtro por género usando `selectedGenre`
  // Si `selectedGenre` está vacío (""), no filtrar. Pista: cada película tiene un array `genres`,
  // podés usar .includes(selectedGenre) para verificar si el género está en el array.
  const genreFilteredMovies = filteredMovies;

  // TODO (ejercicio 5): reemplazar `genreFilteredMovies` con el array ordenado por `year`
  // Si `sortAsc` es true → menor a mayor; si es false → mayor a menor.
  // Importante: no mutar el array original, usá [...genreFilteredMovies].sort(...)
  const sortedMovies = genreFilteredMovies;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por título..."
          className="flex-1 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-zinc-500 outline-none focus:border-white/50"
        />
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="rounded-lg border border-white/20 bg-zinc-900 px-4 py-2.5 text-white outline-none focus:border-white/50"
        >
          <option value="">Todos los géneros</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Animation">Animation</option>
          <option value="Comedy">Comedy</option>
          <option value="Crime">Crime</option>
          <option value="Documentary">Documentary</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="Thriller">Thriller</option>
        </select>
        <button
          type="button"
          onClick={() => setSortAsc(!sortAsc)}
          className="rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
        >
          Año {sortAsc ? "↑" : "↓"}
        </button>
      </div>
      <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5">
        <table className="min-w-full divide-y divide-white/10 text-left text-sm text-white">
          <thead className="bg-white/5 text-xs uppercase tracking-[0.4em] text-zinc-400">
            <tr>
              <th className="px-6 py-3">Título</th>
              {/* TODO (ejercicio 1): agregar <th> para la columna Año */}
              <th className="px-6 py-3">Plot</th>
              <th className="px-6 py-3">Cast</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {sortedMovies.map((movie) => (
              <tr key={movie._id} className="transition hover:bg-white/5 focus-within:bg-white/5">
                <td className="px-6 py-4 font-semibold text-white">
                  <button
                    type="button"
                    className="block text-left text-inherit"
                    onClick={() => {
                      console.log(`Seleccionada película: ${movie._id} - ${movie.title}`);
                      // TODO (ejercicio 4): redirigir a /movies/${movie._id}
                    }}
                  >
                    {movie.title}
                  </button>
                </td>
                {/* TODO (ejercicio 1): agregar <td> con movie.year ?? "-" */}
                <td className="px-6 py-4 text-zinc-200">{movie.plot || "-"}</td>
                <td className="px-6 py-4 text-zinc-200">
                  {movie.cast?.length ? movie.cast.join(", ") : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
