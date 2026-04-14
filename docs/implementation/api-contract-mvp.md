# Contrats API REST - MVP

Base URL: `/api/v1`

## Auth

- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/refresh`
- `POST /auth/logout`
- `GET /auth/me`

## Organisations et roles

- `POST /orgs`
- `GET /orgs/:orgId`
- `POST /orgs/:orgId/members`
- `PATCH /orgs/:orgId/members/:userId/role`

Roles: `OWNER`, `MANAGER`, `AGENT`

## Integrations sociales

- `GET /integrations/facebook/oauth/start`
- `GET /integrations/facebook/oauth/callback`
- `GET /integrations/linkedin/oauth/start`
- `GET /integrations/linkedin/oauth/callback`
- `GET /integrations/:orgId/channels`
- `GET /integrations/:orgId/channels/available-pages?provider=facebook|linkedin`
- `POST /integrations/:orgId/channels/select-pages`
- `DELETE /integrations/:orgId/channels/:channelId`

## Posts et calendrier

- `POST /orgs/:orgId/posts`
  - body: `content`, `mediaUrls[]`, `destinationChannelIds[]`, `scheduledAt?`
- `GET /orgs/:orgId/posts?status=&from=&to=&channel=`
- `GET /orgs/:orgId/calendar?month=YYYY-MM`
- `POST /orgs/:orgId/posts/:postId/publish-now`
- `PATCH /orgs/:orgId/posts/:postId`
- `DELETE /orgs/:orgId/posts/:postId`

Exemple `select-pages`:
```json
{
  "provider": "facebook",
  "pages": [
    { "externalPageId": "123", "displayName": "SoloSoft" },
    { "externalPageId": "456", "displayName": "Ma Boutique" }
  ]
}
```

## Inbox

- `GET /orgs/:orgId/inbox/threads?channel=&type=&status=&assignee=`
- `GET /orgs/:orgId/inbox/threads/:threadId/messages`
- `POST /orgs/:orgId/inbox/threads/:threadId/reply-manual`
- `POST /orgs/:orgId/inbox/threads/:threadId/reply-assisted`
- `POST /orgs/:orgId/inbox/threads/:threadId/reply-auto-toggle`
- `POST /webhooks/facebook`
- `POST /webhooks/linkedin`

## IA et connaissance

- `POST /orgs/:orgId/ai/generate-post`
- `POST /orgs/:orgId/ai/suggest-reply`
- `GET /orgs/:orgId/ai/policies`
- `PATCH /orgs/:orgId/ai/policies`
- `POST /orgs/:orgId/knowledge/documents`
- `GET /orgs/:orgId/knowledge/documents`
- `POST /orgs/:orgId/knowledge/approve/:memoryId`

## Analytics

- `GET /orgs/:orgId/analytics/overview?from=&to=`
- `GET /orgs/:orgId/analytics/posts/top?limit=10`
- `GET /orgs/:orgId/analytics/inbox/performance?from=&to=`

## Reponses standard

- Success:
```json
{ "success": true, "data": {} }
```

- Erreur:
```json
{ "success": false, "error": { "code": "FORBIDDEN", "message": "..." } }
```

## Guardrails API

- Toute route `org` exige JWT valide + appartenance org.
- Les routes policy/auto-mode exigent role `OWNER` ou `MANAGER`.
- `AGENT` peut repondre, mais ne peut pas modifier les regles globales.
