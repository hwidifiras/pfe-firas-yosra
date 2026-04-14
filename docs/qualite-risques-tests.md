# Qualite, Risques et Strategie de Test

## 1. Registre des risques principaux

| Risque | Probabilite | Impact | Mitigation |
|---|---|---|---|
| Delai review permissions Meta | Elevee | Eleve | Travailler avec pages test, fallback demo, Instagram mock |
| Limitations LinkedIn messages | Elevee | Moyen | Scope LinkedIn commentaires uniquement |
| Erreurs auto-reponse IA | Moyenne | Eleve | Guardrails stricts, seuil 0.75, escalade humaine |
| Depassement budget API IA | Moyenne | Moyen | GPT-4.1-mini par defaut, quotas, logs couts |
| Surcharge equipe junior | Elevee | Eleve | Scope MVP strict, hors-MVP gele, rituels hebdo |
| Instabilite webhook/social API | Moyenne | Eleve | Retry queue, idempotence, observabilite |

## 2. Politique qualite MVP

- Definition of Done par fonctionnalite:
  - criteres d'acceptation verifies;
  - test manuel execute;
  - logs d'audit disponibles;
  - gestion erreurs UI + API.
- Aucune fonctionnalite advanced n'entre avant fermeture des blocs MVP.

## 3. Plan de test

### 3.1 Tests fonctionnels
- Auth + RBAC (acces owner/manager/agent).
- Connexion/deconnexion canaux sociaux.
- Publication immediate et planifiee multi-canaux.
- Inbox filtres + lecture thread + reponse manuelle/assistee/auto.
- Dashboard KPI cohérent.

### 3.2 Tests integration
- OAuth callbacks Facebook/LinkedIn.
- Webhooks entrants (evenements inbox).
- Worker scheduler BullMQ + retries.
- Cloudinary upload.
- OpenAI + RAG retrieval.

### 3.3 Tests non-regression
- Rejouer scenario demo complet avant chaque livraison.
- Verifier roles et restrictions politiques IA.

## 4. Securite minimale

- JWT access court + refresh token rotation.
- Chiffrement des tokens OAuth en base.
- RBAC strict sur endpoints sensibles.
- Sanitization input + limite de taille message.
- Rate limiting API et webhook signature verification.

## 5. Checklist pre-demo

- [ ] Comptes sociaux de test operationnels.
- [ ] Cles API valides (Meta, LinkedIn, OpenAI, Cloudinary).
- [ ] Cron/worker actifs en production.
- [ ] Base de connaissance chargee (FAQ/politiques/catalogue).
- [ ] Script demo repete au moins 2 fois.
- [ ] Plan B (captures/video) en cas indisponibilite API externe.
