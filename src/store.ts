import { PrismaClient } from "@prisma/client";
import { SocketConfig } from "@whiskeysockets/baileys";
import { setLogger, setPrisma } from "./shared";

type initStoreOptions = {
    /** Prisma client instance */
    prisma: PrismaClient;
    /** Baileys pino logger */
    logger?: SocketConfig['logger'];
  };
  

/** Initialize shared instances that will be consumed by the Store instance */
export function initStore({ prisma, logger }: initStoreOptions) {
    setPrisma(prisma);
    setLogger(logger);
  }
  