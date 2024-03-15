# Wsocket Store
Minimal Baileys data storage for your favorite DBMS built with Prisma. This library is a simple handler for Baileys event emitter that will listen and update your data in the database
## Requirements
- Prisma version 5.10.x or higher
- Baileys version 5.x.x or higher
## Supported Databases
```
model Session {
  pkId      BigInt    @id @default(autoincrement())
  sessionId String
  id        String
-  data      String @db.Text
+  data      String

  @@unique([sessionId, id], map: "unique_id_per_session_id_session")
  @@index([sessionId])
}
```
- For MongoDB, you need to follow this convention and update the pkId field. Then follow the previous CockroachDB guide
- SQLite and SQL Server database are not supported since they didn't support Prisma's JSON scalar type
## Installation
```
# Using npm
npm i @ookamiiixd/baileys-store

# Using yarn
yarn add @ookamiiixd/baileys-store
```
## Usage
```
import pino from 'pino';
import makeWASocket from '@whiskeysockets/baileys';
import { PrismaClient } from '@prisma/client';
const { initStore, useSession } from 'wsocket-store';

const logger = pino();
const socket = makeWASocket();
const prisma = new PrismaClient();

// You only need to run this once
initStore({
  prisma, // Prisma client instance
  logger, // Pino logger (Optional)
});

// Create a store and start listening to the events
const store = new Store('unique-session-id-here', socket.ev);

```

