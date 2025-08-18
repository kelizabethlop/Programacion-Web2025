import { useEffect, useState } from "react";

const API = import.meta.env.VITE_POKEAPI_URL || "https://pokeapi.co/api/v2";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const res = await fetch(`${API}/pokemon?limit=30`);
        if (!res.ok) throw new Error("No se pudo cargar el listado");
        const list = await res.json();

        const detailed = await Promise.all(
          list.results.map(async (p) => {
            const r = await fetch(p.url);
            const d = await r.json();
            return {
              id: d.id,
              name: d.name.charAt(0).toUpperCase() + d.name.slice(1),
              img:
                d.sprites?.other?.["official-artwork"]?.front_default ||
                d.sprites?.front_default,
              types: d.types.map((t) => t.type.name),
              // Alternativas por si quieres otra característica:
              height: d.height, // altura
              weight: d.weight  // peso
            };
          })
        );
        setPokemon(detailed);
      } catch (e) {
        setError(e.message || "Error inesperado");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <main className="container">
      <h1 className="title">PokeGalería</h1>
      {loading && <p>Cargando…</p>}
      {error && <p className="error">{error}</p>}

      <div className="grid">
        {pokemon.map((p) => (
          <article className="card" key={p.id}>
            {p.img ? (
              <img src={p.img} alt={p.name} loading="lazy" />
            ) : (
              <div className="placeholder">Sin imagen</div>
            )}
            <h2>{p.name}</h2>
            <p>
              <strong>Tipo:</strong> {p.types.join(", ")}
            </p>
            {/* Si prefieres mostrar altura o peso, descomenta una de estas líneas */}
            {/* <p><strong>Altura:</strong> {p.height}</p> */}
            {/* <p><strong>Peso:</strong> {p.weight}</p> */}
          </article>
        ))}
      </div>
    </main>
  );
}
