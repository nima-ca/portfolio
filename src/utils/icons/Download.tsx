import { SVGProps } from "react";

export function Download(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <path
        fill="currentColor"
        d="M23.5 22H23v-2h.5a4.5 4.5 0 0 0 .36-9H23l-.1-.82a7 7 0 0 0-13.88 0L9 11h-.86a4.5 4.5 0 0 0 .36 9H9v2h-.5A6.5 6.5 0 0 1 7.2 9.14a9 9 0 0 1 17.6 0A6.5 6.5 0 0 1 23.5 22Z"
      ></path>
      <path
        fill="currentColor"
        d="M17 26.17V14h-2v12.17l-2.59-2.58L11 25l5 5l5-5l-1.41-1.41L17 26.17z"
      ></path>
    </svg>
  );
}
