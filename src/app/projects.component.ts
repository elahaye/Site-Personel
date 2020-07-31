import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <section id="project">
      <article>
        <h3>Projets Personnels</h3>

        <div class="flex-row persoproject">
          <a href="#"><img src="assets/projet1.png" alt="Projet 1" /></a>
          <div class="flex-column">
            <a href="#"><h4>Projet 1 - Level Up</h4></a>
            <p>
              Projet réalisé dans le cadre de la fin de ma première formation
            </p>
            <p>
              Level Up est une application permettant la gestion de son temps
              par le biais d'un calendrier de tâches. On y retrouve également
              des articles orientés vers le développement personnel.
            </p>
            <p>
              <span class="underline">Conditions</span> : from scratch, pas de
              libraires, créer son propre Framework MVC
            </p>
            <p><strong>Bientôt en ligne</strong></p>
          </div>
        </div>
        <div class="flex-row persoproject">
          <a href="#"><img src="assets/projet2.png" alt="Projet 2" /></a>
          <div class="flex-column">
            <a href="#"><h4>Projet 2 - Share My Book</h4></a>
            <p>
              Projet réalisé dans le cadre de la fin de ma seconde formation
            </p>
            <p>
              Share My Book est un outil de gestion de listes de livres. Les
              utlisateurs peuvent y échanger leurs écrits favoris.
            </p>
            <p>
              <span class="underline">Conditions</span> : from scratch, Front
              ANGULAR et Back SYMFONY
            </p>
            <p><strong>Bientôt en ligne</strong></p>
          </div>
        </div>
      </article>

      <h3>Autres projets réalisés</h3>

      <article></article>

      <article class="flex-row">
        <h4>Compétences globales à tous les projets</h4>
        <ul>
          <li>Responsive Design</li>
          <li>Architecture de base de données</li>
          <li>CRUD PHP (Create Read Update Delete)</li>
        </ul>
      </article>

      <article class="flex-row">
        <h4>Développement d'un blog</h4>
        <ul>
          <li>Ajout/Suppression/Modification d'articles</li>
          <li>Inscription/Connexion/Session Utilisateurs</li>
        </ul>
      </article>

      <article class="flex-row">
        <h4>Développement d'un site e-commerce</h4>
        <ul>
          <li>Validation Formulaire PHP/JS</li>
          <li>Hashage des mots de passe</li>
          <li>Gestion de paniers de commande</li>
          <li>Gestion des stocks</li>
          <li>Sandbox Paiement</li>
        </ul>
      </article>

      <article class="flex-row">
        <h4>Développement d'un site Wordpress</h4>
        <ul>
          <li>Installation</li>
          <li>Intégration thème personnalisé</li>
          <li>Installation Plugin</li>
        </ul>
      </article>
    </section>
  `,
  styles: [],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
