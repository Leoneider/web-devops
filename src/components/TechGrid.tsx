"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Scan } from "lucide-react";
import Section from "./Section";
import DataStreamBackground from "./animations/DataStreamBackground";

const AngularIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <title>Angular</title>
    <path d="M16.712 17.711H7.288l-1.204 2.916L12 24l5.916-3.373-1.204-2.916ZM14.692 0l7.832 16.855.814-12.856L14.692 0ZM9.308 0 .662 3.999l.814 12.856L9.308 0Zm-.405 13.93h6.198L12 6.396 8.903 13.93Z"/>
  </svg>
);

const NextIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <title>Next.js</title>
    <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/>
  </svg>
);

const SpringIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <title>Spring</title>
    <path d="M21.8537 1.4158a10.4504 10.4504 0 0 1-1.284 2.2471A11.9666 11.9666 0 1 0 3.8518 20.7757l.4445.3951a11.9543 11.9543 0 0 0 19.6316-8.2971c.3457-3.0126-.568-6.8649-2.0743-11.458zM5.5805 20.8745a1.0174 1.0174 0 1 1-.1482-1.4323 1.0396 1.0396 0 0 1 .1482 1.4323zm16.1991-3.5806c-2.9385 3.9263-9.2601 2.5928-13.2852 2.7904 0 0-.7161.0494-1.4323.1481 0 0 .2717-.1234.6174-.2469 2.8398-.9877 4.1732-1.1853 5.9018-2.0743 3.2349-1.6545 6.4698-5.2844 7.1118-9.0379-1.2347 3.6053-4.9881 6.7167-8.3959 7.9761-2.3459.8643-6.5685 1.7039-6.5685 1.7039l-.1729-.0988c-2.8645-1.4076-2.9632-7.6304 2.2718-9.6306 2.2966-.889 4.4696-.395 6.9637-.9877 2.6422-.6174 5.7043-2.5929 6.939-5.1857 1.3828 4.1732 3.062 10.643.0493 14.6434z"/>
  </svg>
);

const AWSIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <title>AWS</title>
    <path d="M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"/>
  </svg>
);

const NxIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <title>Nx</title>
    <path d="M11.987 14.138l-3.132 4.923-5.193-8.427-.012 8.822H0V4.544h3.691l5.247 8.833.005-3.998 3.044 4.759zm.601-5.761c.024-.048 0-3.784.008-3.833h-3.65c.002.059-.005 3.776-.003 3.833h3.645zm5.634 4.134a2.061 2.061 0 0 0-1.969 1.336 1.963 1.963 0 0 1 2.343-.739c.396.161.917.422 1.33.283a2.1 2.1 0 0 0-1.704-.88zm3.39 1.061c-.375-.13-.8-.277-1.109-.681-.06-.08-.116-.17-.176-.265a2.143 2.143 0 0 0-.533-.642c-.294-.216-.68-.322-1.18-.322a2.482 2.482 0 0 0-2.294 1.536 2.325 2.325 0 0 1 4.002.388.75.75 0 0 0 .836.334c.493-.105.46.36 1.203.518v-.133c-.003-.446-.246-.55-.75-.733zm2.024 1.266a.723.723 0 0 0 .347-.638c-.01-2.957-2.41-5.487-5.37-5.487a5.364 5.364 0 0 0-4.487 2.418c-.01-.026-1.522-2.39-1.538-2.418H8.943l3.463 5.423-3.379 5.32h3.54l1.54-2.366 1.568 2.366h3.541l-3.21-5.052a.7.7 0 0 1-.084-.32 2.69 2.69 0 0 1 2.69-2.691h.001c1.488 0 1.736.89 2.057 1.308.634.826 1.9.464 1.9 1.541a.707.707 0 0 0 1.066.596zm.35.133c-.173.372-.56.338-.755.639-.176.271.114.412.114.412s.337.156.538-.311c.104-.231.14-.488.103-.74z"/>
  </svg>
);

const OpenAIIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <title>OpenAI</title>
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
  </svg>
);

const LangChainIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <title>LangChain</title>
    <path d="M7.53 15.975a7.53 7.53 0 0 0 2.206-5.325A7.54 7.54 0 0 0 7.53 5.325L2.205 0A7.54 7.54 0 0 0 0 5.325a7.54 7.54 0 0 0 2.205 5.325zm11.144.493a7.54 7.54 0 0 0-5.325-2.206 7.54 7.54 0 0 0-5.325 2.206l5.325 5.325a7.54 7.54 0 0 0 5.325 2.205A7.54 7.54 0 0 0 24 21.793zM2.219 21.78a7.54 7.54 0 0 0 5.325 2.205v-7.53H.014a7.54 7.54 0 0 0 2.205 5.325M20.73 8.595a7.53 7.53 0 0 0-5.327-2.206 7.53 7.53 0 0 0-5.325 2.207l5.325 5.325z"/>
  </svg>
);

const TailwindIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <title>Tailwind CSS</title>
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
  </svg>
);

const DotNetIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <title>.NET</title>
    <path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z"/>
  </svg>
);

const RailsIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <title>Ruby on Rails</title>
    <path d="M.741 19.365h8.36s-1.598-7.291 3.693-10.243l.134-.066c1.286-.637 4.907-2.431 10.702 1.854.19-.159.37-.286.37-.286s-5.503-5.492-11.63-4.878c-3.079.275-6.867 3.079-9.09 6.783C1.058 16.233.741 19.365.741 19.365Zm8.804-.783a10.682 10.682 0 0 1-.127-1.333l1.143.412c.063.498.159.963.254 1.376l-1.27-.455Zm-7.799-4.317L.529 13.82c-.201.455-.423.984-.529 1.27l1.217.444c.137-.359.36-.878.529-1.269Zm7.831.296.857.677c.042-.413.116-.825.222-1.238l-.762-.603c-.137.391-.233.783-.317 1.164Zm2.042-2.646-.508-.762c.191-.243.413-.486.656-.709l.476.72a5.958 5.958 0 0 0-.624.751ZM4.19 8.878l.752.656c-.254.265-.498.551-.72.836l-.815-.698c.244-.265.508-.529.783-.794Zm9.799 1.027-.243-.73c.265-.117.571-.233.931-.339l.233.698a6.82 6.82 0 0 0-.921.371Zm3.122-.656.042-.667c.339.021.688.064 1.048.138l-.042.656a5.859 5.859 0 0 0-1.048-.127ZM8.942 6.392l-.476-.731c-.265.138-.54.286-.826.455l.487.741c.275-.169.54-.328.815-.465Zm9.217-.053.042-.709c-.095-.053-.36-.18-1.026-.371l-.043.699c.349.116.688.243 1.027.381ZM13.238 5.28h.106l-.212-.645c-.328 0-.666.021-1.016.063l.201.625a8.87 8.87 0 0 1 .921-.043Z"/>
  </svg>
);

const CopilotIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <title>GitHub Copilot</title>
    <path d="M23.922 16.997C23.061 18.492 18.063 22.02 12 22.02 5.937 22.02.939 18.492.078 16.997A.641.641 0 0 1 0 16.741v-2.869a.883.883 0 0 1 .053-.22c.372-.935 1.347-2.292 2.605-2.656.167-.429.414-1.055.644-1.517a10.098 10.098 0 0 1-.052-1.086c0-1.331.282-2.499 1.132-3.368.397-.406.89-.717 1.474-.952C7.255 2.937 9.248 1.98 11.978 1.98c2.731 0 4.767.957 6.166 2.093.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086.23.462.477 1.088.644 1.517 1.258.364 2.233 1.721 2.605 2.656a.841.841 0 0 1 .053.22v2.869a.641.641 0 0 1-.078.256Zm-11.75-5.992h-.344a4.359 4.359 0 0 1-.355.508c-.77.947-1.918 1.492-3.508 1.492-1.725 0-2.989-.359-3.782-1.259a2.137 2.137 0 0 1-.085-.104L4 11.746v6.585c1.435.779 4.514 2.179 8 2.179 3.486 0 6.565-1.4 8-2.179v-6.585l-.098-.104s-.033.045-.085.104c-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.545-3.508-1.492a4.359 4.359 0 0 1-.355-.508Zm2.328 3.25c.549 0 1 .451 1 1v2c0 .549-.451 1-1 1-.549 0-1-.451-1-1v-2c0-.549.451-1 1-1Zm-5 0c.549 0 1 .451 1 1v2c0 .549-.451 1-1 1-.549 0-1-.451-1-1v-2c0-.549.451-1 1-1Zm3.313-6.185c.136 1.057.403 1.913.878 2.497.442.544 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.15.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.319-.862-2.824-1.025-1.487-.161-2.192.138-2.533.529-.269.307-.437.808-.438 1.578v.021c0 .265.021.562.063.893Zm-1.626 0c.042-.331.063-.628.063-.894v-.02c-.001-.77-.169-1.271-.438-1.578-.341-.391-1.046-.69-2.533-.529-1.505.163-2.347.537-2.824 1.025-.462.472-.705 1.179-.705 2.319 0 1.211.175 1.926.558 2.361.365.414 1.084.751 2.657.751 1.21 0 1.902-.394 2.344-.938.475-.584.742-1.44.878-2.497Z"/>
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const AzureDevOpsIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <title>Azure DevOps</title>
    <path d="M15 3.62172V12.1336L11.5 15L6.075 13.025V14.9825L3.00375 10.9713L11.955 11.6704V4.00624L15 3.62172ZM12.0163 4.04994L6.99375 1V3.00125L2.3825 4.35581L1 6.12984V10.1586L2.9775 11.0325V5.86767L12.0163 4.04994Z"/>
  </svg>
);

const HexagonFrame = ({ children, colorClass }: { children: React.ReactNode, colorClass: string }) => (
  <div className="relative w-20 h-20 flex items-center justify-center">
    <motion.svg
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className={`absolute inset-0 w-full h-full ${colorClass} opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
      viewBox="0 0 100 100"
    >
      <polygon points="50,2 95,25 95,75 50,98 5,75 5,25" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
    </motion.svg>
    <motion.svg
      animate={{ rotate: -360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className={`absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] ${colorClass} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 5" />
    </motion.svg>
    <div className="relative z-10 w-11 h-11 flex items-center justify-center">
      {children}
    </div>
  </div>
);

const TECH_CARDS = [
  {
    icon: <AngularIcon className="w-full h-full text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.6)]" />,
    id: "SYS-ANG",
    title: "Angular",
    desc: "Enterprise-grade frontend framework with a robust ecosystem, ideal for scalable and highly structured applications.",
    glowColor: "group-hover:bg-red-500/15",
    themeColor: "text-red-500",
    metricColor: "text-red-400",
    scannerColor: "via-red-500/30",
    borderColor: "group-hover:border-red-500/40",
    metrics: ["v18.0_ACTIVE", "IVY_ENGINE_ONLINE", "RXJS_STREAM_SYNC"],
  },
  {
    icon: <NextIcon className="w-full h-full text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]" />,
    id: "SYS-NXT",
    title: "Next.js",
    desc: "Advanced React framework delivering optimized server-side rendering, static site generation, and seamless capabilities.",
    glowColor: "group-hover:bg-white/10",
    themeColor: "text-white",
    metricColor: "text-gray-200",
    scannerColor: "via-white/30",
    borderColor: "group-hover:border-white/40",
    metrics: ["v14.0_ACTIVE", "APP_ROUTER_ONLINE", "RSC_STREAMING"],
  },
  {
    icon: <SpringIcon className="w-full h-full text-green-500 drop-shadow-[0_0_12px_rgba(34,197,94,0.6)]" />,
    id: "SYS-SPR",
    title: "Java Spring",
    desc: "High-performance backend ecosystem providing secure, production-ready microservices and robust API infrastructure.",
    glowColor: "group-hover:bg-green-500/15",
    themeColor: "text-green-500",
    metricColor: "text-green-400",
    scannerColor: "via-green-500/30",
    borderColor: "group-hover:border-green-500/40",
    metrics: ["v3.2_ACTIVE", "JVM_CORE_SYNC", "CLOUD_NATIVE_READY"],
  },
  {
    icon: <AWSIcon className="w-full h-full text-orange-500 drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]" />,
    id: "SYS-AWS",
    title: "AWS",
    desc: "Cloud infrastructure and serverless computing for scalable deployments and robust architecture.",
    glowColor: "group-hover:bg-orange-500/15",
    themeColor: "text-orange-500",
    metricColor: "text-orange-400",
    scannerColor: "via-orange-500/30",
    borderColor: "group-hover:border-orange-500/40",
    metrics: ["EC2_ACTIVE", "S3_STORAGE", "LAMBDA_READY"],
  },
  {
    icon: <NxIcon className="w-full h-full text-blue-400 drop-shadow-[0_0_12px_rgba(96,165,250,0.6)]" />,
    id: "SYS-NXM",
    title: "NX Monorepo",
    desc: "Smart, fast and extensible build system with first class monorepo support and scalable codebases.",
    glowColor: "group-hover:bg-blue-400/15",
    themeColor: "text-blue-400",
    metricColor: "text-blue-300",
    scannerColor: "via-blue-400/30",
    borderColor: "group-hover:border-blue-400/40",
    metrics: ["WORKSPACE_SYNC", "CACHE_HIT", "DEPS_GRAPH"],
  },
  {
    icon: <OpenAIIcon className="w-full h-full text-purple-500 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]" />,
    id: "SYS-AI",
    title: "IA Models",
    desc: "Integration of advanced artificial intelligence models for smart operations and autonomous agents.",
    glowColor: "group-hover:bg-purple-500/15",
    themeColor: "text-purple-500",
    metricColor: "text-purple-400",
    scannerColor: "via-purple-500/30",
    borderColor: "group-hover:border-purple-500/40",
    metrics: ["LLM_READY", "INFERENCE_ON", "TENSORS_SYNC"],
  },
  {
    icon: <LangChainIcon className="w-full h-full text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.6)]" />,
    id: "SYS-LGC",
    title: "LangChain",
    desc: "Framework for developing applications powered by language models with composability.",
    glowColor: "group-hover:bg-emerald-400/15",
    themeColor: "text-emerald-400",
    metricColor: "text-emerald-300",
    scannerColor: "via-emerald-400/30",
    borderColor: "group-hover:border-emerald-400/40",
    metrics: ["CHAIN_LINKED", "AGENTS_ACTIVE", "TOOLS_SYNC"],
  },
  {
    icon: <TailwindIcon className="w-full h-full text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]" />,
    id: "SYS-TWN",
    title: "Tailwind CSS",
    desc: "Utility-first CSS framework for rapid UI development, consistent styling, and modular design.",
    glowColor: "group-hover:bg-cyan-400/15",
    themeColor: "text-cyan-400",
    metricColor: "text-cyan-300",
    scannerColor: "via-cyan-400/30",
    borderColor: "group-hover:border-cyan-400/40",
    metrics: ["JIT_COMPILER", "UTILITY_SYNC", "THEME_ACTIVE"],
  },
  {
    icon: <DotNetIcon className="w-full h-full text-violet-500 drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]" />,
    id: "SYS-NET",
    title: ".NET",
    desc: "Cross-platform framework for building modern, cloud-based, and high-performance applications.",
    glowColor: "group-hover:bg-violet-500/15",
    themeColor: "text-violet-500",
    metricColor: "text-violet-400",
    scannerColor: "via-violet-500/30",
    borderColor: "group-hover:border-violet-500/40",
    metrics: ["CORE_SYNC", "CLR_ONLINE", "NUGET_READY"],
  },
  {
    icon: <RailsIcon className="w-full h-full text-red-600 drop-shadow-[0_0_12px_rgba(220,38,38,0.6)]" />,
    id: "SYS-ROR",
    title: "Ruby on Rails",
    desc: "Server-side web application framework optimized for programmer happiness and fast prototyping.",
    glowColor: "group-hover:bg-red-600/15",
    themeColor: "text-red-600",
    metricColor: "text-red-500",
    scannerColor: "via-red-600/30",
    borderColor: "group-hover:border-red-600/40",
    metrics: ["GEMS_SYNC", "MVC_PATTERN", "ACTIVERECORD"],
  },
  {
    icon: <CopilotIcon className="w-full h-full text-slate-300 drop-shadow-[0_0_12px_rgba(203,213,225,0.6)]" />,
    id: "SYS-CPL",
    title: "Copilot",
    desc: "AI-powered code assistant to accelerate software development workflows and improve code quality.",
    glowColor: "group-hover:bg-slate-300/15",
    themeColor: "text-slate-300",
    metricColor: "text-slate-400",
    scannerColor: "via-slate-300/30",
    borderColor: "group-hover:border-slate-300/40",
    metrics: ["AI_ASSIST", "CONTEXT_SYNC", "SUGGEST_ON"],
  },
  {
    icon: <GitHubIcon className="w-full h-full text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]" />,
    id: "SYS-GIT",
    title: "GitHub",
    desc: "Version control and collaborative software development platform for CI/CD pipelines.",
    glowColor: "group-hover:bg-white/15",
    themeColor: "text-white",
    metricColor: "text-gray-300",
    scannerColor: "via-white/30",
    borderColor: "group-hover:border-white/40",
    metrics: ["REPO_SYNC", "ACTIONS_ON", "PR_READY"],
  },
  {
    icon: <AzureDevOpsIcon className="w-full h-full text-blue-600 drop-shadow-[0_0_12px_rgba(37,99,235,0.6)]" />,
    id: "SYS-AZD",
    title: "Azure DevOps",
    desc: "Developer services for support teams to plan work, collaborate, and build reliable deployments.",
    glowColor: "group-hover:bg-blue-600/15",
    themeColor: "text-blue-600",
    metricColor: "text-blue-500",
    scannerColor: "via-blue-600/30",
    borderColor: "group-hover:border-blue-600/40",
    metrics: ["PIPELINE_ON", "BOARD_SYNC", "ARTIFACTS_READY"],
  }
];

export default function TechGrid() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    isDragging.current = true;
    carouselRef.current.style.scrollBehavior = 'auto';
    carouselRef.current.style.scrollSnapType = 'none';
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    if (!isDragging.current || !carouselRef.current) return;
    isDragging.current = false;
    carouselRef.current.style.scrollBehavior = 'smooth';
    carouselRef.current.style.scrollSnapType = 'x mandatory';
  };

  const handleMouseUp = () => {
    if (!isDragging.current || !carouselRef.current) return;
    isDragging.current = false;
    carouselRef.current.style.scrollBehavior = 'smooth';
    carouselRef.current.style.scrollSnapType = 'x mandatory';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section id="tech-stack" className="py-20 md:py-32 bg-surface-container-lowest relative overflow-hidden">
      <DataStreamBackground />
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-container/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <Section className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-primary-container/50 block"></span>
              <span className="font-label text-xs uppercase tracking-[0.2em] text-primary-container">Stack Tecnológico</span>
            </motion.div>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
              CORE TECHNOLOGIES
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
              The foundational stack utilized to engineer robust, scalable, and high-performance applications. Seamlessly integrating backend architecture with dynamic user interfaces.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-right hidden md:block"
          >
            <span className="block font-label text-[10px] tracking-[0.4rem] uppercase text-primary-container/40 mb-2">System Core</span>
            <span className="font-headline text-3xl md:text-4xl font-light tracking-tighter text-primary-container">OPTIMIZED</span>
          </motion.div>
        </div>

        <div className="relative w-[100vw] left-1/2 -ml-[50vw] md:w-full md:left-auto md:ml-0 py-10 group">
          <div 
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-4 md:gap-6 px-6 md:px-0 overflow-x-auto snap-x snap-mandatory pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth cursor-grab active:cursor-grabbing"
          >
            {TECH_CARDS.map((card, i) => (
              <motion.div
                key={card.id}
                whileHover={{ y: -8 }}
                className={`w-[85vw] sm:w-[320px] md:w-[340px] lg:w-[360px] shrink-0 snap-start glass-card p-6 md:p-8 relative group transition-all duration-500 overflow-hidden border border-white/5 ${card.borderColor} bg-surface-container/30 backdrop-blur-md flex flex-col select-none`}
              >
                {/* Scanner Line Effect */}
                <motion.div
                  initial={{ top: "-10%" }}
                  whileInView={{ top: "110%" }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: (i % TECH_CARDS.length) * 0.5 }}
                  className={`absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent ${card.scannerColor} to-transparent z-20 pointer-events-none opacity-0 group-hover:opacity-100`}
                />

                {/* Circuit board subtle background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>

                <div className="mb-8 flex justify-between items-start relative z-10">
                  <HexagonFrame colorClass={card.themeColor}>
                    <div className="group-hover:scale-110 transition-transform duration-500 w-full h-full flex items-center justify-center">
                      {card.icon}
                    </div>
                  </HexagonFrame>
                  
                  <div className="flex flex-col items-end gap-2">
                    <span className="font-label text-[10px] tracking-widest text-outline transition-colors duration-500 group-hover:text-primary-container/80">
                      {card.id}
                    </span>
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-container/20 animate-pulse"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-container/20 animate-pulse delay-75"></div>
                      <div className={`w-1.5 h-1.5 rounded-full bg-current ${card.themeColor} opacity-20 group-hover:opacity-100 transition-opacity`}></div>
                    </div>
                  </div>
                </div>
                
                <h4 className="font-headline text-2xl font-bold mb-3 tracking-wide uppercase relative z-10 transition-colors duration-300">
                  {card.title}
                </h4>
                
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 relative z-10 min-h-[60px]">
                  {card.desc}
                </p>
                
                <div className="flex flex-col gap-3 mb-8 relative z-10">
                  {card.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-white/5 pb-1">
                      <span className="font-mono text-[9px] text-white/30 uppercase tracking-wider flex items-center gap-2">
                        <Scan className="w-3 h-3" /> SYS_METRIC_0{idx + 1}
                      </span>
                      <span className={`font-mono text-[10px] ${card.metricColor}`}>{metric}</span>
                    </div>
                  ))}
                </div>


                
                {/* Dynamic Glow Effect */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-colors duration-500 ${card.glowColor}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </section>
  );
}
