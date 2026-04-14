# Checklist Integrations et Permissions (Meta + LinkedIn)

## 1) Facebook (Meta)

### Pre-requis
- [ ] Meta Developer App creee
- [ ] Facebook Page admin accessible
- [ ] URL backend publique HTTPS (webhooks)

### Permissions cibles (selon endpoints utilises)
- [ ] `pages_show_list`
- [ ] `pages_read_engagement`
- [ ] `pages_manage_posts`
- [ ] `pages_manage_metadata`
- [ ] `pages_messaging` (si Messenger utilise)
- [ ] `pages_read_user_content` (si lecture commentaires/messages necessaire)

### Webhooks
- [ ] Verification token configure
- [ ] Signature verification active
- [ ] Subscriptions: feed/messages selon scope

### Risques
- App review potentiellement longue.
- Certaines permissions necessitent screencasts de justification.

## 2) LinkedIn

### Pre-requis
- [ ] LinkedIn Developer App
- [ ] Organisation/Page admin
- [ ] Redirect URI configure

### Capacites MVP visees
- [ ] OAuth organisation
- [ ] Publication posts page
- [ ] Lecture/gestion commentaires (selon scopes)

### Limitation connue
- Messaging prive LinkedIn souvent non disponible pour ce contexte.

## 3) Strategie fallback demo

- Si permission critique non approuvee a temps:
  - garder publication active sur canaux disponibles;
  - simuler flux manquant avec donnees traceables (mode demo);
  - documenter la limite dans le rapport + roadmap.

## 4) Evidences pour rapport

- Captures ecran dashboards developpeur (permissions/scopes).
- Journal des tentatives review/validation.
- Tableau comparatif "demande / obtenu / impact".
