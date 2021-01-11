const previewSecret = "5tayTun3dPrevi3vv!";
const projectUrl = "https://staytuned-orpin.vercel.app";

// "https://staytuned-orpin.vercel.app";
// "http://localhost:3000";

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`;
}
