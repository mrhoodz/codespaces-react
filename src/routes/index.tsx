import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Welcome to KathuKonnect 👋</h1>
      <img
        src="/Final Social media post-100.jpg"
        alt="kathu konnect social media ad"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
    {
      property: "og:image",
      content: "https://kathukonnect.com/Final-Social-media-post-100.jpg",
    },
  ],
};
