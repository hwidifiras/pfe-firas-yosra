# Workflow Design-to-Code (Frontend)

## Objectif
Transformer rapidement les specs en ecrans implementes, sans blocage ni ambiguite.

## Etape 1 - Cadrer une page (30 min)
- Lire la section correspondante dans `frontend-execution-pack-fr.md`.
- Noter: objectif page, API dependantes, composants requis.
- Definir Definition of Done de la page.

## Etape 2 - Generer proposition UX (45 min)
- Utiliser le prompt de page dans `prompts/google-ai-studio-prompts-fr.md`.
- Recuperer 1 proposition principale + 1 variante.
- Garder uniquement les patterns realistes MVP.

## Etape 3 - Fixer spec UI finale (20 min)
- Choisir layout final.
- Lister composants reutilisables.
- Identifier etats loading/empty/error/success.

## Etape 4 - Implementer en composants (2-4 h)
- Creer composant conteneur page.
- Creer composants UI reutilisables.
- Connecter API via hooks query/mutation.
- Ajouter validations formulaire.

## Etape 5 - Tester la page (30 min)
- Verifier checklist page dans `page-checklists-mvp-fr.md`.
- Verifier responsive desktop/tablette/mobile.
- Verifier role-based access si necessaire.

## Etape 6 - Revue rapide (15 min)
- Appliquer prompt d'audit UX final.
- Corriger priorite haute uniquement.

## Cadence recommandee
- 1 page complete/jour en vitesse cible.
- Priorite implementation:
  1) Login
  2) Integrations
  3) Composeur
  4) Calendrier
  5) Inbox
  6) Dashboard
  7) Analytics
  8) Centre IA

## Regles anti-derapage
- Ne jamais commencer une page sans API contract associe.
- Eviter nouvelles features hors checklist MVP.
- Si blocage backend > 2h, utiliser mock local puis reprendre.
