import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./recomenda_nova.module.css";
import { useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Recomenda() {
  const query = useQuery();
  const termoBusca = query.get("q") || "";

  const [destaque, setDestaque] = useState(null);
  const [outras, setOutras] = useState([]);
  const navigate = useNavigate();


  async function buscar(termo) {
    const resp = await fetch(
      `http://localhost:5000/api/estabelecimentos/buscar?q=${encodeURIComponent(
        termo
      )}`
    );
    const data = await resp.json();

    if (data.length === 0) {
      setDestaque(null);
      setOutras([]);
      return;
    }

    setDestaque(data[0]);
    setOutras(data.slice(1, 4)); // só 3
  }

  async function carregarTodos() {
    const resp = await fetch("http://localhost:5000/api/estabelecimentos");
    const data = await resp.json();

    setDestaque(data[0] || null);
    setOutras(data.slice(1, 4));
  }

  useEffect(() => {
    if (!termoBusca.trim()) carregarTodos();
    else buscar(termoBusca);
  }, [termoBusca]);

  return (
    <div className={styles.recoPage}>
      {/* NAVBAR */}
      <nav className={styles.recoNavbar}>
        <div
          className={styles.recoLogo}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img src="/imgs/Logo Aboa 1.png" alt="Logo" />
        </div>

        <div className={styles.recoLinks}>
          {(() => {
            const usuario = JSON.parse(localStorage.getItem("usuario"));
            if (!usuario) return <a href="/login">Minha conta</a>;
            if (usuario.tipo === "restaurante")
              return <a href="/minha-conta-rest">Minha conta</a>;
            return <a href="/minha-conta-usuario">Minha conta</a>;
          })()}
          <a href="/login">Sair</a>
        </div>
      </nav>

      {/* DESTAQUE */}
      {destaque ? (
        <div className={styles.recoMain}>
          <div className={styles.recoInfo}>
            <h1>A boa de hoje é:</h1>
            <h2 className={styles.recoName}>{destaque.nome}</h2>
            <p className={styles.recoDesc}>{destaque.descricao}</p>

            <div className={styles.recoButtons}>
              {/* VER CARDÁPIO CORRIGIDO */}
              <button
                onClick={() =>
                  navigate("/cardapio", {
                    state: { restaurante: destaque }
                  })
                }
              >
                Ver Cardápio
              </button>

              {/* IR PRA LÁ */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  destaque.endereco
                )}`}
                target="_blank"
              >
                <button>Ir pra lá</button>
              </a>
            </div>
          </div>

          <div className={styles.recoImageVertical}>
            <img
              src={`http://localhost:5000${destaque.fotoUrl}`}
              alt={destaque.nome}
            />
          </div>
        </div>
      ) : (
        <p className={styles.loading}>Nenhum resultado encontrado :(</p>
      )}


      {/* OUTRAS RECOMENDAÇÕES */}
      <div className={styles.recoOtherTitle}>Outras recomendações:</div>

      <div className={styles.recoCards}>
        {outras.map((item) => (
          <div key={item._id} className={styles.recoCard}>
            <div className={styles.recoCardImg}>
              <img
                src={`http://localhost:5000${item.fotoUrl}`}
                alt={item.nome}
              />
            </div>

            <h3 className={styles.recoCardTitle}>{item.nome}</h3>
            <p className={styles.recoCardDesc}>{item.descricao}</p>

            <button
              className={styles.recoCardBtn}
              onClick={() =>
                navigate("/cardapio", {
                  state: { restaurante: item }
                })
              }
            >
              Mais informações
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
