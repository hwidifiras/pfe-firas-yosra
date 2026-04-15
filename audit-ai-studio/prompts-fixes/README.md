# Prompts fixes AI Studio - SmartSocial PME

Ce dossier contient les prompts correctifs **un par issue** (issus de l'audit frontend) pour execution dans Google AI Studio.

## Mode d'emploi
1. Ouvrir un fichier prompt.
2. Copier le bloc `text` dans Google AI Studio.
3. Generer la correction.
4. Integrer le resultat dans `ai-studio-pfe-app`.
5. Commit/push puis demander review.

## Regle stricte
- Ne pas sortir du MVP.
- Ne pas introduire de fonctionnalite non prevue backend.
- Respecter les endpoints whitelist dans chaque prompt.

## Suivi execution
| Prompt file | Issue cible | Resultat attendu | Resultat obtenu | PASS/FAIL | Notes mini-prompt |
|---|---|---|---|---|---|
| 01-issue-analytics-page-absente.md | Analytics absente | Page Analytics complete MVP |  |  |  |
| 02-issue-incoherence-type-view-settings.md | Navigation/views incoherentes | Mapping vues propre sans placeholder |  |  |  |
| 03-issue-sdk-ia-direct-frontend.md | SDK IA direct frontend | IA backend-only |  |  |  |
| 04-issue-layout-global-espace-perdu.md | Gap layout global | Full width utile sans vide |  |  |  |
| 05-issue-calendrier-nested-scroll.md | Nested scroll semaine | Scroll principal unique |  |  |  |
| 06-issue-etats-ui-incomplets.md | Etats UI incomplets | L/E/E/S sur chaque page |  |  |  |
| 07-issue-mocks-non-alignes-contrat-api.md | Mocks non alignes API | Structures UI alignables endpoints |  |  |  |
| 08-issue-rbac-membres-owner-only.md | RBAC membres trop restrictif | RBAC conforme docs |  |  |  |
| 09-issue-terminologie-non-homogene.md | Labels non homogenes | Terminologie FR uniforme |  |  |  |
| 10-issue-intents-ia-anglais-dans-parametres.md | Intents anglais | Intents FR conformes spec |  |  |  |
| 11-issue-seuil-ia-0-85-vs-0-75.md | Seuil IA incoherent | Seuil 0.75 respecte |  |  |  |
| 12-issue-barre-debug-visible-dashboard.md | Debug visible | Version demo propre |  |  |  |
| 13-issue-label-role-editeur-vs-agent.md | Label role incorrect | Label Agent conforme |  |  |  |
| 14-issue-accessibilite-basique-a-renforcer.md | Accessibilite minimale | Focus/labels/ARIA de base |  |  |  |
