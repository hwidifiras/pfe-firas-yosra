# Specification Fonctionnelle et Technique - SmartSocial PME

## 1. Contexte et problematique

Les PME e-commerce gerent souvent Facebook et LinkedIn de maniere dispersee, avec des reponses lentes et des publications irregulieres. Les solutions existantes sont puissantes mais couteuses et complexes. SmartSocial PME vise une approche plus simple, economique et orientee usage quotidien.

## 2. Vision produit

Fournir une plateforme unique permettant a une PME e-commerce de planifier ses publications, centraliser ses interactions clients, et accelerer ses reponses grace a une IA securisee.

## 3. Perimetre MVP (verrouille)

### Inclus
- Authentification et gestion des roles: Owner, Manager, Agent.
- Page Parametres a onglets (organisation, membres/roles, reseaux sociaux, publications, inbox, IA, securite compte, journal d'audit).
- Connexion des canaux: Facebook Page et LinkedIn Page.
- Publication multi-canaux: texte + image, immediate ou planifiee.
- Calendrier editorial: affichage mensuel/hebdomadaire, statut des posts.
- Suggestion d'horaire optimal de publication (heuristique simple).
- Inbox unifiee avec filtres:
  - Facebook: messages + commentaires
  - LinkedIn: commentaires
- Modes de reponse:
  - Manuel
  - Assiste (brouillon IA valide par humain)
  - Auto securise
- Dashboard analytics MVP (5 KPI): impressions, engagement rate, top posts, temps moyen de reponse, sentiment commentaires.
- Journalisation des actions IA/humaines (audit).
- Securite du compte: changement mot de passe, sessions actives (deconnexion), 2FA conditionnelle (activee si backend disponible, sinon "coming soon").

### Hors-MVP (advanced)
- Analyse concurrentielle auto live.
- Gestion publicitaire (ads/campaigns).
- Agent autonome generaliste ("do anything").
- Integration Instagram reelle (si permissions non obtenues a temps).

## 4. Personas

### Persona 1 - Owner PME e-commerce
- Besoin: visibilite globale, gain de temps, controle de la relation client.
- Douleur: reponses tardives, outils multiples, manque de pilotage.

### Persona 2 - Community Manager (Agent)
- Besoin: traiter rapidement messages/commentaires.
- Douleur: volume, repetitivite, risque d'erreurs de ton.

### Persona 3 - Responsable Marketing (Manager)
- Besoin: plan editorial coherent et performant.
- Douleur: difficulte a mesurer ce qui marche.

## 5. Cas d'utilisation principaux

1. Connecter un compte social (OAuth).
2. Creer un post multi-canaux avec image.
3. Planifier un post depuis le calendrier.
4. Recevoir et filtrer messages/commentaires dans inbox.
5. Repondre en manuel/assiste/auto.
6. Suivre KPI et performance des publications.
7. Ajuster les regles IA et limites d'automatisation.
8. Gerer parametres organisationnels et securite du compte.

## 6. User stories MVP

- En tant qu'Owner, je veux publier sur Facebook et LinkedIn depuis un seul ecran pour reduire mon temps operationnel.
- En tant qu'Agent, je veux filtrer les conversations par canal et statut pour traiter les priorites.
- En tant que Manager, je veux valider les reponses IA avant envoi en mode assiste.
- En tant qu'Owner, je veux activer le mode auto avec regles de securite pour les demandes simples.
- En tant que Manager, je veux voir les meilleurs posts et les temps de reponse pour ajuster la strategie.

## 7. Regles IA (Inbox)

### Intentions autorisees en auto
- prix, stock, livraison, retour simple, horaires, promotion.

### Intentions interdites en auto
- remboursement, litige, juridique, plainte, toxicite, ambiguite.

### Parametres valides
- Seuil de confiance minimum: 0.75.
- Auto desactive hors horaires ouvrables.
- Limite auto/jour: configurable par organisation.
- Nombre auto consecutif dynamique:
  - confiance >= 0.90 et risque faible: max 2
  - confiance 0.75 a 0.89: max 1
  - risque eleve: 0 (escalade immediate)

### Langues
- Plateforme en francais.
- Reponse par defaut en francais.
- Si message client en darija/fr+darija, l'IA peut repondre en registre adapte.

## 8. Criteres d'acceptation (MVP)

- Publication multi-canaux texte+image fonctionne en immediate et planifiee.
- Inbox affiche les interactions ciblees avec filtres fonctionnels.
- Les 3 modes de reponse sont operationnels.
- Le mode auto respecte strictement les regles de securite.
- Dashboard affiche les 5 KPI avec donnees coherentes.
- Les actions sensibles sont journalisees et auditables.
- La page Parametres couvre les sections MVP avec restrictions RBAC conformes.
- Le changement de mot de passe et la gestion des sessions sont operationnels.
- La 2FA est geree selon disponibilite backend (activee si possible, sinon "coming soon" explicite).

## 9. Exigences non fonctionnelles

- Securite: JWT + refresh token, RBAC strict, logs d'audit, gestion mot de passe/sessions, 2FA conditionnelle.
- Performance: affichage inbox < 2s sur volume moderate.
- Disponibilite demo: deploiement online operationnel.
- Maintenabilite: architecture modulaire, conventions de code claires.

## 10. Delivrables demo jury

- Scenario live: connexion compte, creation/scheduling post, traitement inbox, IA assistee/auto, dashboard KPI.
- Captures et logs d'audit montrant controle et securite.
- Limites assumees + roadmap post-MVP.
