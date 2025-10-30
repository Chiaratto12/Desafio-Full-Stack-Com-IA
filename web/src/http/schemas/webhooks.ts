import { z } from 'zod';
import { he } from 'zod/v4/locales';

export const webhookListItemSchema = z.object({
    id: z.uuidv7(),
    method: z.string(),
    pathname: z.string(),
    createdAt: z.coerce.date(),
})

export const webhookListSchema = z.object({
    webhooks: z.array(webhookListItemSchema),
    nextCursor: z.string().nullable(),
})

export const webhookDetailSchema = z.object({
    id: z.uuidv7(),
    method: z.string(),
    ip: z.string(),
    contentType: z.string().nullable(),
    contentLength: z.number().nullable(),
    body: z.string().nullable(),
    pathname: z.string(),
    statusCode: z.number(),
    createdAt: z.coerce.date(),
    queryParams: z.record(z.string(), z.string()).nullable(),
    headers: z.record(z.string(), z.string()),
})