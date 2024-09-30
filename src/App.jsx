import { useState } from "react";
import styles from "./app.module.css";
import { Card } from "./components/card";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export function App() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  const [jobs, setJobs] = useState([]);

  function handleCreateJob(event) {
    event.preventDefault()

    const newJobs = {
      id: crypto.randomUUID(),
      title,
      company,
      description
    }

    setJobs([newJobs, ...jobs])

    setTitle("")
    setCompany("")
    setDescription("")
  }

  return (
    <div className={styles.container}>
      <Header />

      <main>
        <div className={styles.containerForm}>
          <h2>Divulgar nova vaga</h2>
          <p>Preencha os detalhes da vaga abaixo</p>

          <form>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Título da vaga"
            />
            <input
              onChange={(e) => setCompany(e.target.value)}
              value={company}
              type="text"
              placeholder="Nome da empresa"
            />
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder="Descrição da vaga"
            ></textarea>

            <button onClick={handleCreateJob}>Publicar vaga</button>
          </form>
        </div>

        {jobs.length === 0 ? (
          <p 
            style={{ textAlign: "center", marginTop: "2rem" }}
          >
            Nenhuma vaga publicada.
          </p>
        ) : (
          <div className={styles.cards}>
          {jobs.map(job => (
            <Card
              key={job.id}
              title={job.title}
              company={job.company}
              description={job.description}
          />
          ))}
        </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
