# Steam Web API Types

[![npm version](https://img.shields.io/npm/v/@oddlaceguy49/steam-web-api-types.svg)](https://www.npmjs.com/package/@oddlaceguy49/steam-web-api-types)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive set of TypeScript type definitions for the **raw JSON responses** from the official Steam Web API.

This package provides accurate, up-to-date interfaces for developers making direct `fetch` calls to `api.steampowered.com`, enabling full type safety and editor autocomplete for your backend projects.

## The Problem This Solves

Most existing `@types` packages for Steam are for specific Node.js wrapper libraries (like `steamapi` or `steam-user`), which transform the raw API response into a different format. This package is for developers who are interacting with the **raw, untransformed API** directly, for example, in Cloudflare Workers, Deno, or modern Node.js with `fetch`.

It provides types that match the exact, sometimes deeply nested, JSON structure that Steam's servers return.

## Features

-   **Accurate:** Types are modeled directly from the official [Steam Web API documentation](https://partner.steamgames.com/doc/webapi).
-   **Comprehensive:** Aims to cover all major services (`ISteamUser`, `ISteamUserAuth`, `IPlayerService`, etc.). (Contributions welcome!)
-   **Lightweight:** Zero runtime dependencies. This is a `devDependency` only.
-   **Self-Contained:** No external type dependencies needed.
-   **Organized:** Types are split into files that mirror the Steam API services (e.g., `ISteamUser.ts`).

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

## Basic Usage

After installation, you can import the specific response types you need and use them to cast the `unknown` JSON data from a `fetch` call.

### Example: Verifying a User Ticket

This example shows how to use the types in a secure backend function to verify a session ticket.

```typescript
import type { AuthenticateUserTicketResponse } from "@oddlaceguy49/steam-web-api-types";

async function verifySteamTicket(
    ticket: string,
    apiKey: string,
    appId: string
): Promise<string | null> {
    const url = `https://api.steampowered.com/ISteamUserAuth/AuthenticateUserTicket/v1/?key=${apiKey}&appid=${appId}&ticket=${ticket}`;

    try {
        const response = await fetch(url);
        if (!response.ok) return null;

        // Cast the raw JSON to your imported type
        const data = (await response.json()) as AuthenticateUserTicketResponse;

        // Use a type guard to safely access the properties
        if ("params" in data.response && data.response.params.result === "OK") {
            // TypeScript now knows `data.response.params` exists and has a `steamid` property.
            return data.response.params.steamid;
        } else {
            // Handle error response
            return null;
        }
    } catch (error) {
        console.error("Error verifying Steam ticket:", error);
        return null;
    }
}
```

## Advanced Usage with Zod

While this package provides the static types, it is highly recommended to perform **runtime validation** on any data received from an external API. The [Zod](https://zod.dev/) library is perfect for this.

This package empowers you to build Zod schemas that are themselves type-checked against the official interfaces.

### Example: Validating a Player Summary

1.  **Install Zod:** `bun add zod`

2.  **Create a validator:**

    ```typescript
    import { z } from "zod";
    // Import the raw type from this package for comparison
    import type { GetPlayerSummariesResponse } from "@oddlaceguy49/steam-web-api-types";

    // Create a Zod schema that mirrors the raw type structure
    const PlayerSummarySchema = z.object({
        steamid: z.string(),
        personaname: z.string(),
        avatarfull: z.string().url(),
        // ... other fields as needed
    });

    export const GetPlayerSummariesResponseSchema = z.object({
        response: z.object({
            players: z.array(PlayerSummarySchema),
        }),
    });

    // Optional: This line ensures your Zod schema matches the package's type definition.
    // If you update the types package and there's a breaking change, this will fail to compile.
    type Check = z.infer<
        typeof GetPlayerSummariesResponseSchema
    > extends GetPlayerSummariesResponse
        ? true
        : false;
    ```

3.  **Use it in your function:**

    ```typescript
    async function getSummariesSafely(apiKey: string, steamids: string[]) {
        const response = await fetch(/* ... */);
        const unknownData = await response.json();

        const result = GetPlayerSummariesResponseSchema.safeParse(unknownData);

        if (!result.success) {
            console.error("Validation failed:", result.error);
            return null;
        }

        // result.data is now fully typed and validated at runtime!
        return result.data.response.players;
    }
    ```

## Contributing

Contributions are welcome! If you find a missing endpoint or an incorrect type, please feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/Oddlaceguy49/steam-web-api-types).

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/add-ISteamNews-types`).
3.  Add your new types in a new file (e.g., `src/ISteamNews.ts`).
4.  Export them from `src/index.ts`.
5.  Submit a pull request.

## License

This project is licensed under the MIT License.
