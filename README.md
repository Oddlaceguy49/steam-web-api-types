# Steam Web API Types

[![npm version](https://img.shields.io/npm/v/@oddlaceguy49/steam-web-api-types.svg)](https://www.npmjs.com/package/@oddlaceguy49/steam-web-api-types)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive set of TypeScript type definitions for the **raw JSON responses** from the official Steam Web API, with optional, ready-to-use schemas for multiple validation libraries.

This package provides accurate, up-to-date interfaces for developers making direct `fetch` calls to `api.steampowered.com`, enabling full type safety and editor autocomplete for your backend projects.

## The Problem This Solves

Most existing `@types` packages for Steam are for specific Node.js wrapper libraries (like `steamapi` or `steam-user`), which transform the raw API response into a different format. This package is for developers who are interacting with the **raw, untransformed API** directly.

It provides both pure TypeScript types for static analysis and optional schemas for robust runtime validation using your favorite library.

## Features

-   **Types by Default:** The main entry point provides pure TypeScript types with zero runtime dependencies.
-   **Optional Schemas:** Includes secondary entry points for multiple popular validation libraries.
-   **Accurate:** Modeled directly from the official [Steam Web API documentation](https://partner.steamgames.com/doc/webapi).
-   **Organized:** Types and schemas are split into files that mirror the Steam API services (e.g., `ISteamUser.ts`).
-   **Lightweight:** The default import path has zero dependencies. Validation libraries are optional peer dependencies.

### Supported Schemas

-   [ ] ArkType
-   [x] Effect
-   [ ] io-ts
-   [ ] Javascript Transform
-   [x] JSON Schema
-   [x] TypeBox
-   [ ] Typescript Transform
-   [x] Valibot
-   [ ] Value Transform
-   [x] Yup
-   [ ] Yrel
-   [x] Zod

### Implemented Steam Web API Modules

-   [ ] IBroadcastService
-   [ ] ICloudService
-   [ ] ICheatReportingService
-   [ ] IEconMarketService
-   [ ] IEconService
-   [ ] IGameInventory
-   [ ] IGameNotificationsService
-   [ ] IGameServersService
-   [ ] IInventoryService
-   [ ] ILobbyMatchmakingService
-   [x] IPlayerService
-   [ ] IPublishedFileService
-   [ ] ISiteLicenseService
-   [ ] ISteamApps
-   [ ] ISteamCDN
-   [ ] ISteamDirectory
-   [ ] ISteamEconomy
-   [ ] ISteamGameServerStats
-   [ ] ISteamLeaderboards
-   [ ] ISteamMicroTxn
-   [ ] ISteamMicroTxnSandbox
-   [x] ISteamNews
-   [ ] ISteamRemoteStorage
-   [x] ISteamUser
-   [x] ISteamUserAuth
-   [ ] ISteamUserOAuth
-   [ ] ISteamUserStats
-   [ ] ISteamWebAPIUtil
-   [ ] ISteamWebUserPresenceOAuth
-   [ ] IStoreService
-   [ ] IWorkshopService

## Installation

```bash
# Using bun
bun add -D @oddlaceguy49/steam-web-api-types

# Using pnpm
pnpm add -D @oddlaceguy49/steam-web-api-types

# Using npm
npm install --save-dev @oddlaceguy49/steam-web-api-types

# Using yarn
yarn add --dev @oddlaceguy49/steam-web-api-types
```

## Basic Usage (Types Only)

By default, you can import pure TypeScript interfaces for type casting and function signatures. This requires no additional libraries.

```typescript
import type { GetPlayerSummariesResponse } from "@oddlaceguy49/steam-web-api-types";

async function getSummaries(apiKey: string, steamids: string[]) {
    const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${apiKey}&steamids=${steamids.join(
        ","
    )}`;
    const response = await fetch(url);

    // Use the imported type for casting.
    const data = (await response.json()) as GetPlayerSummariesResponse;

    return data.response.players;
}
```

## Advanced Usage with Schemas (Recommended)

For robust runtime validation, this package provides optional sets of schemas for various libraries.

**1. Install your chosen library as a dependency:**

```bash
# Example for Zod
bun add zod

# Example for TypeBox
bun add typebox
```

**2. Import schemas from the corresponding entry point:**
Notice the import path now includes the library name (e.g., `/zod`, `/typebox`). This gives you access to the validation schemas.

### Zod Example

```typescript
import { GetPlayerSummariesResponseSchema } from "@oddlaceguy49/steam-web-api-types/zod";
// You can still import the inferred type for function signatures if needed
import type { RawPlayerSummary } from "@oddlaceguy49/steam-web-api-types";

async function getSummariesSafely(
    apiKey: string,
    steamids: string[]
): Promise<RawPlayerSummary[] | null> {
    const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${apiKey}&steamids=${steamids.join(
        ","
    )}`;

    try {
        const response = await fetch(url);
        if (!response.ok) return null;

        const unknownData = await response.json();

        // Use the imported Zod schema to validate and parse the data
        const result = GetPlayerSummariesResponseSchema.safeParse(unknownData);

        if (!result.success) {
            console.error("Validation failed:", result.error.flatten());
            return null;
        }

        // result.data is now fully typed and guaranteed to be safe!
        return result.data.response.players;
    } catch (error) {
        console.error("Error fetching summaries:", error);
        return null;
    }
}
```

### TypeBox Example

```typescript
import { Type } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";
import { GetPlayerSummariesResponseType } from "@oddlaceguy49/steam-web-api-types/typebox";
import type { RawPlayerSummary } from "@oddlaceguy49/steam-web-api-types";

async function getSummariesWithTypeBox(
    apiKey: string,
    steamids: string[]
): Promise<RawPlayerSummary[] | null> {
    const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${apiKey}&steamids=${steamids.join(
        ","
    )}`;

    try {
        const response = await fetch(url);
        if (!response.ok) return null;

        const unknownData = await response.json();

        // Use the imported TypeBox type to validate the data
        if (!Value.Check(GetPlayerSummariesResponseType, unknownData)) {
            console.error("Validation failed");
            return null;
        }

        // unknownData is now validated and can be safely used
        return unknownData.response.players;
    } catch (error) {
        console.error("Error fetching summaries:", error);
        return null;
    }
}
```

## How Schemas Are Generated

The validation schemas for this project are automatically generated from the base TypeScript types located in `src/types`. This ensures that the schemas stay in sync with the type definitions. The generation process uses a combination of tools:

-   **[TypeBox Codegen](https://github.com/sinclairzx81/typebox-codegen)** is the primary tool used to generate schemas for ~~most~~ all of the supported libraries, including:

    -   Zod
    -   TypeBox
    -   Valibot
    -   Effect
    -   JSON Schema
    -   Yup

    ***

    -   **Yup** schemas are first generated with **TypeBox Codegen** and then programmatically modified to fix import statements, ensuring they are ready to use.

    -   **ArkType** schemas are also generated with **TypeBox Codegen**, but then have an // @ts-expect-error added to them.

    -   **TypeBox** schemas are notably generated using `Codegen.ModelToTypeBox` instead of `Codegen.TypescriptToTypeBox`.

This automated process is handled by the `scripts/generateSchemas.ts` file.

## Contributing

Contributions are welcome! If you find a missing endpoint or an incorrect type/schema, please feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/Oddlaceguy49/steam-web-api-types).

The general workflow is:

1.  Fork the repository and create a new branch.
2.  Add or modify the base TypeScript types in the `src/types/` directory.
3.  Run the generator script to update all schema packages: `bun run gen`.
4.  Commit your changes and submit a pull request.

## License

This project is licensed under the MIT License.
