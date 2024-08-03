import React from "react";

const Experience = () => {
  return (
    <main className="experience">
      <h2>Expérience Professionnelle</h2>
      <div className="experience-item">
        <h3>Stagiaire Développement d'un Marketplace | NewDev Maroc - Fes</h3>
        <span>Avril 2024 - Mai 2024</span>
        <ul>
          <li>
            Participer au développement d'un marketplace en ligne, en utilisant
            des technologies comme Laravel pour le back-end et React pour le
            front-end.
          </li>
          <li>
            Collaboration avec une équipe de 2 développeurs pour assurer une
            intégration fluide entre le front-end et le back-end.
          </li>
          <li>
            Voir le projet sur{" "}
            <a
              href="https://github.com/ayoubMouhssine/amf-market"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Experience;
