# SmartSocial PME - PFE

Plateforme de gestion de réseaux sociaux orientee PME e-commerce, inspiree de Hootsuite mais simplifiee et assistee par IA.

## Objectif MVP

Le MVP cible permet de:
- connecter une Page Facebook et une Page LinkedIn;
- publier des posts texte + image en immediate ou planifie;
- gerer un calendrier editorial avec suggestion d'horaire;
- centraliser inbox (Facebook messages+commentaires, LinkedIn commentaires);
- utiliser 3 modes de reponse (manuel, assiste, auto securise);
- suivre 5 KPI business (impressions, engagement rate, top posts, temps de reponse, sentiment).

## Choix techniques valides

- Frontend: React + TypeScript + Vite
- Backend: Express + TypeScript (monolithe modulaire)
- DB: PostgreSQL (Prisma ORM)
- Queue: Redis + BullMQ
- Media: Cloudinary
- IA: GPT-4.1-mini + RAG, escalade vers modele plus fort si necessaire
- Deploiement cible: Vercel + Render + Neon + Upstash

## Documentation produite

- `docs/pfe-smartsocial-specification-fr.md`: specification fonctionnelle et technique complete (FR)
- `docs/architecture/diagrammes-mermaid.md`: architecture et flux (Mermaid)
- `docs/implementation/api-contract-mvp.md`: API REST MVP
- `docs/implementation/backlog-sprints-45j.md`: planification S1-S6
- `docs/qualite-risques-tests.md`: risques, mitigation, qualite et tests
- `docs/integrations/permissions-checklist.md`: permissions Meta/LinkedIn et fallback
- `docs/frontend/frontend-execution-pack-fr.md`: travail frontend page par page
- `docs/frontend/ui-design-system-fr.md`: design system UI MVP
- `docs/frontend/prompts/google-ai-studio-prompts-fr.md`: prompts structures Google AI Studio
- `docs/frontend/page-checklists-mvp-fr.md`: checklist d'acceptance par page
- `docs/frontend/workflow-design-to-code-fr.md`: methode d'execution design -> code
- `docs/frontend/task-board-frontend-mvp.csv`: board de taches frontend par sprint

## Base de donnees initiale

- `backend/prisma/schema.prisma`: modele relationnel MVP (utilisateurs, organisations, canaux, posts, inbox, IA, analytics)

## Notes importantes

- Instagram est traite en mode "coming soon" (mock) pour reduire le risque de delai review API.
- Le mode auto IA est strictement controle (intentions autorisees, seuil de confiance, escalade humaine).
- L'implementation doit avancer par increments: fondations -> modules coeur -> integrations -> stabilisation.
