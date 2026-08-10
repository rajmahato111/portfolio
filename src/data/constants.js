export const Bio = {
  name: "Raj Kumar Mahto",
  roles: [
    "AI Engineer",
    "LLM Systems Engineer",
    "Multi-Agent Systems Builder",
    "RAG Systems Specialist",
    "Cloud-Native AI Engineer",
  ],
  description:
    "AI Engineer with 6 years of experience engineering production LLM systems, distributed inference, and high-throughput microservices. Architected multi-agent orchestration systems cutting manual provisioning by 80%, built high-scale enterprise RAG pipelines handling 100K+ daily queries over 33M+ records, and enforced automated CI/CD evaluation gates. Deep expertise building low-latency LLM serving platforms with vLLM and Ray, production fine-tuning pipelines (LoRA, SFT, DPO), and cloud-native AI infrastructure on AWS and GCP.",
  location: "San Francisco, CA",
  phone: "+1-623-445-1844",
  email: "rajmahato111@gmail.com",
  github: "https://github.com/rajmahato111",
  resume: `${process.env.PUBLIC_URL}/Raj_Kumar_Resume.pdf`,
  linkedin: "https://www.linkedin.com/in/rajmahato111/",
  twitter: "https://x.com/rajmahato111",
  insta: "https://www.instagram.com/rajmahato111/",
  facebook: "https://www.facebook.com/rajmahato111/",
};

const icon = {
  llm: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%237c3aed'/><text x='32' y='40' text-anchor='middle' font-family='Arial,sans-serif' font-size='20' font-weight='700' fill='white'>LLM</text></svg>",
  rag: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%230ea5e9'/><text x='32' y='40' text-anchor='middle' font-family='Arial,sans-serif' font-size='18' font-weight='700' fill='white'>RAG</text></svg>",
  openai: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2310a37f'><path d='M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.045 13.81a4.5 4.5 0 0 1-1.705-5.914zm16.597 3.854l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.786a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.663zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061L14.27 3.85a4.5 4.5 0 0 1 6.677 4.877zm-12.64 4.135l2.02-1.164a.08.08 0 0 1 .075 0l5.836 3.37a.76.76 0 0 0 .387.672v-.01l-4.774 2.787a.766.766 0 0 1-.785 0l-2.02-1.168v-3.98a.72.72 0 0 0-.387-.687z'/></svg>",
  anthropic: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23d4a27f'><path d='M13.827 3.52h3.603L24 20.48h-3.603l-1.674-4.26H9.017l-1.674 4.26H3.74L10.224 3.52h3.603zm1.39 9.994L12.63 6.765l-2.587 6.749h5.174zM6.268 3.52h3.604L3.74 20.48H.137L6.268 3.52z'/></svg>",
  crewai: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%23ff6b35'/><text x='32' y='38' text-anchor='middle' font-family='Arial,sans-serif' font-size='14' font-weight='700' fill='white'>crew</text></svg>",
  vllm: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%2319c37d'/><text x='32' y='40' text-anchor='middle' font-family='Arial,sans-serif' font-size='16' font-weight='700' fill='white'>vLLM</text></svg>",
  ray: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%2300a2ff'/><text x='32' y='40' text-anchor='middle' font-family='Arial,sans-serif' font-size='18' font-weight='700' fill='white'>Ray</text></svg>",
  mcp: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%235b8def'/><text x='32' y='40' text-anchor='middle' font-family='Arial,sans-serif' font-size='16' font-weight='700' fill='white'>MCP</text></svg>",
  pinecone: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%2300b09b'/><circle cx='32' cy='20' r='6' fill='white'/><circle cx='22' cy='34' r='5' fill='white'/><circle cx='42' cy='34' r='5' fill='white'/><circle cx='32' cy='46' r='5' fill='white'/></svg>",
  chromadb: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%23ff6f61'/><circle cx='32' cy='32' r='14' fill='none' stroke='white' stroke-width='4'/><circle cx='32' cy='32' r='5' fill='white'/></svg>",
  pgvector: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%23336791'/><text x='32' y='30' text-anchor='middle' font-family='Arial,sans-serif' font-size='11' font-weight='700' fill='white'>pg</text><text x='32' y='46' text-anchor='middle' font-family='Arial,sans-serif' font-size='11' font-weight='700' fill='white'>vector</text></svg>",
  mlflow: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%230194e2'/><text x='32' y='40' text-anchor='middle' font-family='Arial,sans-serif' font-size='14' font-weight='700' fill='white'>ML</text></svg>",
  langgraph: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%231c3c3c'/><circle cx='20' cy='22' r='6' fill='%23fff'/><circle cx='44' cy='22' r='6' fill='%23fff'/><circle cx='32' cy='44' r='6' fill='%2319c37d'/><path d='M20 28v8c0 4 5 8 12 8s12-4 12-8v-8' stroke='%23fff' stroke-width='3' fill='none'/></svg>",
  langsmith: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%231c3c3c'/><text x='32' y='40' text-anchor='middle' font-family='Arial,sans-serif' font-size='12' font-weight='700' fill='%23fff'>LS</text></svg>",
  treesitter: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%234388e5'/><path d='M32 12 L44 24 L32 36 L20 24 Z' fill='white'/><path d='M32 28 L40 36 L32 52 L24 36 Z' fill='%23a7c5f5'/></svg>",
  compose: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%232496ed'/><rect x='14' y='18' width='36' height='8' rx='2' fill='white'/><rect x='14' y='30' width='36' height='8' rx='2' fill='white'/><rect x='14' y='42' width='36' height='8' rx='2' fill='white'/></svg>",
  sql: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%23f29111'/><text x='32' y='40' text-anchor='middle' font-family='Arial,sans-serif' font-size='18' font-weight='700' fill='white'>SQL</text></svg>",
  cicd: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%232082ff'/><path d='M20 32a12 12 0 0 1 20-8l2-3 1 10-10-1 3-2a8 8 0 1 0 5 7h4a12 12 0 0 1-25-3z' fill='white'/></svg>",
  superset: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%2320a6c9'/><text x='32' y='40' text-anchor='middle' font-family='Arial,sans-serif' font-size='11' font-weight='700' fill='white'>Super</text></svg>",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  go: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  graphql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  fastapi: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  express: "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48cGF0aCBkPSJNMTI2LjY3IDk4LjQ0Yy00LjU2IDEuMTYtNy4zOC4wNS05LjkxLTMuNzUtNS42OC04LjUxLTExLjk1LTE2LjYzLTE4LTI0LjktLjc4LTEuMDctMS41OS0yLjEyLTIuNi0zLjQ1Qzg5IDc2IDgxLjg1IDg1LjIgNzUuMTQgOTQuNzdjLTIuNCAzLjQyLTQuOTIgNC45MS05LjQgMy43bDI2LjkyLTM2LjEzTDY3LjYgMjkuNzFjNC4zMS0uODQgNy4yOS0uNDEgOS45MyAzLjQ1IDUuODMgOC41MiAxMi4yNiAxNi42MyAxOC42NyAyNS4yMSA2LjQ1LTguNTUgMTIuOC0xNi42NyAxOC44LTI1LjExIDIuNDEtMy40MiA1LTQuNzIgOS4zMy0zLjQ2LTMuMjggNC4zNS02LjQ5IDguNjMtOS43MiAxMi44OC00LjM2IDUuNzMtOC42NCAxMS41My0xMy4xNiAxNy4xNC0xLjYxIDItMS4zNSAzLjMuMDkgNS4xOUMxMDkuOSA3NiAxMTguMTYgODcuMSAxMjYuNjcgOTguNDR6TTEuMzMgNjEuNzRjLjcyLTMuNjEgMS4yLTcuMjkgMi4yLTEwLjgzIDYtMjEuNDMgMzAuNi0zMC4zNCA0Ny41LTE3LjA2QzYwLjkzIDQxLjY0IDYzLjM5IDUyLjYyIDYyLjkgNjVINy4xYy0uODQgMjIuMjEgMTUuMTUgMzUuNjIgMzUuNTMgMjguNzggNy4xNS0yLjQgMTEuMzYtOCAxMy40Ny0xNSAxLjA3LTMuNTEgMi44NC00LjA2IDYuMTQtMy4wNi0xLjY5IDguNzYtNS41MiAxNi4wOC0xMy41MiAyMC42Ni0xMiA2Ljg2LTI5LjEzIDQuNjQtMzguMTQtNC44OUM1LjI2IDg1Ljg5IDMgNzguOTIgMiA3MS4zOWMtLjE1LTEuMi0uNDYtMi4zOC0uNy0zLjU3cS4wMy0zLjA0LjAzLTYuMDh6bTUuODctMS40OWg1MC40M2MtLjMzLTE2LjA2LTEwLjMzLTI3LjQ3LTI0LTI3LjU3LTE1LS4xMi0yNS43OCAxMS4wMi0yNi40MyAyNy41N3oiLz48L3N2Zz4=",
  django: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  flask: "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48cGF0aCBmaWxsPSIjMDEwMTAxIiBkPSJNNDQuNDQgMTAwLjYzYy00LjIzLTMuMzMtOC43NC02LjUyLTExLjgzLTExLjAxLTYuNDktNy45Mi0xMS40OS0xNy4xLTE0LjktMjYuNzQtMi4wNy02LjI3LTIuNzctMTIuOTktNS40NC0xOS4wMi0yLjc4LTQuMzguNDgtOS4xNiA1LjI3LTEwLjU1IDIuMTMtLjQxIDUuODktMi40MyAxLjM2LS45OC00LjA2IDIuOTgtNC40NS0yLjcxLS4yOS0zLjA3IDIuODQtLjM4IDMuODktMi43IDIuOTItNC44LTMuMDUtMS45OSA3LjQtNC4xOCAyLjE0LTcuMTUtNS40OC01LjkxIDcuNjYtNy4wNSA0LjQyLS4zMy0uNzcgNS4xNiA5LjE4LS45NSA2Ljg3IDUuMDEgMi4zNSAyLjg2IDguOC42NSA4LjYzIDQuNjcgMy40Mi4yNCA0LjYgMy4xMSA3LjggMy4zMyAzLjMzIDEuNSA5LjM2IDIuNjkgMTAuNDkgNi40NC0zLjMgMi42MS0xMC45NS01LjQtMTEuMzEgMS44NCAxIDEwLjY5Ljc0IDIxLjcgNC42NSAzMS44OCAxLjg1IDYuMTYgNi4zMyAxMS4wMSAxMC4zOCAxNS44MSAzLjg4IDQuNyA5LjEyIDguMDEgMTQuNDggMTAuOCA0LjY5IDIuMjEgOS43NSAzLjY4IDE0Ljg3IDQuNiAyLjA3LTEuNTkgNS43NC03LjQ4IDguOTctNSAuMTYgMi44LTYuNDIgNS44NC0uMzEgNS41NCAzLjU5LTEuMDggNi4wOCAyLjc3IDkuMDQtLjcxIDIuNzIgMy4yMyAxMS4zMi0yLjA2IDkuMzggNC41My0yLjYyIDEuNjktNi40NC42Ny05LjA3IDMtNC4zMy0yLjE2LTcuNzcgMS45My0xMi41NiAxLjQyLTUuMzIuOTUtMTAuNzMgMS4zNC0xNi4xMyAxLjM0LTguODUtLjctMTcuODktLjk5LTI2LjMtNC4wNy00Ljc0LTEuMzgtOS4zNy00LjA4LTEzLjUzLTYuNzh6bTcuNDcgMy4yNGM0LjYzIDIgOS4xNiA0LjExIDE0LjIzIDQuNzUgOC4wNSAxLjEyIDE2LjM3IDIuODQgMjQuNDUgMS4yNy0zLjY2LTEuNjUtNy40NC42NC0xMS4wOC0xLjE4LTQuMzcuOTQtOS4wNi0uMjQtMTMuNS0uODItNS4wNS0yLjI1LTEwLjUtMy44LTE1LjIzLTYuNzItNS45MS0yLjE2IDMuMDYgMi43NyA0LjY1IDMuMTcgMy42OSAyLjEtNC4wNi0xLjA4LTUuMTYtMS45NS0zLjA5LTEuNzQtMy40OS0xLjM3LS4zMS4zOS42NC4zNyAxLjI4Ljc3IDEuOTUgMS4wOXptLTguODEtNi4yM2M0LjQ5IDEuNjYtLjAyLTMuMTYtMi4wNy0yLjg4LS45MS0xLjU4LTMuNDgtMi41OC0xLjY3LTMuNDMtMy4yNiAxLjEzLTMuNDItNC4zLTQuOTUtMy41My0zLjQ1LTEuMDktMS4zNC00Ljk1LTUuNDUtNy4zMi0uMzctMi41LTQuMDgtNC42Ni01LjI2LTguNDMtLjUyLTEuOTMtNC4xOS03LjQ2LTEuOTQtMi4zMSAxLjkyIDQuOTYgNS4yOSA5LjIxIDguMSAxMy40NSAyLjE4IDQuMDQgNC43NiA4LjI2IDguNzIgMTAuNzggMS4zNCAxLjMgMi42MyAzLjI3IDQuNTIgMy42N3pNMzAuMTcgODMuNDVjLjE2LS42OC44MiAxLjQ2IDAgMHptMTguMyAxNi4xOGMxLS40NC0xLjQzLS41NiAwIDB6bTIuNDQuODljLS4yNS0xLjIzLTEuMTEuNjkgMCAwem0zLjA1IDEuMjdjMS40NS0xLjM4LTIuMjQtLjg3IDAgMHptNS4yMiAyLjkxYy44OS0xLjMtMi44Mi0uNDkgMCAwem0tMTAuMDMtNi45OWMyLjI1LTEuNDYtMi45MS0uMDIgMCAwem0yLjI5IDEuMTRjLS4wNy0uNzctLjgyLjM0IDAgMHptMTEuNDMgNy4xM2MxLjg0IDEuMTYgMTAuNzMgMi41NCA1LjE2LjQ4LS45My4yLTEwLjMzLTIuNjYtNS4xNi0uNDh6TTQ0LjcyIDkxLjg1Yy0uMTgtLjc3LTIuODUtLjg1IDAgMHptNS4zMiAzLjFjMS4zOS0uOTYtMi44Ny0uNzQgMCAwem00LjQ4IDIuNzVjMS45OC0uNzUtMy4yMy0uNzUgMCAwem0tMTEuOTctOC4yMWMyLjE2IDEuNjUgOC43LjIxIDMuMy0uOTktMi40NS0xLjMxLTcuOTktMi4yLTQuMjIuNzlsLjkyLjJ6bTE1IDkuMTZjLjktMS41My0zLjc3LS44OCAwIDB6bS00LjU2LTMuNjNjNS4yNyAxLjQ5LTQuNDMtMy4zNC0xLjMtLjU1bC43LjMyLjYuMjN6bTkuMTQgNS4yOGM0Ljk5LjA1LTQuNTEtLjY4IDAgMHptLTIxLjUtMTMuN2MtLjE5LS45My0xLjIzLjA4IDAgMHptMjkuOTQgMTguNDRjLjE0LTEuNjgtMS42MiAxLjI1IDAgMHpNNDkuMTUgOTEuODJjLS4zLS44OC0xLjU2LS4wNCAwIDB6bS04LjA0LTUuOGMyLjg2LS4xNy0zLjkzLTEuMjYgMCAwem0tOS41NC02LjE2Yy0uMzYtMS4zOC0zLjEyLTIuNDcgMCAwek01Ni42IDk1Ljc0Yy0uNTItLjYtLjI1LjEzIDAgMHptMTUuNTggOS41NmMtLjA1LS45MS0uODUuMzUgMCAwek01NS4yMiA5NC4zMmMuMjgtMS4xOC0yLjQ0LS4zNiAwIDB6bS0xMS42LTcuMzZjMi4xMy0uMjMtMy40Mi0xLjQ0IDAgMHptMTkuNjMgMTIuMmMzLjMyLTEuMzItMy4yNC0uNjQgMCAwem0tMTAuMjEtNi45M2MzLjgzLjQ5LTQuNTYtMi42MS0uODQtLjI4bC44NC4yOHptMTMuMzEgOC4xOWMzLjU4LTIuMTQgMi40IDUuMDEgNi4wNy42IDMuNjItMi42NC0zLjEzIDMuMjcgMS4zMy40NyAzLjIzLTIuMTYgNy45OSAxLjAyIDExIDIuMDYgMi4xNi0uMTEgNC4yNyAxLjg3IDYuNDkuNjcgNC4yNy0xLjE1LTguMzYtMS43MS01LjA1LTMuNzUtMy45MSAxLjE0LTYuOC0xLjM2LTguNzItMy44Ni00LjM5LTEuMDEtOS40Ni0zLjI1LTExLjY1LTcuMTQtLjg5LTEuNDYgMS4yOS4yMS0uNzctMi4xOC0yLjY0LTIuMzUtMy45Ni01LjAyLTUuNzMtNy44OC0yLjEyLTEuMTMtMi4zNy00LjQ2LTIuNTgtLjExLjAyLTIuNzQtMi41Ni00LjU5LTMuMTktMy44Mi0uMDEtMi42NCAyLjc2LTEuMzIuODItMy4yNy0uNDItMi43NC0xLjc5LTUuNTktMi4yLTguNjgtLjY0LTEuNDktLjA5LTQuNjgtMi4xOS0xLjMxLS43NiAzLjU3LS4yNS00LjM4Ljk0LTEuNzYgMS41Ni0yLjY3LS41Ni0yLjM2LS42NS0xLjk5IDEuMDItMi4yNi42NC01LjQ2LS4yNy00LjI0LjU0LTIuMzkuODYtOC44LS44MS03LjY2IDEuMDEtMi41IDEuOTItMTEuNDQtMi40Ny04LjAzLTEuNzguMDMtNC44NS42NC02LjMxIDEuMzcgNC41NiAyLjUxLS40Ni45MS0yLjMyLjUxLS4yNCAyLjMzLTIuMDggMS4zMi00LjM4IDEuMzQgMy42Ny40NS0xLjc5IDMuNzUtMy44OSAyLjQ3LTIuNzQgMS4zMSAyLjM2IDQuNTcuMDUgNS41OC4yOCAxLjUyLTQuMTktLjU1LTMuODQgMi45Ni0yLjY1LTEuMTItLjM2IDQuMTYuOTYgMi4zOCA0LjUxIDEuMjIgMy4xOCA0LjAxIDMuMjkgNi42NS0uNzQgMS41NC0zLjYzLTMuNjItLjY0LTMuMzgtMi4zNi0zLjgzLTIuNjEtMS4zOC00LjU2LjM5LS40NS4xMyA0Ljk5IDIuNTMgMS41NyAzLjcyIDMuMDEuNDcgMy4xIDMuMSAzLjcxIDQuNzYgMS44MSAxLjg4IDEuNDQtMi4wOCAzLjYuMTgtMS4zNy0yLjAyLTcuMjUtNS42OC0yLjUyLTQuNTEtLjAzLTIuMDMtLjg2LTMuNjcuNi0zLjYzIDEuNDQtMi42LTEuNTEgNi40MiAxLjczIDMuMTEuOS0uMzkgMS4xMi0yLjYgMi43My4yMSAyLjM0IDIuMy44NSAzLjk3LTIuNDYgMS44Ni41OSAyLjAxIDQuNDIgMi43MiAzLjcgNS44Ni43NiAyLjc2IDEuODMgMS43NCAyLjc2IDEuNTguNzMgMi42OCAxLjE0LjcxIDEuMTgtLjU3IDMuMzQuNzIgMi41NiAyLjY5IDMuNiA0LjA3IDIuMyAxLjA0LTMuMjktNy4wNC42Ni0yLjQzIDQuMTYgMy43NSAxLjU2IDUuMzItMi4xNyA0LjcyIDIuMzYtLjE5IDMuMTIgMy4xOSA2LjA3IDMuMDcgMi42OSAxLjI4IDQuNTIgNi4yLS4xMiA0LjE1LTEuNjEtMS40NS03LjMxLTMuMjQtMi42NS0uNDggNC4zIDEuOTkgNy43MSAzLjE4IDExLjg2IDUuNjggMi45NiAyLjEyIDQuMjUgNC41NCA1LjM3IDUuMDItMi40OSAxLjE5LTcuNTEtLjk1LTMuNzgtMS42MS0yLjMzLS40Mi00Ljk0LTEuNi0yLjcxIDEuMyAxLjg5IDEuNTggNi43MSAxLjQyIDcuNTggMS41OS0uNzMgMS42MS0xLjk5IDEuNzQuMDMgMS44Ni0yLjI1IDEuMjIuNzIgMS40MS45MyAyLjF6bS00LjYtMTNjLTEuMzctMS40My0xLjcyLTQuMTEtLjI0LTEuNzguNzUuMyAyLjQzIDQuMzguMjQgMS43OHptMTQuOTkgOS41MmMuODUtLjA2LjAyLjY1IDAgMHpNNTkuNTkgODMuOTFjLS4wNi0yLjE3LjQ5IDEuNjcgMCAwek01OC4xIDgxLjljLTEuNzMtMy4zMiAyLjE3Ljk1IDAgMHpNNDAuMDQgNjkuNDRjMS4wMS0uMjcuNSAxLjczIDAgMHptMTQuMzcgNy43OWMuNjItMi4zMy43MyAxLjk2IDAgMHptLTEwLjE1LTcuMDZjLS43MS0xLjI5IDEuNSAxLjIxIDAgMHptOC43MSAyLjc5Yy0xLjYzLTMuNjUgMS4xNi0yIC4zNi42bC0uMzYtLjZ6TTM3Ljk1IDYyLjk1Yy0uNzMtMS4yLTEuOTMtNC43Mi0xLjU1LTUuNzkuMzUgMS43NSAzLjcyIDcuNTMgMS42NSAyLjM5LTIuMjgtNC4zIDIuNzMgMS40IDMuMjUgMi40Ny4yNCAxLjA3LTEuNDEtLjI5LS4yOSAyLjIxLTIuMDQtMi44NS0xLjIgMS41OC0zLjA2LTEuMjh6bS00LjY0LTMuMmMuMTktMi43OSAxLjA2IDEuOTEgMCAwem0yLjA4LjcyYzEtMi4xMSAxLjY5IDIuOTMgMCAwem0tNS4wMi0zLjg5Yy0xLjczLTEuNzItMi45OC0zLjMuMDgtMS4wNyAxLjE4LjA1LTIuNjItMy42LjI4LTEuMTYgMy4wNi41NiAxLjUxIDUuMDEtLjM2IDIuMjN6bTIuNjQtLjA3YzEtLjk5LjUzLjk4IDAgMHptMS42Mi41MmMtMS41Mi0yLjg1IDEuODUgMS4yIDAgMHptLTMuMjItMy4wOGMtNS4wMi00LjQ3IDYuMzEgMi4zNC44Mi44M2wtLjgyLS44M3ptMTQuMzkgOC4zNmMtMi4xOC0xLjMtLjU4LTkuMTguMTYtMy43OSAyLjExLS42OC0uMTIgMi43OCAxLjQ2IDIuNzUtLjI0IDIuMTgtLjk1IDIuOTctMS42MiAxLjA0em01LjMzIDMuMTVjLjIxLTIuMzguNDUgMS42MiAwIDB6bS0uOTMtLjkyYy4yNC0xLjAxLjAzIDEuMiAwIDB6TTMyLjM5IDUyLjQ4Yy0zLjIzLTQuNDUgOS4zOCA0LjUxIDIuMDcgMS4xMy0uNzctLjIxLTEuNjktLjI4LTIuMDctMS4xM3ptMTAuMjYgNS40M2MtLjMxLTMuNzUuNjguNjIgMCAwem03Ljc4IDVjLjYtMi4xNC4wNSAxLjQxIDAgMHpNMzIuODkgNTAuNzhjMS45Mi0uNDEgNy45NSAzLjM3IDIuNDEgMS4wOC0uNjItLjY5LTEuOTMtLjM4LTIuNDEtMS4wOHptMTYuNDcgOC4yMWMuMi0zLjg0IDEuMTUtMi4yOS4wMS41NWwtLjAxLS41NXptLTE1LjA1LTkuNTVjLjc4LTEuMTUtMi4wOC01LjE4LjQxLTEuNDUgMS4wOC44NSAzLjExIDEuNDMgMS4zMSAxLjc5IDIuODQgMi41LS42OC42OC0xLjcyLS4zNHptMTQuMjQgOC4zNWMuNTQtNC4zNy40NyAyLjU2IDAgMHpNMzIuNjggNDUuNDFjLjYtLjI2LjMyLjc5IDAgMHptMy43MSAyLjIxYy45Ni0yLjAxIDEuNzcgMi4yMyAwIDB6bTEwLjQ3IDUuODJjMC0uNzcuMiAxLjEyIDAgMHptLS42LTEuMzRjLTEuNDUtMy41OSAxLjM1IDEuOSAwIDB6bS0uODktMi4zNWMtLjI1LTEuNDguODMgMS44NiAwIDB6bTEuNDUtMi4zNmMtMS0xLjc2IDEuMjYtNy43NSAxLjUxLTQuMDMtMS4wNSAyLjg5LS4zIDQuNTEuNDMuNjMgMS4zNi0zLjA2LS4yOSA2LjAyLTEuOTQgMy40em0xLjQ5LTguOTFjLjQ0LS41My4xLjY1IDAgMHpNNDUuODIgODcuNmMtLjU5LS41Mi4wNy4zMyAwIDB6bTUuMTMgMi42YzIuODYuNzQgMi44NC0uNDQuMjYtLjc5LTEuMzktMS4yOS01Ljc3LTIuNjYtMS44NS0uMTYuMjcuNjUgMS4wOS42MyAxLjU5Ljk1em0tMTAuMTQtNi43NGMxLjU3IDEuMTggNS45MyAzLjMyIDIuMjQuNDUgMS4yNC0xLjQ0LTIuMzgtMi4yMS0xLjE4LTMuMTgtMy4wNi0xLjg3LTIuNDEtMS43LS4yNy0xLjY0LTMuNjctMS42NC41My0xLjUyLjMzLTIuMzYtMS40Mi0uMjgtNy4wMy0yLjUtMy43My4xOC0zLjM2LTEuNzEtLjguNjQtMS44Mi4zOS0zLjQ0LS45NCAzLjA2IDIuNjItLjU0IDEuNzMgMS45NyAxLjU2IDUuMyA0IC44MyAxLjY1LS41Ny44NSAzLjIxIDIuMTQgNC4xNCAyLjc4em01LjM3IDMuMDljNi41MyAyLjEtMy4yLTIuNTggMCAwem0yNy41IDE2LjY1Yy4wOC0xLjMtLjkgMS4xMSAwIDB6bTIuODIgMS4xOWMxLjUxLTEuNDYuMDYgMi4zMyAyLjUtLjM2LjAzLTEuOTItLjA3LTMuMDYtMi44LS43Mi0uNzUuNDItMS4wOSAyLjE5LjMgMS4wOHpNMzEuNjUgNzYuMjJjLS40Ny0xLjgyLTMuMjUtMS44MSAwIDB6bTMuMDEgMS45OGMtMS4xMi0xLjg2LTQtMS42OCAwIDB6bTE3LjE3IDEwLjM1YzEuNjggMS40OSA3LjcgMS4wOSAyLjAzLjE4LS44My0xLjI0LTUuMzItLjk0LTIuMDMtLjE4em0yMy42IDE0LjU3YzIuNTctMi4xNi0yLjUuOTcgMCAwem01LjM2IDMuNjljLjAyLS42OS0xLjExLjMgMCAwem0uMDEtLjk3YzIuODYtMy4wMy0yLjc3LjE4IDAgMHpNMjQuMjIgNzAuMDFjLTIuNDMtMy40Ny0xLjUxLTUuMDMtMy44Ni03Ljg3LS40NS0yLjE3LTQuMDMtNy4wOS0xLjg1LTEuODggMS45OSAzLjA1IDIuNTggNy43NyA1LjcxIDkuNzV6bTU1LjY4IDM0Ljg3YzUuMjYtMy40LTIuMTUtMS40OCAwIDB6bTQuMDEgMS41N2MyLjY0LTIuMjYtMS42Ni0uNDcgMCAwek0zMC43NSA3Mi4zOGMuNzYtMS4xMi0xLjk0LS4xNCAwIDB6bTUyLjMzIDMyLjk5YzIuNTUtMS42NC0uNTktMS4zOS0uNDYuMTVsLjQ2LS4xNXpNNDguNSA4My41OGMtLjA5LTEuMTEtMS4zNS4wOSAwIDB6bTIuMTQgMS4yM2MtLjY5LTEuMzgtMS4wNS4yMSAwIDB6bTM2LjUzIDIxLjY3YzMuMjctMi4zNi0xLjk4LS40NS0uNjguNDVsLjY4LS40NXptLTEuMjYtLjZjMi42Ny0yLjIzLTIuOC45OSAwIDB6bTYuMzkgNC4yNWMxLjc5LTEuMTktMi4xNy0uMzggMCAwek0zMi4zOSA3MS41N2MyLjM5LjU0IDkuNTYgNS44OSA1LjMzLjM3LTIuMTctLjY0LS44Ny01Ljk0LTMuMDgtNSAxLjQ4IDIuNDggMS4yMiAzLjUzLTEuOSAxLjk3LTMuOTEtMS45MS0yLjIuOTQtMS40MyAxLjczLTEuMDQuMjUgMS4zOS45MSAxLjA4Ljkzem0tMTAuOS04LjYxYy40My0xLjc3LTMuOTUtOS43NS0yLjA3LTQgLjY4IDEuMjEuNjEgMy40OSAyLjA3IDR6TTQxLjUgNzUuM2MtMS4yMy0xLjAzLS4wNi0uMTUgMCAwem0zLjAzLjcxYzAtMS44OC0zLjM1LS43NyAwIDB6bTI2LjMgMTYuNTdjLS41LTEuMjgtMS45OC0uMDIgMCAwem0xLjI2LjkzYy0uMTgtLjcyLS43Mi4xNCAwIDB6bTEwLjQzIDYuNTZjMS0uNzQtMS4yNS0uMDkgMCAwek0yNi45MyA2NC4zNWMyLjg3LTEuMTEtMy4wNy0uNzkgMCAwem00MS41OSAyNi4yYy0uMDQtMS44Ni0xLjgzLjQ2IDAgMHpNMjUuOCA2MS43MWMxLjg0LS42Mi0xLjcxLS40MSAwIDB6bTUuMzQgMi41OWMtLjAzLS42MS0uNTYuMjMgMCAwem02NS4yMiAzOS45OWMyLjM3LS40OCA3Ljc3IDEuMjEgOC42NC0uNjMtMi44OC0uMDctOS45NS0yLjAzLTEwLjI4LjQ2bC42My4xIDEuMDEuMDd6TTMyLjg0IDY0LjczYy4wNS0xLjg4LTEuNDYtLjA3IDAgMHptLTE0LjA1LTkuNzVjLS42NC0zLjU4LTIuNDMtLjU0IDAgMHptMy4zNS44NGMuMDQtMS4xNS0zLjA3LTEuMDMgMCAwem0xLjkxLjk0Yy0uNTUtLjQ0LS40My41NyAwIDB6bTEyLjA2IDcuNzNjLjU3LS41Mi0xLjM1LS4zOCAwIDB6bS0xMy4zMy05Ljg1Yy0uMzMtMi43MS0zLjg4LS40IDAgMHptLTYuODctNC40NmMtLjEtMS4yNS0uNjcuNDcgMCAwem0xLjAyLS43N2MtLjE3LTEuNDgtLjg4LjE5IDAgMHptNS42NSAzLjM3YzIuMzktLjk0LTQuMzUtMS45NC0uNDktLjE4bC40OS4xOHptNzUuNTkgNDYuNjljMS41My0xLjQtMS45NC0uNDMgMCAwem05LjEzIDQuNzRjLjYxLTEuODEtMS41NC4yMyAwIDB6TTIzLjE1IDQ5LjgyYy4yNi0xLjc1LTEuODkuMzUgMCAwem0tOC4wMy01LjM4Yy0uNDMtMi40Ny0uMzctNi44MiAzLjc2LTUuMzUtNS41MSAxLjEgMy44MiA2Ljg1IDIuNjQgMi4zMSAyLjMyLjExIDQuNTMtMS4zNyAzLjMyLjg4IDQuNTctLjUgNy43My00LjQ2IDEyLjE0LTMuOTEgMy40NC0uNDYgNy4xOS0uOCAxMC44OS0yLjE4IDMuMDQtLjIyIDUuOTctMy41IDQuMzEtNS40NC00LjE1LS4zNS04LjUuMTctMTMuMDggMS4wOC01LjA4IDEuMDYtOS43IDMuMDYtMTQuODMgMy45My01IC42NyAxIDEuODUtLjQzIDIuMTEtMi42MS45IDMuMTEgMS41Mi0uMzQgMi40Ny0yLjEzLS40MS00LjM1LTEuMTQtMy40NC0zLjM4LTQuNzkuNjItOSAyLjYxLTUuMjEgNy40OGguMjd6bTExLjU0LTUuODhjMS4xMi00LjE0IDYuMDEgMy40IDEuODQuNTUtLjUtLjM4LTEuMzItLjY4LTEuODQtLjU1em0uMjItMi4wMWMxLjYyLTEuMi44Ni42OCAwIDB6bTIuMDYuMDRjLjE1LTEuOSA0LjcxIDEuMDEuNzUuNjhsLS43NS0uNjh6bTIuODEtMS4xNGMxLjAzLTEuMi4zIDEuMDcgMCAwem0uNzItLjQ4YzEuNzEtMi4wNiA5LjY5LTEuMzEgMy44NS0uMi0xLjU2LTEuMTgtMi43Ni43LTMuODUuMnptMTAuNDItMS42Yy0uMjYtNS42MiA1LjE4IDEuOTkgMCAwem0yLjk2LS4wMmMxLjA4LTIuODMgNC4yLTEuMTQuNS0uNTcuMDguMy0uMTEgMS40Ni0uNS41N3pNMjEuOTkgNDguMzdjMy4yMy0xLjk4LTMuNDMtMS43MiAwIDB6bTIuMzkuNjZjMS4xMy0xLjItMi40Ni0uNDkgMCAwem0tNy4wNC00Ljk5YzEuODUtMS40Mi0yLjE4LS41NCAwIDB6bTk1LjM1IDU5LjY1Yy4wNS0xLjY1LTEuNDEuNzQgMCAwek0xMDMgOTcuMDhjLjI4LTEuOS0xLjI0LjE2IDAgMHptMTIuMzYgNy4yNWMyLjU4LjAxIDcuODItLjggMi4yLS44LS44OC4xMy01LjEzLjExLTIuMi44ek0yNi40OCA0Ny44N2MyLjA5LS4xNCAzLjI3LTIuMy0uNDEtMi4xOC01LjY5LS41OSA1LjAyIDEuOTUtLjczIDEuMjItLjc3LjUxIDEuMDkgMS4xIDEuMTQuOTZ6bTEuODQuOTNjLS4yMi0xLjM0LS42NS43MSAwIDB6bTIuMTgtNS44MmMuOS0xLjEyLTEuMjYtLjMgMCAwem0tNi45NS0xMS42YzMuNzMtMS4yNyA4LjgyLTIuNjkgMTAuNTguNjItMS43OS0yLjE1LS43Mi00LjI4Ljk3LTEuMTIgMi4zOSAzLjE5IDMuNTktMS40NSAyLjAzLTIuNTIgMS43NyAyLjIgMy43OSAzLjI0IDEuMTkuMTQgMi44My0zLjQtNS42Ni40NS03LjU5LjQxLS45Mi40MS05LjU4IDIuMi03LjE4IDIuNDd6bTIuMTktNC4xOGMyLjEzLTEuNiA3LjM1Ljk2IDQtMS41OS0uMzMtLjMtNy4zNSAxLjkzLTQgMS41OXptNy43NS4zMmMyLjQ5LjA2LTEuMDctMy4zNCAxLjg5LTEuOC0uNDktMS41OS0zLjQ1LTEuODktNC45LTIuNTItLjgyIDEuNDUgMS42NiA0LjM0IDMuMDEgNC4zMnptLTYuMzktNy4wNGMuODYtMS4xNi0xLjUxLjYgMCAwem0zLjE2Ljc2YzQuMDEtLjUzLTEuMDItMS43Mi0uODEtLjA0bC44MS4wNHptLTUuOTEtNC42MmMtMi44Mi0zLjY5IDUuMzEuNjIgMi40NC0zLjI0LTIuNDEtMS45Mi00LjczIDIuMTYtMi40NCAzLjI0em0zNi4yMSAxOS41YzEuMjktMi4yOS01LjM0LTMuMDktLjg3LS44MS40Mi4xNC4zMi45Ny44Ny44MXoiLz48L3N2Zz4=",
  spring: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  prisma: "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48cGF0aCBmaWxsPSIjMmQzNzQ4IiBkPSJNNjYuNDU3LjAxNGE2LjMwOCA2LjMwOCAwIDAgMC01LjgxMiAzLjAyOGwtNDcuODcgNzguMDcyYTYuMzc5IDYuMzc5IDAgMCAwIC4wNDggNi43NDhsMjMuNTY4IDM3LjE4NmE2LjM4NyA2LjM4NyAwIDAgMCA3LjIyIDIuNjgzbDY4LjAxMi0yMC40MDdhNi4zNyA2LjM3IDAgMCAwIDMuOTYtOC43NjVsLTQzLjcyLTk0Ljg1QTYuMjk4IDYuMjk4IDAgMCAwIDY2LjQ2LjAxNFptMS43OTUgMjMuOTVhMi4zNDggMi4zNDggMCAwIDEgMi40NDggMS40MzNsMzAuMTYgNjkuNzg0YTIuMzkgMi4zOSAwIDAgMS0xLjUxMiAzLjI0MWwtNDYuOTk2IDE0LjAyNGEyLjM5IDIuMzkgMCAwIDEtMy4wMjQtMi43NmwxNi44My04My44MTJhMi4zNTMgMi4zNTMgMCAwIDEgMi4wOTktMS45MXoiLz48L3N2Zz4K",
  pydantic: "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRTkyMDYzIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+UHlkYW50aWM8L3RpdGxlPjxwYXRoIGQ9Im0yMy44MjYgMTcuMzE2LTQuMjMtNS44NjYtNi44NDctOS40OTZjLS4zNDgtLjQ4LTEuMTUxLS40OC0xLjQ5NyAwbC02Ljg0NSA5LjQ5NC00LjIzMyA1Ljg2OGEuOTI1LjkyNSAwIDAgMCAuNDYgMS40MTdsMTEuMDc4IDMuNjI2aC4wMDJhLjkyLjkyIDAgMCAwIC41NzIgMGguMDAybDExLjA3Ny0zLjYyNmMuMjgtLjA5Mi41LS4zMS41OS0uNTkyYS45MTYuOTE2IDAgMCAwLS4xMy0uODI1aC4wMDJaTTEyLjAwMSA0LjA3bDQuNDQgNi4xNTgtNC4xNTItMS4zNmMtLjAzMi0uMDEtLjA2Ni0uMDA4LS4wOTgtLjAxNmEuOC44IDAgMCAwLS4wOTYtLjAxNmMtLjAzMi0uMDA0LS4wNjItLjAxNi0uMDk0LS4wMTZzLS4wNjIuMDEyLS4wOTQuMDE2YS43NC43NCAwIDAgMC0uMDk2LjAxNmMtLjAzMi4wMDYtLjA2Ni4wMDYtLjA5Ni4wMTZMNy41OSAxMC4yMjFsLS4wMjYuMDA4IDQuNDQtNi4xNThoLS4wMDJabS02LjI3MyA4LjcgNC44MzQtMS41ODMuNTE2LS4xNjh2OS4xOUwyLjQxIDE3LjM3MmwzLjMxNy00LjZabTcuMTk3IDcuNDM3VjExLjAybDUuMzUgMS43NTIgMy4zMTYgNC41OTgtOC42NjYgMi44MzhaIi8+PC9zdmc+",
  pytorch: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
  sklearn: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
  huggingface: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
  langchain: "https://images.seeklogo.com/logo-png/52/1/langchain-logo-png_seeklogo-528369.png",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  gcp: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  azure: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
  terraform: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
  githubactions: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
  linux: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  kafka: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg",
  argo: "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRUY3QjREIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+QXJnbzwvdGl0bGU+PHBhdGggZD0iTTEyLjU4MSAwYy40MzYuMDM3Ljg3MS4xIDEuMjk5LjE4NiAxLjY3OS4zODMgMy4xMjEgMS4yMTMgNC4zODIgMi4zNjUgMS4xNjEgMS4wNiAxLjkxNyAyLjM3MiAyLjMzNSAzLjg4MS4wODkuMzIxLjIxNi41Ni41ODYuNjI0LjIwNS4wMzUuMjM4LjI0NS4yMzkuNDMuMDAzLjY0Ni4wMDIgMS4yOTQuMDAyIDEuOTRsLS4wMDIgMS4yMWMtLjAwMS4zNTYtLjExNi40NzktLjQ2Ni40NzQtLjIxMS0uMDAzLS4yOTMuMTE5LS4zNDQuMjkxLS4xNDYuNDg5LS4zMy45NjYtLjU1MiAxLjQyNi0uODE4IDEuNjgyLTIuMDg0IDIuOTM4LTMuNjg4IDMuODctLjA3Ny4wNDUtLjE1NS4wODgtLjIzMy4xMzEtLjI1Mi4xMzctLjI1OC4xNDYtLjE1NS40MTUuMTE0LjI5OS4zNTguNTI5LjY2NC42MjUuMjY5LjA5Ni41NTMuMTM0LjgyNy4yMWEuNjcyLjY3MiAwIDAgMSAuMjM2LjA5NGMtLjA2Ni4wODItLjE1Ni4wNjctLjIzMS4wODItLjM2LjA3My0uNzEzLjE4NC0xLjA4Ni4xN2ExLjI3NSAxLjI3NSAwIDAgMS0uNDM4LS4wNjRjLS4xMTQtLjA0NS0uMTUyLS4wMDYtLjE3Ni4xMDlhNS4zNTQgNS4zNTQgMCAwIDAtLjA4NC45MmMtLjAxNS42MTctLjA3MSAxLjIzLS4xMTIgMS44NDQtLjA0Mi41OTgtLjAxOC42NTEuNTU4Ljg0Mi4yODEuMDk0LjU2My4xODcuODQyLjI4Ni4wNjkuMDI0LjE1LjAzOC4xOTIuMTE3LS4wNC4wNTctLjA5OC4wMzUtLjE0Ni4wMzUtLjQ5My4wMDMtLjk4NS4wMDUtMS40NzguMDAxLS41MjQtLjAwNS0uODA2LS4yODItLjg0NS0uODAzLS4wNTUtLjc2Mi0uMTItMS41MjQtLjE4Mi0yLjI4NmEuOTQ3Ljk0NyAwIDAgMC0uMDI2LS4xMmMtLjA3OS40NTUtLjA2NS44NzktLjA4NCAxLjI5OC0uMDIzLjUyOC0uMDA4IDEuMDU3LS4wMDcgMS41ODQgMCAuMjcuMDg2LjM4OC4zMzUuNDgzLjM1OS4xMzUuNzExLjI5NSAxLjExNC4yNjIuMTQxLS4wMTIuMjc2LjA2Mi40MDIuMTI5LjAzMi4wMTcuMDczLjAzMy4wNjkuMDczLS4wMDQuMDQzLS4wNDkuMDQ3LS4wODQuMDQ1LS42NTctLjAxOS0xLjMxNy4wNjUtMS45NzItLjAyOC0uMzIzLS4wNDYtLjUzMy0uMjM2LS42MzEtLjU1Mi0uMDk0LS4zMDMtLjExNC0uNjE3LS4xMzctLjkzLS4wNDYtLjYyNi0uMDc4LTEuMjUzLS4xMTYtMS44OGEuMjIyLjIyMiAwIDAgMC0uMDYxLS4xNzEuMjgyLjI4MiAwIDAgMC0uMDMxLjE5M2MtLjAwMi45NTYtLjAwMiAxLjkxMS0uMDAxIDIuODY2IDAgLjM4OC4xMjMuNTc1LjQ5NC43MDguNDgxLjE3Mi45NzYuMjk4IDEuNDcuNDIzLjExLjAyOC4yMjUuMDQ3LjI0Mi4xOTJoLTEuODUyYy0uMDUxLS4wMS0uMTAzLS4wMjItLjE1NS0uMDMtLjcwMS0uMS0xLjAwMS0uMzcyLTEuMTQzLTEuMDQybC0uMDY3LS4zMzEtLjIyNi0xLjEwM2MtLjA2OS4xMi0uMTE4LjI1LS4xNDQuMzg2LS4wODMuMzk5LS4xNTEuODAyLS4yNDMgMS4yLS4xMTMuNDkzLS40NDQuNzYzLS45MzIuODU3bC0uMzMuMDYzSDguNTU4Yy4wNTctLjE3MS4yMTYtLjE4NS4zNTUtLjIyMS40NzYtLjEyNy45Ni0uMjIzIDEuNDE3LS40MDlhLjYwMy42MDMgMCAwIDAgLjM5Ny0uNTIxYy4wNTgtLjQzNS4wMDItLjg2NS0uMDEzLTEuMjk2YTEuNTI4IDEuNTI4IDAgMCAwLS4wNzgtLjMxNS40MDUuNDA1IDAgMCAwLS4wNzEuMjA3Yy0uMDI2LjI5Ni0uMDQ5LjU5MS0uMDc1Ljg4Ni0uMDM4LjQzMi0uMjczLjcxNi0uNjc5LjgxYTEuNzAyIDEuNzAyIDAgMCAxLS4zNy4wNDVjLS41NTcuMDAzLTEuMTE1LS4wMDEtMS42NzMtLjAwNS0uMDQ4IDAtLjEwOS4wMTktLjE0OC0uMDY1LjE3OC0uMTAzLjM3Ny0uMTY4LjU4Mi0uMTg3YTUuNjcgNS42NyAwIDAgMCAuOTM5LS4xOTNjLjQyLS4xMTQuNTIyLS4yNDkuNTEyLS42ODctLjAyMy0uOTMxLS4wOTEtMS44Ni0uMDY5LTIuNzkxLjAwNC0uMTg0LjAwMS0uMzY4LjAwMS0uNTUxYTIuMzg3IDIuMzg3IDAgMCAwLS4wNS4zODUgNDAuMjk5IDQwLjI5OSAwIDAgMS0uMTg2IDIuNjIzYy0uMDUyLjUxMy0uMjk2Ljc0OC0uODA0LjgwNS0uNDQ2LjA1MS0uODg5LjAwMi0xLjMzMi0uMDItLjEwOC0uMDA2LS4yMzQuMDEyLS4zMzktLjA2NC4wNDMtLjA2Ni4xMDYtLjA3LjE2LS4wODcuMzYyLS4xMTUuNzI1LS4yMjQgMS4wODYtLjM0NC4yNDYtLjA4MS4zNS0uMjM1LjM1NS0uNDkyYTIuMjQxIDIuMjQxIDAgMCAwLS4wMDMtLjIzMiA0NS4zMTUgNDUuMzE1IDAgMCAxLS4xMDUtMi4xNDkgNS40ODcgNS40ODcgMCAwIDAtLjAzNS0uNDc4Yy0uMDI0LS4xODgtLjEzMS0uMjg3LS4yOTUtLjI1OC0uNTA1LjA5Mi0uOTktLjAwNi0xLjQ3My0uMTM5LS4wNTktLjAxNi0uMTM0LS4wMDctLjE3OC0uMDg4YS45ODYuOTg2IDAgMCAxIC4yODUtLjA5Yy4yNTUtLjA1Mi41MDctLjEyMS43NTMtLjIwOC4zMTItLjExMi41NjQtLjM0Ny42OTUtLjY1MS4wODktLjIwMy4wNTYtLjMxNy0uMTEyLS4zOTgtMS40MTgtLjY4My0yLjUxMi0xLjczLTMuMzkxLTMuMDE3YTguMTUyIDguMTUyIDAgMCAxLTEuMTIzLTIuNDQ3Yy0uMDY3LS4yNDYtLjE1Ni0uMy0uMzgzLS4yNi0uMzA2LjA1My0uNDAxLjAwNi0uNTM1LS4yNzN2LTMuNDljLjE0NC0uMzAzLjIwNS0uMzQxLjUzNC0uMzI5LjIzNS4wMS4yNDctLjAwNC4zMDktLjI0Mi4zOTYtMS41MDggMS4wODItMi44NjEgMi4xNzEtMy45ODhDNi45IDEuNDIgOC41MjMuNjMxIDEwLjM0LjIwM2MuNDU2LS4xMDguOTIyLS4xNSAxLjM4Ny0uMjAzaC44NTRabTcuOTc0IDguOTQ4YTcuMzQgNy4zNCAwIDAgMC0uMDQ4LS45MzggOC4zNTMgOC4zNTMgMCAwIDAtLjA5OS0uNjVjLS41OTgtMi45NjQtMi4zNDQtNS4wMi01LjA1MS02LjI2OC0xLjU1My0uNzE1LTMuMjEtLjgzNS00Ljg3OC0uNTExLTMuMjQ4LjYzMy01LjM5NiAyLjU4My02LjUzOSA1LjY1Mi0uNDM2IDEuMTczLS40OTUgMi40MDYtLjM3IDMuNjUuMDg3LjkzNS4zMzkgMS44NDYuNzQ1IDIuNjk0LjU4NSAxLjIxMyAxLjQ0NCAyLjIwNyAyLjQ3NyAzLjA1OC4zNDMuMjg2LjcxOS41MjggMS4xMjEuNzE5LjIzNS4xMTEuMjQ3LjEwNS4yNDUtLjE0Ni4wMDYtLjE2LjAwMy0uMzItLjAwOS0uNDgtLjEyNS0xLjAyLS4xNDItMi4wNDUtLjE2OS0zLjA2OWEuMzkyLjM5MiAwIDAgMC0uMTg0LS4zNTNjLS4zODUtLjI2OC0uNzEzLS41OTItLjkyMS0xLjAxOS0uNDc0LS45Ny0uMzcyLTIuMzYxLjgxMy0zLjIxNS4xMzYtLjA5Ny4yMTctLjE5LjE5OC0uMzczYTEuNzI0IDEuNzI0IDAgMCAxIC4wMzEtLjQ0MmMuMTc3LTEuMTg3Ljc0OC0yLjEzOCAxLjcyMi0yLjg0LjY4LS40OTIgMS40NDItLjc3MiAyLjI4Ni0uNzgyLjQ4My0uMDA3Ljk1My4xMSAxLjQxNC4yNDQgMS42MDkuNDY3IDIuODQ2IDIuMDcgMi44NDUgMy42OTdhLjY0LjY0IDAgMCAwIC4yNjguNTY1Yy40NjMuMzcxLjgyMS44My45NDMgMS40MjYuMjIgMS4wNzctLjA4MyAxLjk4Mi0uOTc5IDIuNjM0LS4yNjYuMTk0LS4zNDcuNDA2LS4zMzMuNjk4LjAwMi4wNDcgMCAuMDk1LS4wMDIuMTQybC0uMDYyIDEuNDM5Yy0uMDI1LjU4Ni0uMTM4IDEuMTY1LS4xMTcgMS43NTQuMDA4LjIyMy4wMDYuMjI2LjIwMS4xMjhhNy40NiA3LjQ2IDAgMCAwIDIuMzkzLTEuOTAzYzEuMzItMS41NzcgMi4wNzQtMy4zNzIgMi4wNTktNS41MTFaTTkuMTE3IDEyLjEwMmMxLjQ4OS4wMjEgMi40NDMtMS41NzggMS43MTYtMi44NzlhMS45MzcgMS45MzcgMCAwIDAtMS42OTktLjk5MWMtMS4wOTQtLjAwNC0xLjk1NC44MjItMS45NTggMS44ODEtLjAwNSAxLjE0OC44MTMgMS45ODUgMS45NDEgMS45ODlabTUuNzk0IDBjMS4xMDEuMDAyIDEuOTM1LS44MjMgMS45MzUtMS45MTcgMC0xLjA5MS0uODQ2LTEuOTQ5LTEuOTItMS45NDctMS4wNjQuMDAzLTEuOTQuODY2LTEuOTQzIDEuOTE1LS4wMDMgMS4xMDUuODMxIDEuOTQ4IDEuOTI4IDEuOTQ5Wm0tMS40NzIgMS45MzdjLS4yMDguMTI4LS40MDcuMjc3LS42My4zODQtLjUzNi4yNTctMS4wNjMuMjU3LTEuNTc5LS4wNDgtLjE1OC0uMDk0LS4zMDgtLjIwMS0uNDY0LS4yOTgtLjA0Ny0uMDI4LS4wOTItLjEwMy0uMTUtLjA2Mi0uMDQ0LjAzLS4wMS4xLS4wMDEuMTUxLjAzNy4xNzkuMDY0LjM2Mi4wODIuNTQ0LjAyNy41NjUuMjkzLjk5Mi43NDIgMS4zMWEuOTg0Ljk4NCAwIDAgMCAuNzkxLjE4NmMuNTY1LS4xMTkgMS4wMjUtLjYxNCAxLjEyNC0xLjIxOC4wNDMtLjI2Ni4wMDUtLjU0NC4xMDktLjgwM2EuMTMzLjEzMyAwIDAgMC0uMDI0LS4xNDZabS04Ljc4LTQuOTJjLS4wMTItMS4xMDIuMTQzLTIuMDU1LjU0LTIuOTYxLjYzMy0xLjQ0MyAxLjY0Mi0yLjU1MyAyLjk4LTMuMzc0YS4zNzguMzc4IDAgMCAxIC40NTkuMDY3Yy4wNi4wNi4wMzYuMTE4LjAxLjE3OGExLjA5IDEuMDkgMCAwIDEtLjQ4LjUxYy0xLjA3OS42MzktMS44MjkgMS41NzEtMi4zNTcgMi42ODhhNi4zMjUgNi4zMjUgMCAwIDAtLjYxOCAyLjk4NmMuMDU1IDEuMzA5LjQzOSAyLjUxNiAxLjIxMyAzLjU4OC4wODguMTA0LjE0OC4yMy4xNzMuMzY1LjAxLjA4LjA1OS4xNjgtLjAzMS4yMjhhLjMxMi4zMTIgMCAwIDEtLjI4OC4wNDEuNTAyLjUwMiAwIDAgMS0uMjM0LS4xODVjLS43Mi0uOTc5LTEuMTkzLTIuMDU2LTEuMzMxLTMuMjczLS4wMzYtLjMyNi0uMDA0LS42NTMtLjAzNi0uODU4Wk04Ljk0IDIuMzRhLjM3My4zNzMgMCAwIDEgLjM3OC0uMzgyYy4yMTEuMDAxLjQwOS4yMjYuNDE2LjQ3My4wMDQuMTM4LS4zMDkuMzktLjQ3Ni4zODYtLjE4OS0uMDA1LS4zMTgtLjItLjMxOC0uNDc3Wm0tLjQ2NSA3LjQ4YS42MDkuNjA5IDAgMCAxIC41ODYtLjYzMWMuMzgtLjAwMy42NzEuMjcxLjY3NS42MzMuMDA0LjM1Ni0uMjcuNjIyLS42MzkuNjIxLS4zOC0uMDAyLS42MjEtLjI0MS0uNjIyLS42MjNabTYuNDk2LjYyM2MtLjM4MS0uMDAyLS42MjUtLjI1NS0uNjIxLS42NDZhLjYzNS42MzUgMCAwIDEgLjU5Ni0uNjEzLjY1Ni42NTYgMCAwIDEgLjY2OS42NDNjLjAwMS4zNTQtLjI3NS42MTgtLjY0NC42MTZaIi8+PC9zdmc+",
  ansible: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
  otel: "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+T3BlblRlbGVtZXRyeTwvdGl0bGU+PHBhdGggZD0iTTEyLjY5NzQgMTMuMTE3M2MtMS4wMjI0IDEuMDIyNC0xLjAyMjQgMi42OCAwIDMuNzAyNCAxLjAyMjQgMS4wMjI0IDIuNjggMS4wMjI0IDMuNzAyNCAwIDEuMDIyNC0xLjAyMjMgMS4wMjI0LTIuNjggMC0zLjcwMjQtMS4wMjIzLTEuMDIyMy0yLjY4LTEuMDIyMy0zLjcwMjQgMHptMi43Njc3IDIuNzcwMWMtLjUwNjMuNTA2My0xLjMyNjcuNTA2My0xLjgzMyAwcy0uNTA2My0xLjMyNjYgMC0xLjgzM2MuNTA2My0uNTA2MiAxLjMyNjctLjUwNjIgMS44MzMgMCAuNTA2My41MDQuNTA2MyAxLjMyNjcgMCAxLjgzM3pNMTYuMzU2LjIzNTVsLTEuNjA0MSAxLjYwNDJjLS4zMTQuMzE0LS4zMTQuODMgMCAxLjE0NEwyMS4wMTUgOS4yNDdjLjMxNC4zMTQuODMuMzE0IDEuMTQ0IDBsMS42MDQyLTEuNjA0MWMuMzE0LS4zMTQuMzE0LS44MyAwLTEuMTQ0TDE3LjQ5NzYuMjM1NGMtLjMxNC0uMzE0LS44Mjc2LS4zMTQtMS4xNDE2IDB6TTUuMTE3MyAyMC43MzRjLjI4NDgtLjI4NDguMjg0OC0uNzQ5NyAwLTEuMDM0NWwtLjgxNTUtLjgxNTVjLS4yODQ4LS4yODQ4LS43NDk3LS4yODQ4LTEuMDM0NSAwbC0xLjY4NDUgMS42ODQ1LS4wMDI0LjAwMjQtLjQ2MjUtLjQ2MjVjLS4yNTU2LS4yNTU2LS42NzE4LS4yNTU2LS45MjUgMC0uMjU1Ni4yNTU2LS4yNTU2LjY3MTggMCAuOTI1bDIuNzc1IDIuNzc1Yy4yNTU2LjI1NTYuNjcxOC4yNTU2LjkyNSAwIC4yNTMyLS4yNTU2LjI1NTYtLjY3MTggMC0uOTI1bC0uNDYyNS0uNDYyNS4wMDI0LS4wMDI0em04LjQ4NTYtMTUuODkzLTMuNTYzNyAzLjU2MzdjLS4zMTY0LjMxNjQtLjMxNjQuODM3NCAwIDEuMTUzOGwyLjIwMDYgMi4yMDA1YzEuNTU1NC0xLjExOTcgMy43MzY1LS45ODEgNS4xMzYxLjQxODdsMS43ODE5LTEuNzgxOGMuMzE2NC0uMzE2NS4zMTY0LS44Mzc0IDAtMS4xNTM4bC00LjQwMS00LjQwMWMtLjMxNjUtLjMxOS0uODM3NC0uMzE5LTEuMTUzOSAwem0tMi4yODgxIDcuODQ1NS0xLjI5OTktMS4yOTk5Yy0uMzA0My0uMzA0My0uODAzMy0uMzA0My0xLjEwNzYgMGwtNC41ODM2IDQuNTg2Yy0uMzA0Mi4zMDQzLS4zMDQyLjgwMzMgMCAxLjEwNzZsMi41OTczIDIuNTk3M2MuMzA0My4zMDQzLjgwMzMuMzA0MyAxLjEwNzYgMGwyLjk0NzgtMi45NTI3Yy0uNjIzMS0xLjI4NzctLjUxMTItMi44NDMxLjMzODQtNC4wMzgzeiIvPjwvc3ZnPg==",
  prometheus: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg",
  grafana: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg",
  sonarqube: "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjNEU5QkNEIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+U29uYXJRdWJlPC90aXRsZT48cGF0aCBkPSJNMTUuNjg1LjM4NmwtLjQ2NS43NjZjMy40NzcgMi4xMTIgNi4zMDUgNS4yNyA3Ljk2NiA4Ljg5TDI0IDkuNjdDMjIuMjY2IDUuODg3IDE5LjMxMyAyLjU5IDE1LjY4NS4zODZ6TTguNDYyLjkxbC0uMzA1IDEuMDc1YzYuODkgMS45NzYgMTIuMzg0IDcuNjQgMTMuOTk3IDE0LjQyMWwxLjA4NS0uMjU4QzIxLjUzNSA4Ljk3NyAxNS43MzUgMi45OTcgOC40NjIuOTA5ek0wIDIuNjY3djEuMzQyYzEwLjk2MyAwIDE5Ljg4MyA4Ljc5NSAxOS44ODMgMTkuNjA1aDEuMzQyYzAtMTEuNTUtOS41MjItMjAuOTQ3LTIxLjIyNS0yMC45NDd6Ii8+PC9zdmc+",
  postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  redis: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  jira: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
  bitbucket: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg",
  vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  postman: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  swagger: "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjODVFQTJEIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+U3dhZ2dlcjwvdGl0bGU+PHBhdGggZD0iTTEyIDBDNS4zODMgMCAwIDUuMzgzIDAgMTJzNS4zODMgMTIgMTIgMTJjNi42MTYgMCAxMi01LjM4MyAxMi0xMlMxOC42MTYgMCAxMiAwem0wIDEuMTQ0YzUuOTk1IDAgMTAuODU2IDQuODYgMTAuODU2IDEwLjg1NiAwIDUuOTk1LTQuODYgMTAuODU2LTEwLjg1NiAxMC44NTYtNS45OTYgMC0xMC44NTYtNC44Ni0xMC44NTYtMTAuODU2QzEuMTQ0IDYuMDA0IDYuMDA0IDEuMTQ0IDEyIDEuMTQ0ek04LjM3IDUuODY4YTYuNzA3IDYuNzA3IDAgMCAwLS40MjMuMDA1Yy0uOTgzLjA1Ni0xLjU3My41MTctMS43MzUgMS40NzItLjExNS42NjUtLjA5NiAxLjM0OC0uMTQzIDIuMDE3LS4wMTMuMzUtLjA1LjY5Ny0uMTE1IDEuMDM4LS4xMzQuNjA5LS4zOTcuNzk4LTEuMDE2LjgzYTIuNjUgMi42NSAwIDAgMC0uMjQ0LjA0MnYxLjQ2M2MxLjEyNi4wNTUgMS4yNzguNDUyIDEuMzcgMS42MjkuMDMzLjQyOS0uMDEzLjg1OC4wMTUgMS4yODcuMDE4LjQwNi4wNzMuODA4LjE1NiAxLjIuMjU5IDEuMDc1IDEuMzA3IDEuNDM1IDIuNTc1IDEuMjE4di0xLjI4M2MtLjIwMyAwLS4zODMuMDA1LS41NTggMC0uNDMtLjAxMy0uNTkxLS4xMi0uNjMyLS41MzUtLjA1Ni0uNTM1LS4wNDItMS4wOC0uMDc1LTEuNjItLjA2NC0xLjAwMS0uMTc1LTEuOTg4LTEuMTUzLTIuNjI1LjUwMy0uMzcuODY4LS44MTIuOTgzLTEuMzk4LjA4My0uNDEuMTM0LS44MjEuMTY2LTEuMjM3LjAyOC0uNDE1LS4wMjMtLjg0LjAxNC0xLjI1LjA2LS42NjUuMTAyLS45MzcuOS0uOTEuMTIgMCAuMjM1LS4wMTcuMzY5LS4wMjd2LTEuMzFjLS4xNiAwLS4zMS0uMDA0LS40NTQtLjAwNnptNy41OTMuMDA5YTQuMjQ3IDQuMjQ3IDAgMCAwLS44MTMuMDZ2MS4yNzRjLjI0NSAwIC40MzQgMCAuNjIzLjAwNS4zMjguMDA0LjU3Ny4xMy42MS40OTQuMDMyLjMzMi4wMzEuNjY5LjA2NCAxLjAwNi4wNjUuNjY5LjEwMSAxLjM0Ny4yMTcgMi4wMDcuMTAyLjU0NC40NzUuOTUuOTQxIDEuMjgzLS44MTcuNTQ5LTEuMDU3IDEuMzMzLTEuMDk4IDIuMjE1LS4wMjMuNjA0LS4wMzcgMS4yMTMtLjA2OSAxLjgyMi0uMDI4LjU1NC0uMjIyLjczNC0uNzguNzQ4LS4xNTcuMDA0LS4zMS4wMTgtLjQ4NC4wMjh2MS4zMDVjLjMyNyAwIC42MjcuMDE5LjkyNyAwIC45MzItLjA1NSAxLjQ5NS0uNTA3IDEuNjgtMS40MTIuMDc4LS40OTguMTI0LTEgLjEzOC0xLjUwNC4wMzItLjQ2MS4wMjgtLjkyNy4wNzQtMS4zODQuMDY5LS43MTUuMzk3LTEuMDEgMS4xMTItMS4wNTdhLjk3Mi45NzIgMCAwIDAgLjE5OS0uMDQ2di0xLjQ2M2MtLjEyLS4wMTQtLjIwNC0uMDI3LS4yOTEtLjAzMi0uNTM2LS4wMjMtLjgwNC0uMjAzLS45MzctLjcxYTUuMTQ2IDUuMTQ2IDAgMCAxLS4xNTItLjk5M2MtLjAzNy0uNjE4LS4wMzMtMS4yNDEtLjA3NC0xLjg2LS4wOC0xLjE5Mi0uNzk0LTEuNzUzLTEuODg3LTEuNzg2em0tNi44OSA1LjI4YS44NDQuODQ0IDAgMCAwLS4wODMgMS42ODRoLjA1NWEuODMuODMgMCAwIDAgLjg3Ny0uNzh2LS4wNDZhLjg0NS44NDUgMCAwIDAtLjgzLS44NTh6bTIuOTExIDBhLjgwOC44MDggMCAwIDAtLjgzNC43OGMwIC4wMjcgMCAuMDUuMDA0LjA3OCAwIC41MDMuMzQyLjgyNi44NTkuODI2LjUwNyAwIC44MjYtLjMzMi44MjYtLjg1My0uMDA1LS41MDMtLjM0Mi0uODM2LS44NTUtLjgzMXptMi45NjMgMGEuODYxLjg2MSAwIDAgMC0uODc2LjgzNWMwIC40Ny4zNzguODQ5Ljg0OS44NDloLjAwOWMuNDI1LjA3NC44NTMtLjMzNy44ODEtLjgzLjAyMy0uNDU3LS4zOTItLjg1NC0uODYzLS44NTR6Ii8+PC9zdmc+",
  figma: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  playwright: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg",
  jenkins: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
};

export const skills = [
  {
    title: "AI/ML",
    skills: [
      { name: "LLM", image: icon.llm },
      { name: "RAG", image: icon.rag },
      { name: "LangChain", image: icon.langchain },
      { name: "LangGraph", image: icon.langgraph },
      { name: "crewAI", image: icon.crewai },
      { name: "OpenAI SDK", image: icon.openai },
      { name: "Anthropic SDK", image: icon.anthropic },
      { name: "Hugging Face", image: icon.huggingface },
      { name: "PyTorch", image: icon.pytorch },
      { name: "scikit-learn", image: icon.sklearn },
      { name: "vLLM", image: icon.vllm },
      { name: "Ray", image: icon.ray },
      { name: "MCP", image: icon.mcp },
      { name: "MLflow", image: icon.mlflow },
      { name: "LangSmith", image: icon.langsmith },
      { name: "Fine-tuning", image: icon.vllm },
      { name: "Pinecone", image: icon.pinecone },
      { name: "ChromaDB", image: icon.chromadb },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", image: icon.python },
      { name: "TypeScript", image: icon.typescript },
      { name: "JavaScript", image: icon.javascript },
      { name: "Go", image: icon.go },
      { name: "SQL", image: icon.sql },
      { name: "Java", image: icon.java },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", image: icon.react },
      { name: "Next.js", image: icon.nextjs },
      { name: "GraphQL", image: icon.graphql },
    ],
  },
  {
    title: "Backend & Frameworks",
    skills: [
      { name: "FastAPI", image: icon.fastapi },
      { name: "Pydantic", image: icon.pydantic },
      { name: "Node.js", image: icon.nodejs },
      { name: "Express.js", image: icon.express },
      { name: "Prisma", image: icon.prisma },
      { name: "Spring Boot", image: icon.spring },
      { name: "Django", image: icon.django },
      { name: "Flask", image: icon.flask },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "AWS", image: icon.aws },
      { name: "EKS", image: icon.aws },
      { name: "Lambda", image: icon.aws },
      { name: "S3", image: icon.aws },
      { name: "RDS", image: icon.aws },
      { name: "GCP", image: icon.gcp },
      { name: "Azure", image: icon.azure },
      { name: "Docker", image: icon.docker },
      { name: "Docker Compose", image: icon.compose },
      { name: "Kubernetes", image: icon.kubernetes },
      { name: "Terraform", image: icon.terraform },
      { name: "GitHub Actions", image: icon.githubactions },
      { name: "ArgoCD", image: icon.argo },
      { name: "Ansible", image: icon.ansible },
      { name: "CI/CD", image: icon.cicd },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", image: icon.postgres },
      { name: "pgvector", image: icon.pgvector },
      { name: "Redis", image: icon.redis },
      { name: "MongoDB", image: icon.mongodb },
      { name: "MySQL", image: icon.mysql },
      { name: "ChromaDB", image: icon.chromadb },
      { name: "Pinecone", image: icon.pinecone },
    ],
  },
  {
    title: "Tools & Observability",
    skills: [
      { name: "Git", image: icon.git },
      { name: "GitHub", image: icon.github },
      { name: "Linux", image: icon.linux },
      { name: "Kafka", image: icon.kafka },
      { name: "OpenTelemetry", image: icon.otel },
      { name: "Prometheus", image: icon.prometheus },
      { name: "Grafana", image: icon.grafana },
      { name: "SonarQube", image: icon.sonarqube },
      { name: "Apache Superset", image: icon.superset },
      { name: "Playwright", image: icon.playwright },
      { name: "tree-sitter", image: icon.treesitter },
      { name: "VS Code", image: icon.vscode },
      { name: "Postman", image: icon.postman },
      { name: "Swagger", image: icon.swagger },
      { name: "Jira", image: icon.jira },
      { name: "Bitbucket", image: icon.bitbucket },
      { name: "Figma", image: icon.figma },
      { name: "Jenkins", image: icon.jenkins },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: `${process.env.PUBLIC_URL}/odyn-logo.png`,
    role: "AI Engineer",
    company: "Pebl (Odyn Network)",
    date: "Jan 2026 - Present",
    desc: `
      ● Architected an event-driven multi-agent GPU scheduling framework (LangGraph, crewAI, MCP) autonomously routing 80% of inference and fine-tune workloads across multi-cloud GPU providers, saving 15 engineering hours weekly.
      ● Instrumented agent execution loops with LangSmith tracing, OpenTelemetry, and automated failure taxonomies, reducing non-deterministic agent debugging time by 40%.
      ● Fine-tuned a RoBERTa sequence classifier (LoRA, MLflow) predicting request token length before scheduling; dynamically allocated vLLM engine configs and boosted cluster-wide GPU memory utilization from 70% to 95%.
      ● Shipped a self-serve fine-tuning platform supporting SFT and DPO, using VRAM prediction to drive GPU selection and Ray for distributed orchestration; cluster utilization moved from 65% to 98%.
      ● Architected the marketplace control plane in Go, TypeScript, and Next.js across 10+ GPU providers, cutting provisioning time from 12 minutes to under 60 seconds at 99.9% availability.
      ● Optimized high-throughput LLM serving by deploying distributed vLLM instances on 8x NVIDIA A100 nodes via Ray, leveraging Tensor Parallelism (TP=4) and PagedAttention to reduce p99 time-to-first-token (TTFT) by 42%.
    `,
    skills: [
      "LangGraph",
      "crewAI",
      "MCP",
      "vLLM",
      "Ray",
      "LoRA",
      "SFT",
      "DPO",
      "MLflow",
      "Go",
      "TypeScript",
      "Next.js",
      "OpenTelemetry",
      "LangSmith",
    ],
  },
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Infor_logo.svg/2048px-Infor_logo.svg.png",
    role: "AI Engineer",
    company: "Infor US LLC",
    date: "May 2025 - Dec 2025",
    desc: `
      ● Architected an enterprise RAG microservice on GCP GKS (Python, FastAPI, ChromaDB, pgvector) providing natural-language search over 33M+ ERP transaction records at 100K+ daily queries.
      ● Elevated RAGAS retrieval faithfulness from 0.71 to 0.89 by replacing single-vector search with a hybrid retrieval pipeline (Dense Vector + BM25 Sparse Search) backed by a Cohere Cross-Encoder re-ranker.
      ● Built an automated offline evaluation pipeline integrated into GitHub Actions CI that runs RAGAS scoring (faithfulness, answer relevance, context precision) on LangSmith traces, blocking regression releases automatically.
      ● Engineered a two-tier semantic cache (Redis + in-process LRU) that reduced p50 query latency by 35% and lowered LLM API expenditure by $12K annually without sacrificing answer groundedness.
      ● Authored automated data-readiness scoring pipelines for pipeline completeness and consistency across 33M records, cutting manual pre-validation efforts by 40%.
      ● Implemented runtime guardrails and PII redaction layers using NeMo Guardrails to sanitize prompts and model responses, preventing prompt injections and maintaining enterprise data privacy compliance.
    `,
    skills: [
      "Python",
      "FastAPI",
      "ChromaDB",
      "pgvector",
      "GCP",
      "RAG",
      "RAGAS",
      "Redis",
      "LangSmith",
      "NeMo Guardrails",
      "GitHub Actions",
    ],
  },
  {
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/commons/7/72/DeloitteNewLogo.jpg",
    role: "Software Engineer, AI and Cloud Systems",
    company: "Deloitte",
    date: "Apr 2022 - Aug 2024",
    desc: `
      ● Built and operated an event-driven microservices platform (Node.js, Kafka, AWS Lambda) synchronizing 10K+ clinical trial records across regulatory systems under HIPAA, sustaining 99.9% uptime.
      ● Designed and secured REST APIs over PostgreSQL, integrating SonarQube quality gates into CI that reduced code complexity 35% and duplication 20%.
      ● Designed a HIPAA-compliant GPT-4 RAG compliance assistant that improved document reviewer throughput by 35% and cut manual effort by 50%.
      ● Migrated legacy BI to Apache Superset dashboards (Python, SQL), eliminating $15K annual licensing cost and enabling self-serve analytics for 50+ analysts.
    `,
    skills: [
      "Node.js",
      "Kafka",
      "AWS Lambda",
      "PostgreSQL",
      "GPT-4",
      "RAG",
      "Apache Superset",
      "HIPAA",
      "SonarQube",
      "Python",
    ],
  },
  {
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/commons/0/04/Datamatics_Logo.svg",
    role: "Software Engineer",
    company: "Datamatics",
    date: "Mar 2021 - Mar 2022",
    desc: `
      ● Built Node.js microservices for fintech workflows, reducing API latency 40% and automating 90% of client onboarding, accelerating revenue recognition.
      ● Optimized PostgreSQL and Redis caching, reducing response times 65% while sustaining 50K+ daily transactions at peak load.
      ● Delivered PCI-DSS compliant payment integration APIs with zero security incidents during the engagement.
    `,
    skills: [
      "Node.js",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "PCI-DSS",
      "Fintech",
    ],
  },
  {
    id: 4,
    img: `${process.env.PUBLIC_URL}/hexagon-logo.png`,
    role: "Associate Software Engineer",
    company: "Hexagon Global",
    date: "Aug 2019 - Mar 2021",
    desc: `
      ● Built a modular Report Designer in Java and Spring Boot that cut analyst report creation from 2 hours to 10 minutes.
      ● Optimized data ingestion and API layers for 25% higher backend throughput under sustained load.
      ● Automated CI/CD pipeline with Docker and Kubernetes, reducing release cycle time by 30%.
    `,
    skills: [
      "Java",
      "Spring Boot",
      "Docker",
      "Kubernetes",
      "CI/CD",
    ],
  },
];

export const education = [
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/en/a/a1/Arizona_State_University_seal.svg",
    school: "Arizona State University",
    date: "May 2026",
    gpa: "GPA: 4.0 / 4.0",
    desc: "M.S. in Data Science, Analytics and Engineering with focus on machine learning, AI systems, and scalable distributed systems.",
    degree: "M.S., Data Science, Analytics and Engineering",
  },
  {
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/en/a/a0/Visvesvaraya_Technological_University_logo.png",
    school: "Visvesvaraya Technological University",
    date: "May 2018",
    gpa: "GPA: 3.5 / 4.0",
    desc: "B.E. in Computer Science and Engineering with focus on software engineering, algorithms, and data structures.",
    degree: "B.E., Computer Science and Engineering",
  },
];

export const projects = [
  {
    id: 0,
    title: "Evidence Locker – AI Compliance Evidence Management",
    date: "2026",
    description:
      `● Engineered a Next.js 15, PostgreSQL, and Prisma application classifying compliance evidence against NIST SP 800-53 controls using Claude Sonnet with structured outputs.
● Utilized prompt caching to slash repeated token costs by 60% and built an async Postgres queue (SELECT FOR UPDATE SKIP LOCKED) to ensure audit trail immutability.
● Playwright end-to-end coverage, GitHub Actions CI, and single-command Docker Compose setup.`,
    image: `${process.env.PUBLIC_URL}/projects/evidence-locker.png`,
    tags: [
      "Next.js 15",
      "PostgreSQL",
      "Prisma",
      "Claude Sonnet",
      "Playwright",
      "Docker Compose",
      "GitHub Actions",
    ],
    category: "web app",
    github: "https://github.com/rajmahato111/evidence-locker",
    webapp: "",
    member: [
      {
        name: "Raj Kumar Mahto",
        img: `${process.env.PUBLIC_URL}/RajImage.jpeg`,
        linkedin: "https://www.linkedin.com/in/rajmahato111/",
        github: "https://github.com/rajmahato111",
      },
    ],
  },
  {
    id: 1,
    title: "Code Quality Intelligence Agent",
    date: "2025",
    description:
      `● Built a multi-language codebase analysis agent parsing AST structures with tree-sitter, enabling scope-aware context retrieval beyond standard fixed-window chunking.
● Integrated six parallel static analysis engines (security, performance, complexity) orchestrated via FastAPI, CLI, and React UI.`,
    image:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    tags: [
      "Python",
      "FastAPI",
      "React",
      "tree-sitter",
      "CLI",
      "Static Analysis",
      "LLM",
    ],
    category: "web app",
    github: "https://github.com/rajmahato111/Code-Quality-Intelligence-Agent",
    webapp: "",
    member: [
      {
        name: "Raj Kumar Mahto",
        img: `${process.env.PUBLIC_URL}/RajImage.jpeg`,
        linkedin: "https://www.linkedin.com/in/rajmahato111/",
        github: "https://github.com/rajmahato111",
      },
    ],
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
