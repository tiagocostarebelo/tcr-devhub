import type { Route } from "./+types/index";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "DevHub | Welcome" },
        { name: "description", content: "Custom web dev hub" },
    ];
}

export default function Home() {
    return <section>My App</section>;
}
