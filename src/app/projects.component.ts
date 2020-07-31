import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <section id="project">
      <p class="waiting">Cette section est en cours de réalisation.</p>

      <article>
        <h3>Projets Personnels</h3>
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
