# Steam Web API Types

[![npm version](https://img.shields.io/npm/v/@oddlaceguy49/steam-web-api-types.svg)](https://www.npmjs.com/package/@oddlaceguy49/steam-web-api-types)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive set of TypeScript type definitions for the **raw JSON responses** from the official Steam Web API, with optional, ready-to-use Zod schemas for runtime validation.

This package provides accurate, up-to-date interfaces for developers making direct `fetch` calls to `api.steampowered.com`, enabling full type safety and editor autocomplete for your backend projects.

## The Problem This Solves

Most existing `@types` packages for Steam are for specific Node.js wrapper libraries (like `steamapi` or `steam-user`), which transform the raw API response into a different format. This package is for developers who are interacting with the **raw, untransformed API** directly.

It provides both pure TypeScript types for static analysis and optional Zod schemas for robust runtime validation.

## Features

-   **Types by Default:** The main entry point provides pure TypeScript types with zero runtime dependencies.
-   **Optional Zod Schemas:** Includes a secondary `/zod` entry point with pre-built Zod schemas for easy and safe data parsing.
-   **Accurate:** Modeled directly from the official [Steam Web API documentation](https://partner.steamgames.com/doc/webapi).
-   **Organized:** Types and schemas are split into files that mirror the Steam API services (e.g., `ISteamUser.ts`).
-   **Lightweight:** The default import path has zero dependencies. Zod is an optional peer dependency.

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

## Advanced Usage with Zod Schemas (Recommended)

For robust runtime validation, this package provides an optional set of Zod schemas.

**1. Install Zod as a dependency:**

```bash
bun add zod
```

**2. Import schemas from the `/zod` entry point:**
Notice the import path now includes `/zod`. This gives you access to the validation schemas.

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

## Contributing

Contributions are welcome! If you find a missing endpoint or an incorrect type/schema, please feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/Oddlaceguy49/steam-web-api-types).

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/add-ISteamNews`).
3.  Add your new types to a file in `src/types/` and the corresponding Zod schemas to a file in `src/zod/`.
4.  Export them from `src/index.ts` and `src/zod.ts` respectively.
5.  Submit a pull request.

## License

This project is licensed under the MIT License.
