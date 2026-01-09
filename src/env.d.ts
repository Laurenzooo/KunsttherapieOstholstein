/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "*.jpg" {
    const content: string;
    export default content;
}

declare module "*.png" {
    const content: string;
    export default content;
}

declare module "*.svg" {
    const content: string;
    export default content;
}
