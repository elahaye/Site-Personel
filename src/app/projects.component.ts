import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-projects',
  template: `
    <section id="project">
      <article>
        <h3>Projets Personnels</h3>
        <a class="github" [href]="env.lienGitHub"
          ><strong><i class="fab fa-github"></i>Lien GitHub</strong></a
        >

        <div class="flex-row persoproject">
          <a href="env.lienLevelUp"
            ><img src="assets/projet1.png" alt="Projet 1"
          /></a>
          <div class="flex-column">
            <a href="env.lienLevelUp"><h4>Projet 1 - Level Up</h4></a>
            <p>
              <strong>Utilisateur basique</strong> - Identifiants tests :
              elise@gmail.com / mdp : password
            </p>
            <p>
              <strong>Auteur</strong> - Identifiants tests : marcus@gmail.com /
              mdp : password
            </p>
            <p>
              <strong>Administrateur</strong> - Identifiants tests :
              admin@gmail.com / mdp : password
            </p>
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
              librairies, créer son propre Framework MVC
            </p>
          </div>
        </div>
        <div class="flex-row persoproject">
          <div class="flex-column twolinks">
            <a [href]="env.lienShareMyBook"
              ><img src="assets/projet2.png" alt="Projet 2"
            /></a>
            <a [href]="env.lienShareMyBookAdmin"
              ><img src="assets/projet2admin.png" alt="Projet 2"
            /></a>
          </div>
          <div class="flex-column connexionLogs">
            <a [href]="env.lienShareMyBook"
              ><h4>Projet 2 - Share My Book</h4></a
            >
            <a [href]="env.lienShareMyBook">
              <strong class="underline"
                ><i class="fas fa-plus-circle"></i>Lien Site Principal
              </strong>
              - Identifiants test : akira@gmail.com / mdp: password
            </a>
            <a [href]="env.lienShareMyBookAdmin">
              <strong class="underline"
                ><i class="fas fa-plus-circle"></i>Lien Site Administration
              </strong>
              - Identifiants test : admin@gmail.com / mdp: password
            </a>
            <p>
              Projet réalisé dans le cadre de la fin de ma seconde formation
            </p>
            <p>
              Share My Book est un outil de gestion de listes de livres. Les
              utilisateurs peuvent y échanger leurs écrits favoris.
            </p>
            <p>
              <span class="underline">Conditions</span> : from scratch, Front
              ANGULAR et Back SYMFONY, 10 jours
            </p>
          </div>
        </div>
      </article>

      <h3>Autres projets réalisés</h3>

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
  env = environment;

  constructor() {}

  ngOnInit(): void {}
}
